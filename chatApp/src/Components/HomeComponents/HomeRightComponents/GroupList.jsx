import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profileimg from "../../../assets/HomeRightAssets/profileImg.png";
import ModalComponent from "../../CommonComponents/ModalComponents/ModalComponent";
import CropperComponent from "../../CommonComponents/CropperComponents/CropperComponent";

const GroupList = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="mt-[43px]">
      <div className="flex items-center justify-between px-5 pb-[13px]">
        <h4 className="font-poppins font-semibold text-xl">Groups List</h4>
        <span className="text-xl text-primary_Color cursor-pointer">
          <button onClick={openModal}>Create Group</button>
        </span>
      </div>
      <div className="w-[427px] px-5 pb-[13px] h-[300px] shadow-lg rounded-[20px] overflow-y-scroll scrollbar-hide">
        {[...new Array(6)].map((_, index) => (
          <div
            className="flex justify-between items-center border-b border-b-secondary30_cont_color py-[13px]"
            key={index}
          >
            <div className="flex">
              <div>
                <picture>
                  <img src={Profileimg} alt={Profileimg} />
                </picture>
              </div>
              <div className="ml-[10px] self-center">
                <h6 className="font-poppins font-semibold text-[18px]">
                  Friends Reunion
                </h6>
                <p className="font-poppins font-medium text-secondary70_cont_color text-[14px]">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <div>
              <button className="px-[20px] text-white bg-primary_Color rounded-[5px] font-poppins font-semibold text-[20px]">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
      <ModalComponent closeModal={closeModal} modalIsOpen={modalIsOpen}>
        <div className="w-[80vw]">
          <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
            <div className="flex justify-between gap-x-10">
              <div className="w-[30%]">
                <div className="flex flex-col mb-3">
                  <label htmlFor="groupName" className="text-xl font-poppins">
                    Enter Group Name
                  </label>
                  <input
                    type="text"
                    className="border border-primary_Color rounded-md font-poppins px-1"
                    placeholder="Group Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="groupTag" className="text-xl font-poppins">
                    Enter Group Name
                  </label>
                  <input
                    type="text"
                    className="border border-primary_Color rounded-md font-poppins px-1"
                    placeholder="Group Tag"
                  />
                </div>
              </div>
              <div className="w-[70%]">
                <CropperComponent />
              </div>
            </div>
          </form>
        </div>
      </ModalComponent>
    </div>
  );
};

export default GroupList;
