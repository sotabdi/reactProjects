import React from "react";
import SigninImg from "../../assets/SignIn.jpg";

function SignInRight() {
  return (
    <div id="registrationRightFull" className="w-[45%]">
      <picture>
        <img
          src={SigninImg}
          alt={SigninImg}
          className="h-screen object-cover w-full"
        />
      </picture>
    </div>
  );
}

export default SignInRight;
