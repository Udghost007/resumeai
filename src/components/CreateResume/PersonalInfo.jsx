import { Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { personalInfoSchema } from "../../Schemas/Schemas";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import NormalInputField from "../ui/InputField/NormalInputField";
import { createResume, updateResume } from "../../pages/Resume/Slice/action";
import FormikStateObserver from "./FormikStateObserver";

const PersonalInfo = ({ onNext, onChange }) => {
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const userId = useAppSelector((state) => state.auth.user?._id);
  const dispatch = useAppDispatch();

  // Extract personal info safely
  const pInfo = Array.isArray(selectedResume?.personalInfo)
    ? selectedResume.personalInfo[0]
    : selectedResume?.personalInfo || {};

  const initialValues = {
    title: pInfo.title || "",
    fullName: pInfo.fullName || "",
    email: pInfo.email || "",
    phone: pInfo.phone || "",
    address: pInfo.address || "",
    linkedin: pInfo.linkedin || "",
    github: pInfo.github || "",
  };

  const handleSubmit = async (values) => {
    try {
      const template = localStorage.getItem("selectedTemplateId") || "modern";
      const payload = {
        title: values.fullName ? `${values.fullName} Resume` : "My Resume",
        template,
        personalInfo: { ...values },
      };

      let result;
      if (selectedResume?._id) {
        result = await dispatch(
          updateResume({ id: selectedResume._id, resumeData: payload }),
        ).unwrap();
      } else {
        result = await dispatch(createResume(payload)).unwrap();
      }

      if (result.success) {
        onNext();
      }
    } catch (error) {
      console.error("Save personal info failed:", error);
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={personalInfoSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form>
          <FormikStateObserver onChange={(values) => onChange({ personalInfo: values })} />

          <div className="grid md:grid-cols-2 gap-4">
            <NormalInputField label="Job Title" name="title" placeholder="e.g. Frontend Developer" />

            <NormalInputField
              label="Full Name"
              name="fullName"
              placeholder="Full Name"
            />

            <NormalInputField
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />

            <NormalInputField
              label="Phone Number"
              name="phone"
              placeholder="Phone Number"
            />

            <NormalInputField
              label="Address"
              name="address"
              placeholder="Address"
            />

            <NormalInputField
              label="LinkedIn URL"
              name="linkedin"
              placeholder="LinkedIn URL"
            />

            <NormalInputField
              label="GitHub URL"
              name="github"
              placeholder="GitHub URL"
            />
          </div>

          <div className="flex justify-end mt-6">
            <PrimaryButton type="submit" text="Save Personal Info" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalInfo;

