import React from "react";
import Input from "./input";

const EditableInput = ({ isEditMode, label, children, ...props }) => {
  const { title, value } = { ...props };
  return (
    <div className={"field " + props.className}>
      {isEditMode ? (
        <React.Fragment>
          <label>{label} </label>
          <div className="input">
            <Input className="input" {...props} />
          </div>
        </React.Fragment>
      ) : (
        <span>
          {value} {children}
        </span>
      )}
    </div>
  );
};

export default EditableInput;
