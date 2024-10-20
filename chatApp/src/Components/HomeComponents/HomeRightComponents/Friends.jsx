import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profileimg from "../../../assets/HomeRightAssets/profileImg1.png";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { errorToast, successToast } from "../../../../Utils/Toast";
import { getTime } from "../../../../Utils/MomentJs/Moment";
import { useDispatch } from "react-redux";
import { friendsInfo } from "../../../Features/Redux/AllSlice/Friends/friendsSlice";

const Friends = ({ width }) => {
  const auth = getAuth();
  const db = getDatabase();
  const dispatch = useDispatch();
  const [friends, setfriends] = useState([]);

  useEffect(() => {
    const dbref = ref(db, "Friends/");
    onValue(dbref, (datasnap) => {
      const blankArr = [];
      datasnap.forEach((data) => {
        if (auth.currentUser.uid === data.val().receiverUid || auth.currentUser.uid === data.val().senderUid) {
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

  const handleOpenChat = (item)=>{
    console.log(item);
    if(item.senderUid === auth.currentUser.uid){
      dispatch(friendsInfo({
        Name: item.receiverName,
        Email: item.receiverEmail,
        Uid: item.receiverUid,
        ProfilePic: item.receiverPhotoUrl?item.receiverPhotoUrl:'',
      }))
    }else{
      dispatch(friendsInfo({
        Name: item.senderName,
        Email: item.senderEmail,
        Uid: item.senderUid,
        ProfilePic: item.senderProfilePic?item.senderProfilePic:'',
      }))
    }
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
              className="flex justify-between items-center border-b border-b-secondary30_cont_color py-[13px] cursor-pointer"
              key={index}
              onClick={()=>handleOpenChat(item)}
            >
              <div className="flex">
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                  <picture>
                    <img src={auth.currentUser.email===item.receiverEmail?item.senderProfilePic : item.receiverPhotoUrl} alt={auth.currentUser.email===item.receiverEmail?item.senderProfilePic : item.receiverPhotoUrl} />
                  </picture>
                </div>
                <div className="ml-[10px] self-center">
                  <h6 className="font-poppins font-semibold text-[14px]">
                    {auth.currentUser.email===item.receiverEmail?item.senderName:item.receiverName}
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
