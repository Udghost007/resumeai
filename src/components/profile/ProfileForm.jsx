import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { updateUserProfile } from "../../pages/Auth/Slice/action";
import toast from "react-hot-toast";

const profileSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().nullable(),
  linkedin: Yup.string().url("Must be a valid URL").nullable(),
  github: Yup.string().url("Must be a valid URL").nullable(),
  bio: Yup.string().nullable(),
  avatar: Yup.string().nullable(),
});

const ProfileForm = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const initialValues = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    linkedin: user?.linkedin || "",
    github: user?.github || "",
    bio: user?.bio || "",
    avatar: user?.avatar || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(updateUserProfile(values)).unwrap();
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err || "Failed to update profile");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Profile Information</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={profileSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting, errors, touched, values, setFieldValue }) => (
          <Form className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2 flex flex-col items-center mb-6">
              <img
                src={values.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(values.name || "User")}&background=6366f1&color=fff`}
                alt="Avatar"
                className="w-28 h-28 rounded-full border-2 border-indigo-100 shadow-sm object-cover mb-3"
              />
              <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-semibold transition border border-slate-200 shadow-sm">
                Change Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFieldValue("avatar", reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            </div>

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
                placeholder="Email"
                className={`border p-3 rounded-xl outline-none focus:border-indigo-500 transition ${
                  errors.email && touched.email ? "border-red-500" : "border-slate-200"
                }`}
              />
              <ErrorMessage name="email" component="span" className="text-red-500 text-xs mt-1 ml-1" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-500 mb-1 ml-1">Phone Number</label>
              <Field
                name="phone"
                placeholder="Phone"
                className="border border-slate-200 p-3 rounded-xl outline-none focus:border-indigo-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold text-slate-500 mb-1 ml-1">LinkedIn URL</label>
              <Field
                name="linkedin"
                placeholder="LinkedIn URL"
                className={`border p-3 rounded-xl outline-none focus:border-indigo-500 transition ${
                  errors.linkedin && touched.linkedin ? "border-red-500" : "border-slate-200"
                }`}
              />
              <ErrorMessage name="linkedin" component="span" className="text-red-500 text-xs mt-1 ml-1" />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-semibold text-slate-500 mb-1 ml-1">GitHub URL</label>
              <Field
                name="github"
                placeholder="GitHub URL"
                className={`border p-3 rounded-xl outline-none focus:border-indigo-500 transition ${
                  errors.github && touched.github ? "border-red-500" : "border-slate-200"
                }`}
              />
              <ErrorMessage name="github" component="span" className="text-red-500 text-xs mt-1 ml-1" />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-semibold text-slate-500 mb-1 ml-1">Bio</label>
              <Field
                as="textarea"
                name="bio"
                rows="4"
                placeholder="Brief bio about yourself"
                className="border border-slate-200 p-3 rounded-xl outline-none focus:border-indigo-500 transition"
              />
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-xl font-semibold transition shadow-sm cursor-pointer"
              >
                {isSubmitting ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForm;