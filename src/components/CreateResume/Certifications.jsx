import { FieldArray, Form, Formik } from "formik";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import NormalInputField from "../ui/InputField/NormalInputField";
import { updateResume } from "../../pages/Resume/Slice/action";
import FormikStateObserver from "./FormikStateObserver";

const Certifications = ({ onNext, onChange, id }) => {
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const dispatch = useAppDispatch();
  const resumeId = id;

  const initialValues = {
    certifications: selectedResume?.certifications?.length > 0
      ? selectedResume.certifications
      : [
          {
            name: "",
            issuedBy: "",
            issueDate: "",
            credentialId: "",
          },
        ],
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!resumeId) {
      console.error("Cannot save certifications: resumeId is missing.");
      setSubmitting(false);
      return;
    }

    try {
      const payload = {
        certifications: values.certifications.map((cert) => ({
          name: cert.name,
          issuedBy: cert.issuedBy,
          issueDate: cert.issueDate,
          credentialId: cert.credentialId,
        })),
      };
      const result = await dispatch(
        updateResume({ id: resumeId, resumeData: payload }),
      ).unwrap();

      console.log("Certifications saved:", result);
      if (onNext) onNext();
    } catch (error) {
      console.error("Save certifications failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <FormikStateObserver onChange={(val) => onChange({ certifications: val.certifications })} />

            <FieldArray name="certifications">
              {({ push, remove }) => (
                <>
                  {values.certifications.map((cert, index) => (
                    <div key={index} className="border rounded-2xl p-5 mb-5 bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold">
                          Certification #{index + 1}
                        </h3>
                        {values.certifications.length > 1 && (
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
                          label="Certification Name"
                          name={`certifications.${index}.name`}
                          placeholder="AWS Certified Developer"
                        />
                        <NormalInputField
                          label="Issued By"
                          name={`certifications.${index}.issuedBy`}
                          placeholder="Amazon Web Services"
                        />
                        <NormalInputField
                          label="Issue Date"
                          type="date"
                          name={`certifications.${index}.issueDate`}
                        />
                        <NormalInputField
                          label="Credential ID"
                          name={`certifications.${index}.credentialId`}
                          placeholder="ABC123XYZ"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        push({
                          name: "",
                          issuedBy: "",
                          issueDate: "",
                          credentialId: "",
                        })
                      }
                      className="bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition"
                    >
                      <FaPlus />
                      Add Certification
                    </button>
                    <PrimaryButton
                      type="submit"
                      text={isSubmitting ? "Saving..." : "Save & Next"}
                      loader={isSubmitting}
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

export default Certifications;

