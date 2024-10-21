import React, { useState } from "react";
import Img from "../../../assets/ChatAssets/profile1.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import ModalComponent from "../../CommonComponents/ModalComponents/ModalComponent";
import {
  getDownloadURL,
  getStorage,
  ref as imgSorageRef,
  uploadBytesResumable,
} from "firebase/storage";
import { errorToast } from "../../../../Utils/Toast";
import { getAuth } from "firebase/auth";
import { getTime } from "../../../../Utils/MomentJs/Moment";
const ChatRight = () => {
  const auth = getAuth()
  const storage = getStorage();
  const [emojiPicker, setemojiPicker] = useState(false);
  const { friends } = useSelector((state) => state.friends);
  const [massage, setmassage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [img, setimg] = useState(null);
  const [imgdownloadURL, setimgdownloadURL] = useState(null);
  const [progress, setprogress] = useState(null);
  const handleEmojiBtn = () => {
    setemojiPicker(!emojiPicker);
  };
  const handleEmoji = (emoji) => {
    setmassage((prevState) => prevState + emoji.emoji);
  };
  const handleInput = (e) => {
    setmassage(e.target.value);
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setimg(null);
    setprogress(null)
  }

  const handleImage = (event) => {
    setimg(event.target.files[0]);
  };
console.log(friends);

  // upload imaage and get download URL
  const handleSentImg = () => {
    let typeArr = ["image/png", "image/gif", "image/jpeg", "image/webp"];
    if (!typeArr.includes(img.type)) {
      errorToast(
        'Flie Type must be "image/png", "image/gif", "image/jpeg", "image/webp"'
      );
    }
    const storageRef = imgSorageRef(storage, `msgImg/${img.name}`);
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogress(progress);
      },
      (error) => {
        errorToast(error.message);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        setprogress(null);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimgdownloadURL(downloadURL);
          
        })
      }
    );
  };

const handleSendMsg = () => {
  let obj = {
    senderName: auth.currentUser.displayName,
    senderEmail: auth.currentUser.email,
    senderUid: auth.currentUser.uid,
    senderPic: auth.currentUser.photoURL||'',
    reciverName: friends.Name,
    reciverEmail: friends.Email,
    reciverUid: friends.Uid,
    reciverPic: friends.ProfilePic,
    msg: massage||'',
    img: imgdownloadURL||'',
    createdAt: getTime(),
  }
}

  return (
    <div className="w-full h-full px-7 shadow-lg rounded-[20px] flex flex-col justify-between">
      {Object.keys(friends).length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <p>click to open convertation</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center border-b">
            <div className="flex items-center py-6">
              <picture className="w-[75px] h-[75px] rounded-full overflow-hidden">
                <img src={friends.ProfilePic} alt={friends.ProfilePic} />
              </picture>
              <div className="ml-[33px]">
                <h6 className="font-poppins font-semibold text-[24px]">
                  {friends.Name}
                </h6>
                <p className="font-poppins font-normal text-[14px]">Online</p>
              </div>
            </div>
            <span className="text-2xl cursor-pointer">
              <BsThreeDotsVertical />
            </span>
          </div>
            {/* chat section start */}
          <div className="w-full h-[600px] py-[47px] px-[65px] flex flex-col gap-y-[25px] overflow-y-scroll">
            <div className="self-start w-[60%]">
              <p className="font-poppins text-[16px] font-medium px-[52px] py-[13px] bg-[#F1F1F1] rounded-[10px] inline-block max-w-[60%] my-[7px] msgIcon">
                Hey There !
              </p>
              <p className="font-poppins text-xs text-secondary_cont_color">
                Today, 2:01pm
              </p>
            </div>
            <div className="self-end w-[60%] text-right">
              <p className="font-poppins text-[16px] font-medium px-[52px] py-[13px] bg-[#F1F1F1] rounded-[10px] inline-block max-w-[60%] my-[7px] msgIcon">
                Hey There !
              </p>
              <p className="font-poppins text-xs text-secondary_cont_color">
                Today, 2:01pm
              </p>
            </div>
          </div>
            {/* chat section start */}
          <div>
            <div className="w-full relative flex gap-x-[20px] px-5 py-[35px] border-t">
              <input
                type="text"
                className="w-full bg-[#F1F1F1] py-[15px] rounded-[10px] pl-[15px] pr-[100px] font-openSans font-normal"
                value={massage}
                onChange={handleInput}
              />
              <div className="flex absolute top-[50%] right-[11%] -translate-y-[50%] gap-x-[13px]">
                <span
                  className="text-secondary70_cont_color text-2xl cursor-pointer"
                  onClick={handleEmojiBtn}
                >
                  <MdOutlineEmojiEmotions />
                </span>
                {emojiPicker && (
                  <div className="absolute bottom-10 right-0">
                    <EmojiPicker onEmojiClick={handleEmoji} />
                  </div>
                )}
                <span
                  className="text-secondary70_cont_color text-2xl cursor-pointer"
                  onClick={openModal}
                >
                  <IoCameraOutline />
                </span>
              </div>
              <button className="p-[15px] bg-primary_Color text-white text-2xl rounded-[10px]" onClick={handleSendMsg}>
                <RiSendPlaneFill />
              </button>
            </div>
          </div>
          <ModalComponent closeModal={closeModal} modalIsOpen={modalIsOpen}>
            <div className="flex items-center justify-center w-[800px]">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImage}
                />
              </label>
            </div>
            {img && (
              progress ? (
                <div className="w-full mt-5 rounded-lg bg-gray-200 ">
                  <button
                    className="py-3 rounded-lg bg-primary_Color font-poppins text-white font-semibold"
                    style={{ width: `${progress}%` }} // Use object for style
                  >
                    {`${progress}%`}
                  </button>
                </div>
              ) : (
                <button
                  className="w-full mt-5 py-3 rounded-lg bg-primary_Color font-poppins text-white font-semibold"
                  onClick={handleSentImg}
                >
                  Sent
                </button>
              )
            )}
          </ModalComponent>
        </>
      )}
    </div>
  );
};

export default ChatRight;
