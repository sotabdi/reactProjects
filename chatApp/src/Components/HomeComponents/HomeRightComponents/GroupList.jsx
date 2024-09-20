import React, { useEffect, useState } from "react";
import Profileimg from "../../../assets/HomeRightAssets/profileImg.png";
import ModalComponent from "../../CommonComponents/ModalComponents/ModalComponent";
import CropperComponent from "../../CommonComponents/CropperComponents/CropperComponent";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref as storageRef, uploadString } from "firebase/storage";
import { v4 as uuidv4} from 'uuid';
import { errorToast, successToast } from "../../../../Utils/Toast";
import { Oval } from "react-loader-spinner";

const GroupList = () => {
  const storage = getStorage();
  const db = getDatabase();
  const auth = getAuth();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [groupInfo, setgroupInfo] = useState({});
  const [err, seterr] = useState({});
  const [loading, setloading] = useState(false);
  const [groupList, setgroupList]= useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);

    // clearing all input feild on close button
    setgroupInfo({
      ...groupInfo,
      groupName: "",
      groupTag: "",
    });
    seterr({
      ...err,
      groupName: "",
      groupTag: "",
    });
  }

  const handleInput = (e) => {
    setgroupInfo({
      ...groupInfo,
      [e.target.id]: e.target.value,
    });
    seterr({
      ...err,
      groupName: "",
      groupTag: "",
    });
  };
  
  useEffect(()=>{
    const dbref = ref(db , 'groups/');
    onValue(dbref, (datasnap)=>{
      let blankArr = []
      datasnap.forEach((data)=>{
          blankArr.push({
            ...data.val(),
            groupKey: data.key,
          });
      })
      setgroupList(blankArr);
    })
  },[])

  const handleCreate = (cropData, setCropData) => {
    let hasErr = false;
    let error = {};
    if (!groupInfo.groupName) {
      error["groupName"] = "Group Name Required";
      hasErr = true;
    }
    if (!groupInfo.groupTag) {
      error["groupTag"] = "Group Tag Required";
      hasErr = true;
    }
    seterr(error);
    if (!hasErr) {
      setloading(true);
      const dbref = ref(db, "groups/");
      const imgStorageref= storageRef(storage, `groupImage${uuidv4().split('-').slice(-1)}`)
      const cropImg = cropData;
      uploadString(imgStorageref, cropImg, "data_url").then((snapshot) => {
        const {metadata} = snapshot
        return metadata?.fullPath
      }).then((imagePath)=>{
         return getDownloadURL(storageRef(storage, imagePath) )
      }).then((imagerUrl)=>{
        set(push(dbref), {
          groupName: groupInfo.groupName,
          groupTag: groupInfo.groupTag,
          groupImage: imagerUrl,
          whoCreatedUid: auth.currentUser.uid,
          whoCreatedName: auth.currentUser.displayName,
          whoCreatedEmail: auth.currentUser.email,
          whoCreatedPhoto: auth.currentUser.photoURL,
        }).catch((err)=>{
          errorToast(err);
        }).finally(()=>{
          setloading(false);
          successToast('Group created successfully')
          setCropData('');
          closeModal();
        });
      });
    }
  };

  return (
    <div className="mt-[43px]">
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">Groups List</h4>
        <span className="text-xl text-primary_Color cursor-pointer">
          <button onClick={openModal}>Create Group</button>
        </span>
      </div>
      <div className="w-[427px] px-5 pb-[13px] h-[300px] shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide">
        {groupList?.map((item, index) => (
          <div
            className="flex justify-between items-center border-b border-b-secondary30_cont_color py-[13px]"
            key={index}
          >
            <div className="flex">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                <picture>
                  <img src={item.groupImage} alt={item.groupImage} />
                </picture>
              </div>
              <div className="ml-[10px] self-center">
                <h6 className="font-poppins font-semibold text-[18px]">
                  {item.groupName}
                </h6>
                <p className="font-poppins font-medium text-secondary70_cont_color text-[14px]">
                  {item.groupTag}
                </p>
              </div>
            </div>
            <div>
              {item.whoCreatedUid!==auth.currentUser.uid && (<button className="px-[20px] text-white bg-primary_Color rounded-[5px] font-poppins font-semibold text-[20px]">
                Join
              </button>)}
            </div>
          </div>
        ))}
      </div>
      <ModalComponent closeModal={closeModal} modalIsOpen={modalIsOpen}>
        <div className="w-[80vw]" style={loading ? {display: "flex",justifyContent: 'center', alignItems: 'center', height: '700px'}: {}}>
          {loading?(<Oval/>):(<form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
            <div className="flex justify-between gap-x-10">
              <div className="w-[30%]">
                <div className="flex flex-col gap-y-2 mb-5">
                  <label htmlFor="groupName" className="text-xl font-poppins">
                    Enter Group Name <span className="text-red-800">*</span>
                  </label>
                  <input
                    type="text"
                    id="groupName"
                    className="border border-primary_Color rounded-md font-poppins px-3 py-2"
                    placeholder="Group Name"
                    onChange={handleInput}
                    value={groupInfo["groupName"]}
                    maxLength={"16"}
                  />
                  {err.groupName && (
                    <p className="font-poppins text-red-700">{err.groupName}</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-2 mb-5">
                  <label htmlFor="groupTag" className="text-xl font-poppins">
                    Enter Group Tag <span className="text-red-800">*</span>
                  </label>
                  <input
                    type="text"
                    id="groupTag"
                    className="border border-primary_Color rounded-md font-poppins px-3 py-2"
                    placeholder="Group Tag"
                    onChange={handleInput}
                    value={groupInfo["groupTag"]}
                    maxLength={"16"}
                  />
                  {err.groupTag && (
                    <p className="font-poppins text-red-700">{err.groupTag}</p>
                  )}
                </div>
              </div>
              <div className="w-[70%]">
                <CropperComponent
                  groupInfo={groupInfo}
                  handleCreate={handleCreate}
                />
              </div>
            </div>
          </form>)}
        </div>
      </ModalComponent>
    </div>
  );
};

export default GroupList;
