import React from "react";
import { PropTypes } from "prop-types";
import EditableSelectionObject from "./editable-selection-object";
import EditableSelectionList from "./editable-selection-list";

const EditableSelection = ({ isEditMode, name, label, children, ...props }) => {
  const { options, selectedOption, selectedOptions, fieldTextes, fieldValue } = props;
  return (
    <div>
      {isEditMode ? <label>{label} </label> : ""}
      <div className="input">
        {options instanceof Array ? (
          isEditMode ? (
            <EditableSelectionList {...props} />
          ) : (
            selectedOptions &&
            selectedOptions.map((so) => <span key={so[fieldValue]}>{fieldTextes.map((t) => so[t] + " ")},</span>)
          )
        ) : isEditMode ? (
          <EditableSelectionObject {...props} />
        ) : selectedOption ? (
          Object.keys(options)[selectedOption]
        ) : (
          selectedOptions && selectedOptions.map((so) => <span key={so[fieldValue]}>{Object.keys(options)[so]},</span>)
        )}
      </div>
    </div>
  );
};

EditableSelection.defaultProps = {
  isEditMode: true,
};

EditableSelection.propTypes = {
  isEditMode: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  selectedOptions: (props, propName, componentName) => {
    if (!props.selectedOption && !props.selectedOptions) {
      return new Error(`Either selectedOption or selectedOptions should be set for: ${props.name} `);
    }
  },
};

export default EditableSelection;
