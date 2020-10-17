import React from "react";
import { PropTypes } from "prop-types";

const EditableField = ({ name, value, label, type, isEditMode, className, children, onChange }) => {
  return (
    <div className={"field " + className}>
      <label>{label} </label>
      {isEditMode ? (
        <div className="input">
          <input type={type} value={value} name={name} onChange={onChange} />
        </div>
      ) : (
        <span>
          {value} {children}
        </span>
      )}
    </div>
  );
};

EditableField.defaultProps = {
  isEditMode: true,
  type: "text",
};

EditableField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  isEitMode: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default EditableField;
