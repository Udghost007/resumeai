import { Formik, Form, FieldArray } from "formik";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { updateResume } from "../../pages/Resume/Slice/action";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import NormalInputField from "../ui/InputField/NormalInputField";
import NormalTextArea from "../ui/InputField/NormalTextArea";
import FormikStateObserver from "./FormikStateObserver";
import toast from "react-hot-toast";
import { generateAiAction } from "../../services/generateAiAction";
import { SummaryPrompt } from "../prompt/SummaryPrompt";

const Experience = ({ onNext, onChange, id }) => {
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const dispatch = useAppDispatch();

  const handleGenerateAI = async (index, setFieldValue, itemValues) => {
    try {
      const title = itemValues.position || "Software Developer";
      const description = itemValues.description || "";

      const prompt = SummaryPrompt(title, description);
      const resp = await dispatch(generateAiAction(prompt)).unwrap();
      const options = resp?.description_options;

      console.log("AI Response for Experience:", options);

      if (!options || !Array.isArray(options)) {
        return;
      }

      const experienceText = options
        .map((option) => {
          const bullets = Array.isArray(option.bullets)
            ? option.bullets.map((bullet) => `- ${bullet}`).join("\n")
            : "";
          return options.length > 1
            ? `Option ${option.option_number || ""}\n${bullets}`.trim()
            : bullets;
        })
        .join("\n\n");

      setFieldValue(`experience.${index}.description`, experienceText);
      toast.success(`AI options generated for Experience #${index + 1}`);
    } catch (error) {
      console.error("AI generation failed for Experience:", error);
      toast.error(error?.message || "Failed to generate AI experience.");
    }
  };

  const initialValues = {
    experience: selectedResume?.experience?.length > 0
      ? selectedResume.experience
      : [
          {
            company: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
  };

  const handleSubmit = async (values) => {
    try {
      const payload = {
        experience: values.experience,
      };
      const result = await dispatch(
        updateResume({ id: id, resumeData: payload }),
      ).unwrap();
      onNext();
      console.log("Experience saved:", result);
    } catch (error) {
      console.error("Save experience failed:", error);
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FormikStateObserver onChange={(val) => onChange({ experience: val.experience })} />

            <FieldArray name="experience">
              {({ push, remove }) => (
                <>
                  {values.experience.map((item, index) => (
                    <div key={index} className="border rounded-2xl p-5 mb-5 bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">
                          Experience #{index + 1}
                        </h3>

                        {values.experience.length > 1 && (
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
                          label="Company Name"
                          name={`experience.${index}.company`}
                          placeholder="Company Name"
                        />

                        <NormalInputField
                          label="Job Title"
                          name={`experience.${index}.position`}
                          placeholder="Job Title"
                        />

                        <NormalInputField
                          label="Start Date"
                          name={`experience.${index}.startDate`}
                          type="date"
                        />

                        <NormalInputField
                          label="End Date"
                          name={`experience.${index}.endDate`}
                          type="date"
                        />

                        <div className="md:col-span-2">
                          <NormalInputField
                            label="Location"
                            name={`experience.${index}.location`}
                            placeholder="Location"
                          />
                        </div>
                      </div>

                      <div className="mt-5">
                        <NormalTextArea
                          label="Job Description"
                          name={`experience.${index}.description`}
                          value={item.description}
                          onChange={(e) => setFieldValue(`experience.${index}.description`, e.target.value)}
                          rows={6}
                          placeholder="Describe your responsibilities and achievements..."
                        />
                        <div className="flex justify-end mt-2">
                          <PrimaryButton
                            type="button"
                            text="Generate with AI"
                            onClick={() => handleGenerateAI(index, setFieldValue, item)}
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
                          company: "",
                          position: "",
                          location: "",
                          startDate: "",
                          endDate: "",
                          description: "",
                        })
                      }
                      className="bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition"
                    >
                      <FaPlus />
                      Add Experience
                    </button>

                    <PrimaryButton type="submit" text="Save & Next" />
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

export default Experience;

