import React from "react";
import InputFeild from "../CommonComponents/InputFeild";

const RegistrationLeft = () => {
  return (
    <div
      id="registrationLeftFull"
      className="w-[55%] flex justify-center items-center"
    >
      <div className="registrationLeft flex flex-col justify-start items-start gap-y-10">
        <div className="registrationLeftTop flex flex-col gap-y-[13px]">
          <h2 className="registrationLeftTop__header font-nunito text-[34px] font-bold text-primary_cont_color">
            Get started with easily register
          </h2>
          <p className="registrationLeftTop__discrip font-nunito text-xl text-secondary_cont_color">
            Free register and you can enjoy it
          </p>
        </div>
        <div className="registrationLeftBottom">
          <div className="registrationBottom__inputs flex flex-col gap-y-[47px]">
            <InputFeild
              fName={"Email Address"}
              placeholder={"jhon@example.com"}
              type={"text"}
              id={"Email"}
            />
            <InputFeild
              fName={"Ful name"}
              placeholder={"Jhon Doe"}
              type={"text"}
              id={"FullName"}
            />
            <InputFeild
              fName={"Password"}
              placeholder={"• • • • • • • •"}
              type={"password"}
              id={"password"}
            />
          </div>
          <a href="#" className="bg-primary_Color border-0 rounded-full p-[19px] block text-center font-nunito text-xl text-white font-semibold mt-[51px] mb-[35px]">Sign up</a>
          <p className="registrationBottom__link text-center font-openSans font-normal text-Extra_cont_color">Already  have an account ? <a href="#" className="text-yellow_color font-bold">Sign In</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationLeft;
