import React from "react";

const SelectionList = ({ name, options, fieldValue, fieldTextes, selectedOptions, onChange }) => {
  return (
    <React.Fragment>
      <select multiple value={selectedOptions.map((so) => so[fieldValue])} onChange={onChange} name={name}>
        {options.map((item) => {
          return (
            <option key={item.id} value={item[fieldValue]}>
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

export default SelectionList;
