import React from "react";
import MyGroup from "../../HomeComponents/HomeRightComponents/MyGroup";
import Search from "../../CommonComponents/Search";
import Friends from "../../HomeComponents/HomeRightComponents/Friends";


const ChatLeft = () => {
  return (
    <div className="flex flex-col gap-y-[43px]">
        <Search/>
        <MyGroup w="427px"/>
        <Friends width={'w-[427px] h-[300px]'}/>
    </div>
  );
};

export default ChatLeft;
