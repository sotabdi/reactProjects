import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profileimg from "../../../assets/HomeRightAssets/profileImg1.png";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { errorToast, successToast } from "../../../../Utils/Toast";
import { getTime } from "../../../../Utils/MomentJs/Moment";

const Friends = ({ width }) => {
  const auth = getAuth();
  const db = getDatabase();

  const [friends, setfriends] = useState([]);

  useEffect(() => {
    const dbref = ref(db, "Friends/");
    onValue(dbref, (datasnap) => {
      const blankArr = [];
      datasnap.forEach((data) => {
        if (auth.currentUser.uid === data.val().receiverUid) {
          blankArr.push({
            ...data.val(),
            friendsKey: data.key,
          });
        }
      });
      setfriends(blankArr);
    });
  }, []);

  const handleBlock = (item)=>{
    const dbref = ref(db, "Blocked/");
    set(push(dbref), {
      ...item,
      createdAt: getTime()
    }).then(()=>{
      const friendsref = ref(db, 'Friends/' + item?.friendsKey);
      remove(friendsref);
    }).then(()=>{
      successToast('Blocked')
    }).catch(err=>{
      errorToast(err);
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">Friends</h4>
        <span className="text-xl text-primary_Color cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>

      <div className={width}>
        <div className="w-full px-5 pb-[13px] h-full shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide">
          {friends?.map((item, index) => (
            <div
              className="flex justify-between items-center border-b border-b-secondary30_cont_color py-[13px]"
              key={index}
            >
              <div className="flex">
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                  <picture>
                    <img src={item.senderProfilePic} alt={Profileimg} />
                  </picture>
                </div>
                <div className="ml-[10px] self-center">
                  <h6 className="font-poppins font-semibold text-[14px]">
                    {item.senderName}
                  </h6>
                  <p className="font-poppins font-medium text-secondary70_cont_color text-[12px]">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <div>
              <button
                  className="px-[6px] text-white bg-primary_Color rounded-[5px] font-poppins font-semibold text-[14px]"
                  onClick={()=>handleBlock(item)}
                >
                  Block
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
