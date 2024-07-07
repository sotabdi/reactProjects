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
    <div className="flex gap-x-[22px] flex-wrap gap-y-[43px]">
      <div>
        <Search />
        <GroupList />
      </div>
      <Friends />
      <UserList />
      <FriendReqest />
      <MyGroup />
      <BlockUser />
    </div>
  );
};

export default HomeRight;
