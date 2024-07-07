import React from "react";
import profileImg from "../../../assets/HomeLeftAssets/profileImg.png";
import { VscHome } from "react-icons/vsc";
import {
  IoChatbubblesOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const HomeLeft = () => {
  return (
    <div className="w-[189px] flex-shrink-0 bg-primary_Color flex flex-col gap-y-[78px] items-center pt-[38px] pb-[38px] rounded-[20px]">
      <div>
        <picture>
          <img src={profileImg} alt={profileImg} />
        </picture>
      </div>
      <div className="flex flex-col gap-y-[70px]" id="navTrans">
        <NavLink to="/" className={({isActive, isPending,})=> isPending ? "" : isActive ? "iconHov" : ""}>
          <span className="text-5xl text-icon_color cursor-pointer">
            <VscHome />
          </span>
        </NavLink>
        <NavLink to="/chat" className={({isActive, isPending})=> isPending ? "" : isActive ? "iconHov" : ""}>
          <span className="text-5xl text-icon_color cursor-pointer ">
            <IoChatbubblesOutline />
          </span>
        </NavLink>
        <NavLink to="/Notification">
          <span className="text-5xl text-icon_color cursor-pointer">
            <IoNotificationsOutline />
          </span>
        </NavLink>
        <NavLink to='/Settings'>
          <span className="text-5xl text-icon_color cursor-pointer">
            <IoSettingsOutline />
          </span>
        </NavLink>
      </div>
      <div className="pt-[90px]">
        <span className="text-5xl text-icon_color cursor-pointer">
          <IoLogOutOutline />
        </span>
      </div>
    </div>
  );
};

export default HomeLeft;
