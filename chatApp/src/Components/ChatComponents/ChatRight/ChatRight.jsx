import React from "react";
import Img from "../../../assets/ChatAssets/profile1.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

const ChatRight = () => {
  return (
    <div className="w-full h-full px-7 shadow-lg rounded-[20px] flex flex-col justify-between">
      <div className="flex justify-between items-center border-b">
        <div className="flex items-center py-6">
          <picture>
            <img src={Img} alt={Img} />
          </picture>
          <div className="ml-[33px]">
            <h6 className="font-poppins font-semibold text-[24px]">Swathi</h6>
            <p className="font-poppins font-normal text-[14px]">Online</p>
          </div>
        </div>
        <span className="text-2xl cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
      <div>
        <div className="w-full relative flex gap-x-[20px] px-5 py-[35px] border-t">
          <input
            type="text"
            className="w-full bg-[#F1F1F1] py-[15px] rounded-[10px] px-[15px] font-openSans font-normal"
          />
          <div className="flex absolute top-[50%] right-[11%] -translate-y-[50%] gap-x-[13px]">
            <span className="text-secondary70_cont_color text-2xl cursor-pointer">
              <MdOutlineEmojiEmotions />
            </span>
            <span className="text-secondary70_cont_color text-2xl cursor-pointer">
              <IoCameraOutline />
            </span>
          </div>
          <button className="p-[15px] bg-primary_Color text-white text-2xl rounded-[10px]"><RiSendPlaneFill/></button>
        </div>
      </div>
    </div>
  );
};

export default ChatRight;
