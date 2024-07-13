import React from "react";
import errorImg from "../../assets/404Assets/confused.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center w-full h-screen gap-x-[40px] px-[150px]">
      <div className="h-full w-full flex flex-col justify-center">
        <h6 className="font-poppins font-bold text-[200px] text-primary_Color">404</h6>
        <p className="font-poppins font-medium text-[50px] pb-[50px]">
          {`Looks like you're lost:(`}
        </p>
        <div>
          <button className="font-openSans font-semibold text-xl text-primary_Color border border-primary_Color py-[26px] rounded-[20px] px-[35px]">
            <Link to={"/"}>Go to HomePage</Link>
          </button>
        </div>
      </div>
      <div className="h-full w-full flex items-end">
        <picture>
          <img src={errorImg} alt={errorImg} className='size-[600px]'/>
        </picture>
      </div>
    </div>
  );
};

export default Error;
