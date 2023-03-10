import React, { useContext } from "react";
import { AppContext, useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const data = useContext(AppContext);
  const { isModalOpen, handleCloseModal } = data;

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={handleCloseModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
