import React from "react";
import SingleSelectionObject from "./single-selection-object";

const EditableSingleSelectionObject = ({ isEditMode, noNeedLabel = false, title, children, ...props }) => {
  const { options, selectedOption } = props;
  return (
    <div>
      {!noNeedLabel ? <label>{title}: </label> : ""}
      {isEditMode ? (
        <SingleSelectionObject {...props} />
      ) : (
        <span>
          {Object.keys(options)[selectedOption]} {children}
        </span>
      )}
    </div>
  );
};

export default EditableSingleSelectionObject;
