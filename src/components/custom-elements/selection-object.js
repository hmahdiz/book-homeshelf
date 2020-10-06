import React from "react";

const SelectionObject = ({ name, options, selectedOption, onChange }) => {
  return (
    <React.Fragment>
      <select value={selectedOption} onChange={onChange} name={name}>
        {Object.values(options).map((o) => {
          return (
            <option key={o} value={o}>
              {Object.keys(options)[o]}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default SelectionObject;
