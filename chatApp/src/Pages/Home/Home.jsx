import React from 'react';
import HomeLeft from '../../Components/HomeComponents/HomeLeft/HomeLeft';
import HomeRight from '../../Components/HomeComponents/HomeRight/HomeRight';
import AdditionalSettings from '../../Components/HomeComponents/HomeRightComponents/AdditionalSettings';

const Home = () => {
  return (
    <>
        <HomeRight/>
        <AdditionalSettings className='w-[25%]'/>
    </>
  )
}

export default Home