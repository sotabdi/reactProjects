import React from "react";
import ProfileImg from "../../../assets/SettingsAssets/Profile.png";
import { FaEdit } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const SettingsLeft = () => {
  const auth = getAuth()
  const db = getDatabase();
  
  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full w-full shadow-lg pt-[26px] pb-[39px] px-[25px] rounded-[20px]">
        <div className="h-full">
          <h5 className="font-poppins font-semibold text-xl pb-[35px]">
            Account Settings
          </h5>
          <div className="flex items-center gap-x-[31px] py-[29px] border-b">
            <picture>
              <img src={ProfileImg} alt={ProfileImg} />
            </picture>
            <div>
              <h6 className="font-poppins font-semibold text-[25px]">
                A B M Shawon Islam
              </h6>
              <p className="font-poppins font-normal text-[20px]">
                Stay home stay safe
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-[33px] pl-[58px] pt-[43px]">
            <div className="flex items-center">
              <span className="text-2xl">
                <FaEdit />
              </span>
              <button className="font-poppins font-normal text-xl ml-[35px]">
                Edit Profile Name.
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-2xl">
                <FaRocketchat />
              </span>
              <button className="font-poppins font-normal text-xl ml-[35px]">
                Edit Profile Status Info.
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-2xl">
                <MdOutlineAddPhotoAlternate />
              </span>
              <button className="font-poppins font-normal text-xl ml-[35px]">
                Edit Profile Photo.
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-2xl">
                <IoIosHelpCircleOutline />
              </span>
              <button className="font-poppins font-normal text-xl ml-[35px]">
                Help?
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

export default SettingsLeft;
