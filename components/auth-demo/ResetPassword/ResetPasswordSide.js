import React from "react";
import ResetPasswordForm from "components/auth/ResetPassword/ResetPasswordForm";
import Side from "components/layout/AuthLayout/Side";

const ResetPasswordSide = (props) => {
  return (
    <Side>
      <ResetPasswordForm
        disableSubmit={true}
        signInUrl="/auth/sign-in-side"
        {...props}
      />
    </Side>
  );
};

export default ResetPasswordSide;
