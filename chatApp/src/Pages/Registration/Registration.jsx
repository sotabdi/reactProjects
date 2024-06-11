import React from 'react';
import RegistratinRight from '../../Components/RegComponents/RegistratinRight';
import RegistrationLeft from '../../Components/RegComponents/RegistrationLeft';

const Registration = () => {
  return (
    <div id="registrationFull" className='flex justify-between items-center'>
        <RegistrationLeft/>
        <RegistratinRight/>
    </div>
  )
}

export default Registration;