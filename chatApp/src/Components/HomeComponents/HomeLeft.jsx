import React from 'react';
import profileImg from '../../assets/HomeLeftAssets/profileImg.png';
import { VscHome } from "react-icons/vsc";
import { IoChatbubblesOutline,IoNotificationsOutline,IoSettingsOutline,IoLogOutOutline  } from "react-icons/io5";

const HomeLeft = () => {
  return (
    <div className='w-[189px] flex-shrink-0 bg-primary_Color flex flex-col gap-y-[78px] items-center pt-[38px] pb-[38px] rounded-[20px]'>
        <div>
            <picture>
                <img src={profileImg} alt={profileImg} />
            </picture>
        </div>
        <div className='flex flex-col gap-y-[70px]'>
            <span className='text-5xl text-icon_color cursor-pointer iconHov'><VscHome/></span>
            <span className='text-5xl text-icon_color cursor-pointer '><IoChatbubblesOutline/></span>
            <span className='text-5xl text-icon_color cursor-pointer'><IoNotificationsOutline/></span>
            <span className='text-5xl text-icon_color cursor-pointer'><IoSettingsOutline/></span>
        </div>
        <div className='pt-[90px]'>
        <span className='text-5xl text-icon_color cursor-pointer'><IoLogOutOutline/></span>
        </div>
    </div>
  )
}

export default HomeLeft