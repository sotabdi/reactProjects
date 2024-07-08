import React from "react";
import { IoIosNotifications } from "react-icons/io";

const Notifications = () => {
  return (
    <div className="w-full h-full shadow-lg rounded-[20px] p-[35px]">
      {[...new Array(6)].map((_, index) => (
        <div key={index} className="flex items-center gap-x-[42px] py-[28px] border-b cursor-pointer">
          <span className="text-3xl">
            <IoIosNotifications />
          </span>
          <p className="font-poppins font-medium text-[16px]">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
