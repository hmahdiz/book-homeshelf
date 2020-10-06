import React from "react";
import Input from "./input";

const EditableInput = ({ isEditMode, label, children, ...props }) => {
  const { title, value } = { ...props };
  return (
    <div className={props.className}>
      {label ? <label>{label}: </label> : ""}
      {isEditMode ? (
        <Input {...props} />
      ) : (
        <span>
          {value} {children}
        </span>
      )}
    </div>
  );
};

export default EditableInput;
