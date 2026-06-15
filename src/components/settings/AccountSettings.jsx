import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { updateUserProfile } from "../../pages/Auth/Slice/action";
import toast from "react-hot-toast";

const accountSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const AccountSettings = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const initialValues = {
    name: user?.name || "",
    email: user?.email || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(updateUserProfile(values)).unwrap();
      toast.success("Account settings updated successfully!");
    } catch (err) {
      toast.error(err || "Failed to update account settings");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-bold mb-5">Account Settings</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={accountSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-500 mb-1 ml-1">Full Name</label>
              <Field
                name="name"
                placeholder="Full Name"
                className={`border p-3 rounded-xl outline-none focus:border-indigo-500 transition ${
                  errors.name && touched.name ? "border-red-500" : "border-slate-200"
                }`}
              />
              <ErrorMessage name="name" component="span" className="text-red-500 text-xs mt-1 ml-1" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-500 mb-1 ml-1">Email Address</label>
              <Field
                name="email"
                placeholder="Email Address"
                className={`border p-3 rounded-xl outline-none focus:border-indigo-500 transition ${
                  errors.email && touched.email ? "border-red-500" : "border-slate-200"
                }`}
              />
              <ErrorMessage name="email" component="span" className="text-red-500 text-xs mt-1 ml-1" />
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-xl font-semibold transition cursor-pointer"
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccountSettings;
