import React from "react";
import SelectionObject from "./selection-object";
import SelectionList from "./selection-list";

const EditableSelection = ({ isEditMode = true, label, children, ...props }) => {
  const { options, selectedOption, selectedOptions, fieldTextes, className } = props;
  return (
    <div className={className}>
      {isEditMode ? <label>{label} </label> : ""}
      <div className="input">
        {options instanceof Array ? (
          isEditMode ? (
            <SelectionList {...props} />
          ) : (
            selectedOptions.map((so) => <span key={so.id}>{fieldTextes.map((t) => so[t] + " ")},</span>)
          )
        ) : isEditMode ? (
          <SelectionObject {...props} />
        ) : (
          Object.keys(options)[selectedOption]
        )}
      </div>
    </div>
  );
};

export default EditableSelection;
