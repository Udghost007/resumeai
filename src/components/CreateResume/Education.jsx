import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import NormalInputField from "../ui/InputField/NormalInputField";
import { updateResume } from "../../pages/Resume/Slice/action";
import FormikStateObserver from "./FormikStateObserver";

const educationItemSchema = Yup.object({
  degree: Yup.string().required("Degree is required"),
  college: Yup.string().required("College is required"),
  university: Yup.string().required("University is required"),
  passingYear: Yup.string().required("Passing Year is required"),
});

const educationSchema = Yup.object({
  education: Yup.array().of(educationItemSchema),
});

const Education = ({ onNext, onChange, id }) => {
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const dispatch = useAppDispatch();

  const initialValues = {
    education: selectedResume?.education?.length > 0
      ? selectedResume.education
      : [
          {
            degree: "",
            college: "",
            university: "",
            passingYear: "",
          },
        ],
  };

  const handleSubmit = async (values) => {
    try {
      const payload = {
        education: values.education,
      };
      const result = await dispatch(
        updateResume({ id: id, resumeData: payload }),
      ).unwrap();
      onNext();
      console.log("Education saved:", result);
    } catch (error) {
      console.error("Save education failed:", error);
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={educationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ values }) => (
          <Form>
            <FormikStateObserver onChange={(val) => onChange({ education: val.education })} />

            <FieldArray name="education">
              {({ push, remove }) => (
                <>
                  {values.education.map((item, index) => (
                    <div key={index} className="border rounded-2xl p-5 mb-5 bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">
                          Education #{index + 1}
                        </h3>

                        {values.education.length > 1 && (
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
                          label="Degree"
                          name={`education.${index}.degree`}
                          placeholder="Degree"
                        />

                        <NormalInputField
                          label="College / School"
                          name={`education.${index}.college`}
                          placeholder="College / School"
                        />

                        <NormalInputField
                          label="University / Board"
                          name={`education.${index}.university`}
                          placeholder="University / Board"
                        />

                        <NormalInputField
                          label="Passing Year"
                          name={`education.${index}.passingYear`}
                          placeholder="Passing Year"
                          type="number"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        push({
                          degree: "",
                          college: "",
                          university: "",
                          passingYear: "",
                        })
                      }
                      className="bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition"
                    >
                      <FaPlus />
                      Add Education
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

export default Education;

