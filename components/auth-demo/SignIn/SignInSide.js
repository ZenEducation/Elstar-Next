import React from "react";
import SignInForm from "components/auth/SignIn/SignInForm";
import Side from "components/layout/AuthLayout/Side";

const SignInSide = (props) => {
  return (
    <Side
      content={
        <>
          <h3 className="mb-1">Welcome back!</h3>
          <p>Please enter your credentials to sign in!</p>
        </>
      }
    >
      <SignInForm
        disableSubmit={true}
        signUpUrl="/auth/SignUp/sign-up-side"
        forgotPasswordUrl="/auth/ForgotPassword/forgot-password-side"
        {...props}
      />
    </Side>
  );
};

export default SignInSide;