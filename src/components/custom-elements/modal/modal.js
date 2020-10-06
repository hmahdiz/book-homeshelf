import React from "react";
import "./modal.css";

const Modal = ({ children, title, onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-title-bar">{title}</div>
        <div className="modal-content">
          {children}
          <div>
            <button>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
