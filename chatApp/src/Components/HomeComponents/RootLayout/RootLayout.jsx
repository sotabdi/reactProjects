import React from 'react';
import HomeLeft from '../HomeLeft/HomeLeft';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='flex px-[32px] py-[35px] gap-x-[43px]'>
        <HomeLeft/>
        <Outlet/>
    </div>
  )
}

export default RootLayout