import React from 'react';
import HomeLeft from '../../Components/HomeComponents/HomeLeft';
import HomeRight from '../../Components/HomeComponents/HomeRight';

const Home = () => {
  return (
    <div className='flex px-[32px] py-[35px] gap-x-[43px]'>
        <HomeLeft/>
        <HomeRight/>
    </div>
  )
}

export default Home