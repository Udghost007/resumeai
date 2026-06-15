import RegisterForm from "../../components/AuthForms/RegisterForm";
import AuthLayout from "../../layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start building professional resumes with AI today"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
