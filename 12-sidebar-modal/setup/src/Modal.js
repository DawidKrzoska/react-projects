import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, toogleModal } = useGlobalContext();
  return (
    <div
      className={` ${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3> modal Contnet</h3>
        <button className="close-modal-btn" onClick={toogleModal}>
          {" "}
          <FaTimes />{" "}
        </button>
      </div>
    </div>
  );
};

export default Modal;
