import React from 'react';
import { nanoid } from 'nanoid';

import './style.scss';

const SortSelect = ({ options, defaultValue }) => {
  return (
      <select >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => {
          <option value={option.value}>
            {option.name}
          </option>;
        })}
      </select>
  );
};

export default SortSelect;
