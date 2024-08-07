import React from "react";
import { FaKey } from "react-icons/fa";
import { IoInvertMode } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

const AdditionalSettings = ({ className = "w-full h-full" }) => {
  return (
    <div className={className}>
      <div className="flex flex-col h-full w-full shadow-lg pt-[26px] pb-[39px] px-[25px] rounded-[20px]">
        <div className="h-full">
          <h5 className="font-poppins font-semibold text-xl pb-[35px]">
            Account Settings
          </h5>
          <div className="flex flex-col gap-y-[33px] pl-[58px]">
            <div className="flex items-center">
              <span className="text-2xl">
                <FaKey />
              </span>
              <button className="font-poppins font-normal text-xl ml-[35px]">
                Change Password
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-2xl">
                <IoInvertMode />
              </span>
              <button className="font-poppins font-normal text-xl ml-[35px]">
                Theme
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-2xl">
                <RiDeleteBin6Fill />
              </span>
              <button className="font-poppins font-normal text-xl ml-[35px]">
                Delete Account
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-[10%]">
          <p className="font-poppins font-normal text-[20px] text-secondary70_cont_color">
            Chat App
          </p>
          <span className="font-poppins font-normal text-[16px] text-secondary30_cont_color">
            Version 1.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSettings;
