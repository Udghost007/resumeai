import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { api } from "../services/axios";

const ResumeForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const payload = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        summary: values.summary,
        experience: values.experience,
        education: values.education,
        skills: values.skills
          ? values.skills.split(",").map((s) => s.trim())
          : [],
      };

      await api.post("/resume", payload);

      toast.success("Resume saved successfully");
      resetForm();
    } catch (error) {
      console.error(error);
      const msg =
        error?.message || error?.response?.data || "Failed to save resume";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Save Resume</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <Field
                name="fullName"
                className="mt-1 block w-full p-2 border rounded"
              />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="fullName" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full p-2 border rounded"
              />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Phone</label>
              <Field
                name="phone"
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Professional Summary
              </label>
              <Field
                as="textarea"
                name="summary"
                rows="4"
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Experience (free text)
              </label>
              <Field
                as="textarea"
                name="experience"
                rows="4"
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Education (free text)
              </label>
              <Field
                as="textarea"
                name="education"
                rows="3"
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Skills (comma separated)
              </label>
              <Field
                name="skills"
                className="mt-1 block w-full p-2 border rounded"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
              >
                {isSubmitting ? "Saving..." : "Save Resume"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResumeForm;
