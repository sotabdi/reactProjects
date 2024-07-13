import React from "react";
import EmailVerifiedImg from "../../../assets/404Assets/email.gif";
import { Link } from "react-router-dom";

const Error = ({userInfo}) => {
const {email,status}=userInfo;
  return (
    <div className="flex flex-col w-full h-full items-center text-center justify-center">
      <div>
        <picture>
          <img src={EmailVerifiedImg} alt={EmailVerifiedImg} className="w-[65%] m-auto" />
        </picture>
      </div>
      <div>
        <p className="font-poppins font-bold text-[30px] py-[15px]">Verify your Email</p>
        <p className="font-poppins font-normal text-[16px] text-secondary70_cont_color max-w-[400px] pb-[40px]">
          We have sent email to <span className="font-semibold text-black">{email}</span> to confirm
          the validity please click the button
        </p>
        <button className="w-full font-openSans font-semibold text-xl text-white bg-primary_Color py-[26px] rounded-lg">
          <Link to={'https://mail.google.com/mail/u/0/#inbox'} target="_blank">Go to Mailbox</Link>
          </button>
      </div>
    </div>
  );
};

export default Error;
