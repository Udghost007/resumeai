import LoginForm from "../../components/AuthForms/LoginForm";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue building your resume"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
