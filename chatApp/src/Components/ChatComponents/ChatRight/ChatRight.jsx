import React, { useState } from "react";
import Img from "../../../assets/ChatAssets/profile1.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import ModalComponent from "../../CommonComponents/ModalComponents/ModalComponent";
const ChatRight = () => {
  const [emojiPicker, setemojiPicker] = useState(false);
  const { friends } = useSelector((state) => state.friends);
  const [massage, setmassage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [img , setimg] = useState('');
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
  }
const handleImage = (event)=>{
  setimg(event.target.files[0]);
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
              <button className="p-[15px] bg-primary_Color text-white text-2xl rounded-[10px]">
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
                    <span className="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleImage}/>
              </label>
            </div>
            <button className="w-full border mt-5 py-3 rounded-lg bg-primary_Color font-poppins text-white font-semibold">Sent</button>
          </ModalComponent>
        </>
      )}
    </div>
  );
};

export default ChatRight;
