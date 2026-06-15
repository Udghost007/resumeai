import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { registerUser } from "../../pages/Auth/Slice/action";

import NormalInputField from "../ui/InputField/NormalInputField";
import PrimaryButton from "../ui/Buttons/PrimaryButton";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading, error } = useAppSelector((state) => state.auth);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    const result = await dispatch(
      registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    );

    if (registerUser.fulfilled.match(result)) {
      navigate("/templates");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-5">
        {error && (
          <p className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <NormalInputField
          name="name"
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
        />

        <NormalInputField
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
        />

        <NormalInputField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter password"
        />

        <NormalInputField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
        />

        <PrimaryButton
          type="submit"
          text={loading ? "Creating account..." : "Create Account"}
          loader={loading}
          className="w-full"
        />

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600">
            Login
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
