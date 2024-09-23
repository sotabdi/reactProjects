import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { FaUserGroup } from "react-icons/fa6";
import ModalComponent from "../../CommonComponents/ModalComponents/ModalComponent";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const MyGroup = ({ width }) => {
  const db = getDatabase();
  const auth = getAuth();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [mygroupList, setmygroupList] = useState([]);
  const [groupReq, setgroupReq] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const dbref = ref(db, "groups/");
    onValue(dbref, (datasnap) => {
      let blankarr = [];
      datasnap.forEach((data) => {
        if (data.val().whoCreatedUid === auth.currentUser.uid) {
          blankarr.push({
            ...data.val(),
            groupKey: data.key,
          });
        }
        setmygroupList(blankarr);
      });
    });
  }, []);

  useEffect(() => {
    const dbref = ref(db, "groupRequests/");
    onValue(dbref, (datasnap) => {
      let blankArr = [];
      datasnap.forEach((data) => {
        if (data.val().whoCreatedUid === auth.currentUser.uid) {
          blankArr.push({
            ...data.val(),
            groupReqKey: data.key,
          });
        }
      });
      setgroupReq(blankArr);
    });
  }, []);

  console.log(groupReq);
  return (
    <div>
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">My Groups</h4>
        <span className="text-xl text-primary_Color cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
      <div
        className="px-5 pb-[13px] h-[347px] shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide"
        style={{ width: width }}
      >
        {mygroupList?.map((item, index) => (
            <div
              className="w-full flex justify-between items-center border-b border-b-secondary30_cont_color py-[13px]"
              key={item.groupKey}
            >
              <div className="flex">
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                  <picture>
                    <img src={item.groupImage} alt={item.groupImage} />
                  </picture>
                </div>
                <div className="ml-[10px] self-center">
                  <h6 className="font-poppins font-semibold text-[14px]">
                    {item.groupName}
                  </h6>
                  <p className="font-poppins font-medium text-secondary70_cont_color text-[12px]">
                    {item.groupTag}
                  </p>
                </div>
              </div>
              {groupReq.some(
                (groupitem) => groupitem.groupKey === item.groupKey
              ) && (
                <div key={item.groupKey} className="relative cursor-pointer" onClick={openModal}>
                  <p className="font-poppins font-medium text-2xl text-secondary70_cont_color">
                    <FaUserGroup />
                  </p>
                  <span className="absolute right-[-6px] top-[-6px] flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </div>
              )}
            </div>
        ))}
        <ModalComponent closeModal={closeModal} modalIsOpen={modalIsOpen}>
                {groupReq.map((item) => (
                    <div
                      key={item.groupKey}
                      className="w-[400px] flex justify-between items-center py-6 rounded-xl shadow-md px-6 mx-10 my-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-3">
                          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <picture>
                              <img src={item.applicantPhoto} />
                            </picture>
                          </div>
                          <div>
                            <h6 className="font-poppins font-semibold text-[14px]">
                              {item.applicantName}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="w-[25px] h-[25px] rounded-full border-[#008000] border flex justify-center items-center cursor-pointer"><IoMdCheckmark fill="#008000"/></div>
                        <div className="w-[25px] h-[25px] rounded-full border-[#FF0000] border flex justify-center items-center cursor-pointer"><RxCross2 color="#FF0000"/></div>
                      </div>
                    </div>
                  ))}
            </ModalComponent>
      </div>
    </div>
  );
};

export default MyGroup;
