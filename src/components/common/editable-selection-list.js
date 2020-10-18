import React from "react";
import { PropTypes } from "prop-types";

const EditableSelectionList = ({
  name,
  options,
  fieldValue,
  fieldTextes,
  selectedOptions,
  selectedOption,
  className,
  multiple,
  onChange,
}) => {
  return (
    <React.Fragment>
      <select
        className={className}
        multiple={multiple}
        value={selectedOptions && selectedOptions.map((so) => so[fieldValue])}
        onChange={onChange}
        name={name}
      >
        {options &&
          options.map((item) => {
            return (
              <option key={item[fieldValue]} value={item[fieldValue]}>
                {fieldTextes.reduce((total, t, i) => {
                  return (i === 1 ? item[total] : total) + " " + item[t];
                })}
              </option>
            );
          })}
      </select>
    </React.Fragment>
  );
};

EditableSelectionList.defaultProps = {
  multiple: false,
};

EditableSelectionList.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  fieldValue: PropTypes.string.isRequired,
  fieldTextes: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOptions: (props, propName, componentName) => {
    if (!props.selectedOption && !props.selectedOptions) {
      return new Error("Either selectedOption or selectedOptions should be set for: " + componentName);
    }
  },
  className: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
};

export default EditableSelectionList;
