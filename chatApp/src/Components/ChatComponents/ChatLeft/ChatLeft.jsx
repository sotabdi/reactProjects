import React from "react";
import Group from "../ChatLeftComponents/Group";
import Search from "../../CommonComponents/Search";
import Friends from "../../HomeComponents/HomeRightComponents/Friends";


const ChatLeft = () => {
  return (
    <div className="flex flex-col gap-y-[43px]">
        <Search/>
        <Group/>
        <Friends width={'w-[427px] h-[348px]'}/>
    </div>
  );
};

export default ChatLeft;
