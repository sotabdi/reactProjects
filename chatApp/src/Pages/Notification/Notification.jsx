import React from 'react';
import Notifications from '../../Components/NotificationComponents/Notifications/Notifications';
import Search from '../../Components/CommonComponents/Search';

const Notification = () => {
  return (
    <div className='w-full flex flex-col gap-y-[26px]'>
        <Search/>
        <Notifications/>
    </div>
  )
}

export default Notification