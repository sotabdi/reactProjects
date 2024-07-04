import React from "react";
import GroupList from "./HomeRightComponents/GroupList";
import Search from "../CommonComponents/Search";
import Friends from "./HomeRightComponents/Friends";
import UserList from "./HomeRightComponents/UserList";
import FriendReqest from "./HomeRightComponents/FriendReqest";

const HomeRight = () => {
  return (
    <div className="flex gap-x-[35px] flex-wrap">
      <div>
        <Search />
        <GroupList />
      </div>
      <Friends />
      <UserList/>
      <FriendReqest/>
    </div>
  );
};

export default HomeRight;
