import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profileimg from "../../../assets/HomeRightAssets/profileImg1.png";
import { getDatabase, ref, onValue } from "firebase/database";

const UserList = () => {
  const db = getDatabase();

  // fetch data from database and copy to my blank array
  const [data, setdata] = useState([]);
  useEffect(() => {
    const dbref = ref(db, "users/");
    onValue(dbref, (dta) => {
      const arrDta = [];
      dta.forEach((item) => {
        arrDta.push({
          ...item.val(),
          userKey: item.key,
        });
      });
      setdata(arrDta);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">User List</h4>
        <span className="text-xl text-primary_Color cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className="w-[344px] px-5 pb-[13px] h-[400px] shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide">
        {data.map((item) => (
          <div
            className="flex justify-between items-center border-b border-b-secondary30_cont_color py-[13px]"
            key={item.userKey}
          >
            <div className="flex">
              <div className="w-[70px] h-[70px] rounded-full">
                <picture>
                  <img
                    src={item.profilePic ? item.profilePic : Profileimg}
                    alt={Profileimg}
                    className="w-full h-full rounded-full object-contain"
                  />
                </picture>
              </div>
              <div className="ml-[10px] self-center">
                <h6 className="font-poppins font-semibold text-[14px]">
                  {item.userName}
                </h6>
                <p className="font-poppins font-medium text-secondary70_cont_color text-[12px]">
                  {item.createdAt}
                </p>
              </div>
            </div>
            <div>
              <button className="px-[20px] text-white bg-primary_Color rounded-[5px] font-poppins font-semibold text-[20px]">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
