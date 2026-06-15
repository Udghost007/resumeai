import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks/useRedux";
import { updateUserProfile } from "../../pages/Auth/Slice/action";
import toast from "react-hot-toast";

const securitySchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SecuritySettings = () => {
  const dispatch = useAppDispatch();

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(
        updateUserProfile({ password: values.newPassword }),
      ).unwrap();
      toast.success("Password updated successfully!");
      resetForm();
    } catch (err) {
      toast.error(err || "Failed to update password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-bold mb-5">Security Settings</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={securitySchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-500 mb-1 ml-1">New Password</label>
              <Field
                type="password"
                name="newPassword"
                placeholder="New Password"
                className={`w-full border p-3 rounded-xl outline-none focus:border-indigo-500 transition ${
                  errors.newPassword && touched.newPassword ? "border-red-500" : "border-slate-200"
                }`}
              />
              <ErrorMessage name="newPassword" component="span" className="text-red-500 text-xs mt-1 ml-1" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-500 mb-1 ml-1">Confirm New Password</label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={`w-full border p-3 rounded-xl outline-none focus:border-indigo-500 transition ${
                  errors.confirmPassword && touched.confirmPassword ? "border-red-500" : "border-slate-200"
                }`}
              />
              <ErrorMessage name="confirmPassword" component="span" className="text-red-500 text-xs mt-1 ml-1" />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-xl font-semibold transition cursor-pointer"
              >
                {isSubmitting ? "Updating..." : "Update Password"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SecuritySettings;
