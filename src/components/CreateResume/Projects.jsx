import { Form, Formik, FieldArray } from "formik";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import aiService from "../../services/aiService";
import { updateResume } from "../../pages/Resume/Slice/action";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import NormalInputField from "../ui/InputField/NormalInputField";
import NormalTextArea from "../ui/InputField/NormalTextArea";
import FormikStateObserver from "./FormikStateObserver";

const Projects = ({ onNext, onChange, id }) => {
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const dispatch = useAppDispatch();

  const initialValues = {
    projects: selectedResume?.projects?.length > 0
      ? selectedResume.projects
      : [
          {
            projectName: "",
            technologies: "",
            description: "",
          },
        ],
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!id) {
      console.error("Cannot save project: resumeId is missing.");
      setSubmitting(false);
      return;
    }

    try {
      const payload = { projects: values.projects };
      const result = await dispatch(
        updateResume({ id: id, resumeData: payload }),
      ).unwrap();
      if (result?.success) {
        onNext();
      }
    } catch (error) {
      console.error("Save projects failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const generateDescription = async (projectName, technologies, index, setFieldValue, setLoading) => {
    try {
      setLoading(true);
      const response = await aiService.generate({
        type: "project",
        prompt: `Write a concise resume project description for ${projectName}. Technologies: ${technologies}.`,
      });
      setFieldValue(`projects.${index}.description`, response.content || "");
    } catch (err) {
      console.error("AI Generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            <FormikStateObserver onChange={(val) => onChange({ projects: val.projects })} />

            <FieldArray name="projects">
              {({ push, remove }) => (
                <>
                  {values.projects.map((proj, index) => (
                    <div key={index} className="border rounded-2xl p-5 mb-5 bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">
                          Project #{index + 1}
                        </h3>

                        {values.projects.length > 1 && (
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-500 hover:text-red-700 transition"
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <NormalInputField
                          label="Project Name"
                          name={`projects.${index}.projectName`}
                          placeholder="Project Name"
                        />

                        <NormalInputField
                          label="Technologies Used"
                          name={`projects.${index}.technologies`}
                          placeholder="Technologies Used"
                        />
                      </div>

                      <div className="mt-4">
                        <NormalTextArea
                          label="Project Description"
                          name={`projects.${index}.description`}
                          value={proj.description}
                          onChange={(e) => setFieldValue(`projects.${index}.description`, e.target.value)}
                          rows={6}
                          placeholder="Project Description"
                        />
                        <div className="flex justify-end mt-2">
                          <PrimaryButton
                            type="button"
                            text="Generate AI Description"
                            onClick={() =>
                              generateDescription(
                                proj.projectName,
                                proj.technologies,
                                index,
                                setFieldValue,
                                () => {}
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        push({
                          projectName: "",
                          technologies: "",
                          description: "",
                        })
                      }
                      className="bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition"
                    >
                      <FaPlus />
                      Add Project
                    </button>

                    <PrimaryButton
                      type="submit"
                      text={isSubmitting ? "Saving..." : "Save & Next"}
                    />
                  </div>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Projects;
