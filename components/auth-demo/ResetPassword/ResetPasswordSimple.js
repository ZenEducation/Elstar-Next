import React from "react";
import ResetPasswordForm from "components/auth/ResetPassword/ResetPasswordForm";
import Simple from "components/layout/AuthLayout/Simple";

const ResetPasswordSimple = (props) => {
  return (
    <Simple>
      <ResetPasswordForm
        disableSubmit={true}
        signInUrl="/auth/SignIn/sign-in-simple"
        {...props}
      />
    </Simple>
  );
};

export default ResetPasswordSimple;