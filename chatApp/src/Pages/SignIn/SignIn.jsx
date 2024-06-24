import React from "react";
import SignInLeft from "../../Components/SignComponents/SignInLeft";
import SignInRight from "../../Components/SignComponents/SignInRight";

function SignIn() {
  return (
    <>
      <div id="registrationFull" className="flex justify-between items-center">
        <SignInLeft />
        <SignInRight />
      </div>
    </>
  );
}

export default SignIn;
