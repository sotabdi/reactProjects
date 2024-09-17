import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
  },
};

const ModalComponent = ({ closeModal, modalIsOpen, children }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
          <div
            onClick={closeModal}
            className="text-xl w-9 h-9 rounded-full bg-primary_Color text-white font-semibold cursor-pointer flex justify-center items-center"
          >
            <span><IoMdClose/></span>
          </div>
        </div>
        {children}
      </Modal>
    </div>
  );
};

export default ModalComponent;
