import React from "react";
import SelectionObject from "./selection-object";
import SelectionList from "./selection-list";

const EditableSelection = ({ isEditMode, label, children, ...props }) => {
  const { options, selectedOption, selectedOptions, fieldTextes } = props;
  return (
    <div>
      {label ? <label>{label}: </label> : ""}

      {options instanceof Array ? (
        isEditMode ? (
          <SelectionList {...props} />
        ) : (
          fieldTextes.map((t) => selectedOptions.map((so) => so[t]))
        )
      ) : isEditMode ? (
        <SelectionObject {...props} />
      ) : (
        Object.keys(options)[selectedOption]
      )}
    </div>
  );
};

export default EditableSelection;
