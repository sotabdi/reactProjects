import React from "react";
import Img from "../../../assets/ChatAssets/profile1.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../Features/Redux/AllSlice/Counter/counterSlice";

const ChatRight = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state)=>state.counters) 
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
      <div className="w-full h-[600px] py-[47px] px-[65px] flex flex-col gap-y-[25px] overflow-y-scroll">
        <div className="self-start w-[60%]">
          <p className="font-poppins text-[16px] font-medium px-[52px] py-[13px] bg-[#F1F1F1] rounded-[10px] inline-block max-w-[60%] my-[7px] msgIcon">
            Hey There !
          </p>
          <p className="font-poppins text-xs text-secondary_cont_color">
            Today, 2:01pm
          </p>
        </div>
        <div className="self-end w-[60%] text-right">
          <p className="font-poppins text-[16px] font-medium px-[52px] py-[13px] bg-[#F1F1F1] rounded-[10px] inline-block max-w-[60%] my-[7px] msgIcon">
            Hey There !
          </p>
          <p className="font-poppins text-xs text-secondary_cont_color">
            Today, 2:01pm
          </p>
        </div>
        <div>
          <h1>{counters.value}</h1>
          <div className="flex">
            <p onClick={()=>dispatch(increment())} className="p-5 border cursor-pointer">increment</p>
            <p onClick={()=>dispatch(decrement())} className="p-5 border cursor-pointer">decrement</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full relative flex gap-x-[20px] px-5 py-[35px] border-t">
          <input
            type="text"
            className="w-full bg-[#F1F1F1] py-[15px] rounded-[10px] pl-[15px] pr-[100px] font-openSans font-normal"
          />
          <div className="flex absolute top-[50%] right-[11%] -translate-y-[50%] gap-x-[13px]">
            <span className="text-secondary70_cont_color text-2xl cursor-pointer">
              <MdOutlineEmojiEmotions />
            </span>
            <span className="text-secondary70_cont_color text-2xl cursor-pointer">
              <IoCameraOutline />
            </span>
          </div>
          <button className="p-[15px] bg-primary_Color text-white text-2xl rounded-[10px]">
            <RiSendPlaneFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRight;
