import React from "react";
import GroupList from "../HomeRightComponents/GroupList";
import Search from "../../CommonComponents/Search";
import Friends from "../HomeRightComponents/Friends";
import UserList from "../HomeRightComponents/UserList";
import FriendReqest from "../HomeRightComponents/FriendReqest";
import MyGroup from "../HomeRightComponents/MyGroup";
import BlockUser from "../HomeRightComponents/BlockUser";

const HomeRight = () => {
  return (
    <div className="flex gap-x-[23px] flex-wrap gap-y-[43px] w-[75%] h-full justify-between">
      <div className="h-full">
        <Search />
        <GroupList />
      </div>
      <Friends width={'w-[344px] h-[400px]'}/>
      <UserList />
      <FriendReqest />
      <MyGroup />
      <BlockUser />
    </div>
  );
};

export default HomeRight;
