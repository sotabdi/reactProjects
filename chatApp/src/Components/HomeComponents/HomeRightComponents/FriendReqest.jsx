import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profileimg from "../../../assets/HomeRightAssets/profileImg2.png";
import moment from "moment";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { getTime } from "../../../../Utils/MomentJs/Moment";
import { errorToast } from "../../../../Utils/Toast";

const FriendReqest = () => {
  const auth = getAuth();
  const db = getDatabase();

  const [friendReq, setfriendReq] = useState([]);

// read data from database
  useEffect(()=>{
    const dbref = ref(db,'FriendReq/')
    onValue(dbref ,(data)=>{
      const reqData = [];
      data.forEach((item)=>{
        if(auth.currentUser.uid == item.val().receiverUid){
          reqData.push({
            ...item.val(),
            itemKey: item.key,
          })
        }
      })
      setfriendReq(reqData);
    })
  },[])

//handle reject button
  const handleReject = (item)=>{
    const dbref = ref(db , 'FriendReq/' + item?.itemKey);
    remove(dbref);
    
  }

//handle accept button
  const handleAccept = (item)=>{
    const dbref = ref(db,'Friends/');
    set(push(dbref),{
      ...item,
      createdAt: getTime(),
      receiverUserKey: null
    }).then(()=>{
      const dbref = ref(db , 'FriendReq/' + item?.itemKey);
      remove(dbref);
    }).catch((err)=>{
      errorToast(err)
    })
  }
  
  return (
    <div className="">
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">Friend Request</h4>
        <span className="text-xl text-primary_Color cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className="w-[427px] px-5 pb-[13px] h-[347px] shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide">
        {friendReq?.map((item, index) => (
          <div
            className="flex justify-between items-center border-b border-b-secondary30_cont_color py-[13px]"
            key={index}
          >
            <div className="flex">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                <picture>
                  <img src={item.senderProfilePic} alt={item.senderProfilePic} />
                </picture>
              </div>
              <div className="ml-[10px] self-center">
                <h6 className="font-poppins font-semibold text-[18px]">
                {item.senderName}
                </h6>
                <p className="font-poppins font-medium text-secondary70_cont_color text-[14px]">
                  {`${moment(item.createdAt).from()}`}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <button className="px-[6px] text-white bg-primary_Color rounded-[5px] font-poppins font-semibold text-[20px]" onClick={()=>{handleAccept(item)}}>
                Accept
              </button>
              <button className="px-[6px] text-white bg-primary_Color rounded-[5px] font-poppins font-semibold text-[20px]" onClick={()=>{ handleReject(item)}}>
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendReqest;
