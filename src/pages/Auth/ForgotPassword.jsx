import ForgotPasswordForm from "../../components/AuthForms/ForgotPasswordForm";
import AuthLayout from "../../layouts/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email to receive a reset link"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
