import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profileimg from "../../../assets/HomeRightAssets/profileImg2.png";

const FriendReqest = () => {
  return (
    <div className="mt-[43px]">
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">Friend Request</h4>
        <span className="text-xl text-primary_Color">
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className="w-[427px] px-5 pb-[13px] h-[347px] shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide">
        {[...new Array(6)].map((_, index) => (
          <div
            className="flex justify-between items-center border-b border-b-secondary30_cont_color py-[13px]"
            key={index}
          >
            <div>
              <picture>
                <img src={Profileimg} alt={Profileimg} />
              </picture>
            </div>
            <div className="mr-[51px]">
              <h6 className="font-poppins font-semibold text-[18px]">Swathi</h6>
              <p className="font-poppins font-medium text-secondary70_cont_color text-[14px]">
                Sure!
              </p>
            </div>
            <div>
              <button className="px-[6px] text-white bg-primary_Color rounded-[5px] font-poppins font-semibold text-[20px]">
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendReqest;
