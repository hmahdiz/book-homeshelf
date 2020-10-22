import React from "react";
import { PropTypes } from "prop-types";
import "./modal.css";

const Modal = ({
  children,
  title,
  onFirstButtonClick,
  onSecondtButtonClick,
  buttonNameFirst,
  buttonNameSecond,
  modalType,
}) => {
  const modalSizeClassName = modalType === "YesNo" ? "modal-container-yes-no-size" : "";
  return (
    <div className="modal-background">
      <div className={"modal-container " + modalSizeClassName}>
        <div className="title-bar modal-title-bar">{title}</div>
        <div className="modal-content">
          {children}
          <div className="modal-button-container">
            <button className="button button-green input" onClick={onFirstButtonClick}>
              {buttonNameFirst}
            </button>
            <button className="button button-transparent-white input" onClick={onSecondtButtonClick}>
              {buttonNameSecond}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  modalType: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Modal;
