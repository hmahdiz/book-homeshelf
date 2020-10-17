import React from "react";
import "./modal.css";

const Modal = ({ children, title, onClose, onSave, buttonName }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-title-bar">{title}</div>
        <div className="modal-content">
          {children}
          <div className="modal-button-container">
            <button className="button button-green" onClick={onSave}>
              {buttonName}
            </button>
            <button className="button button-transparent-dark" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
