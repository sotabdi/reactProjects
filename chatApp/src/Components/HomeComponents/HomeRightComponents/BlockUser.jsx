import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { getTime } from "../../../../Utils/MomentJs/Moment";
import { errorToast, successToast } from "../../../../Utils/Toast";

const BlockUser = () => {
  const auth = getAuth();
  const db = getDatabase();

  const [blockedData, setblockedData] = useState([]);

  useEffect(() => {
    const dbref = ref(db, "Blocked/");
    onValue(dbref, (snapDta) => {
      let blankarr = [];
      snapDta.forEach((dta) => {
        blankarr.push({
          ...dta.val(),
          blockedKey: dta.key,
        });
      });
      setblockedData(blankarr);
    });
  }, []);

  const handleUnblock = (item)=>{
    const dbref = ref(db, "Friends/");
    set(push(dbref), {
      ...item,
      createdAt: getTime(),
    }).then(()=>{
      const Blockedref = ref(db , 'Blocked/' + item?.blockedKey);
      remove(Blockedref); 
    }).then(()=>{
      successToast('Unblocked')
    }).catch((err)=>{
      errorToast(err)
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">Blocked Users</h4>
        <span className="text-xl text-primary_Color cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className="w-[344px] px-5 pb-[13px] h-[347px] shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide">
        {blockedData.map((item, index) => (
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
                  onClick={()=>handleUnblock(item)}
                >
                  Unblock
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockUser;
