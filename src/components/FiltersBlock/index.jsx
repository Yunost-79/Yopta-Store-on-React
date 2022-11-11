import React from 'react';
import SortSelect from '../UI/SortSelect';
import './style.scss';

const FiltersBlock = ({ productData }) => {
  const options = [];
  return (
    <div className="catalog_sort">
      <span className="sort_title">Sorting</span>
      <select>
        <option disabled value="">
          Select
        </option>
        {options.map((option) => {
          <option value={option.value}>{option.name}</option>;
        })}
      </select>
      {/* <SortSelect
        defaultValue="Sorting"
        options={[
          { name: 'By name', value: productData.title },
          { name: 'By category', value: productData.category },
        ]}
      /> */}
    </div>
  );
};

export default FiltersBlock;
