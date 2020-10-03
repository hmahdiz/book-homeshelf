import React from "react";
import Input from "./input";

const EditableInput = ({ isEditMode, noNeedLabel = false, children, ...props }) => {
  const { title, value } = { ...props };
  return (
    <div className={props.className}>
      {!noNeedLabel ? <label>{title}: </label> : ""}
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
