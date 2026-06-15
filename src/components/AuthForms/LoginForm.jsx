import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { loginUser } from "../../pages/Auth/Slice/action";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import NormalInputField from "../ui/InputField/NormalInputField";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading, error } = useAppSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    const result = await dispatch(loginUser(values));

    if (loginUser.fulfilled.match(result)) {
      navigate("/resumes");
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
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email"
        />

        <NormalInputField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
        />

        <div className="text-right">
          <Link to="/forgot-password" className="text-indigo-600 text-sm">
            Forgot Password?
          </Link>
        </div>

        <PrimaryButton
          type="submit"
          text={loading ? "Logging in..." : "Login"}
          loader={loading}
          className="w-full"
        />

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600">
            Register
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
