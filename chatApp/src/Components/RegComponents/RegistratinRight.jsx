import React from 'react';
import signupImg from '../../assets/signupimg.png';

const RegistratinRight = () => {
  return (
    <div id="registrationRightFull" className='w-[40%]'>
        <picture>
            <img src={signupImg} alt={signupImg} className='h-screen object-cover w-full'/>
        </picture>
    </div>
  )
}

export default RegistratinRight;