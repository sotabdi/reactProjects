import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profileimg from "../../../assets/HomeRightAssets/profileImg1.png";

const Friends = ({width}) => {
  return (
    <div>
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">Friends</h4>
        <span className="text-xl text-primary_Color cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>

      <div className={width}>
        <div className="w-full px-5 pb-[13px] h-full shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide">
          {[...new Array(4)].map((_, index) => (
            <div
              className="flex justify-between items-center border-b border-b-secondary30_cont_color py-[13px]"
              key={index}
            >
              <div className="flex">
                <div>
                  <picture>
                    <img src={Profileimg} alt={Profileimg} />
                  </picture>
                </div>
                <div className="ml-[10px] self-center">
                  <h6 className="font-poppins font-semibold text-[14px]">
                    Raghav
                  </h6>
                  <p className="font-poppins font-medium text-secondary70_cont_color text-[12px]">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <div>
                <p className="font-poppins font-medium text-[10px] text-secondary70_cont_color pb-6">
                  Today, 8:56pm
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
