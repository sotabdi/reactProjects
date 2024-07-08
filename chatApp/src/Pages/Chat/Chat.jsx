import React from 'react';
import ChatLeft from '../../Components/ChatComponents/ChatLeft/ChatLeft';
import ChatRight from '../../Components/ChatComponents/ChatRight/ChatRight';

const Chat = () => {
  return (
    <div className='flex justify-between gap-x-[23px] w-full'>
        <ChatLeft/>
        <ChatRight/>
    </div>

  )
}

export default Chat