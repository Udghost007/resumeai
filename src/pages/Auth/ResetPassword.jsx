import ResetPasswordForm from "../../components/AuthForms/ResetPasswordForm";
import AuthLayout from "../../layouts/AuthLayout";

const ResetPassword = () => {
  return (
    <AuthLayout
      title="Create New Password"
      subtitle="Enter a new password to secure your account"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPassword;
