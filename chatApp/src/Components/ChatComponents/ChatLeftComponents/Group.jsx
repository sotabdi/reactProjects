import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import Profileimg from '../../../assets/ChatAssets/Profile.png'

const Group = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">Groups List</h4>
        <span className="text-xl text-primary_Color cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className="w-[427px] px-5 pb-[13px] h-[300px] shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide">
        {[...new Array(6)].map((_, index) => (
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
                <h6 className="font-poppins font-semibold text-[18px]">
                  Friends Reunion
                </h6>
                <p className="font-poppins font-medium text-secondary70_cont_color text-[14px]">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Group