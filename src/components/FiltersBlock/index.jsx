import React, { useState, useEffect } from 'react';
import SortSelect from '../UI/SortSelect';
import './style.scss';

const FiltersBlock = ({ setSort }) => {
  const [selectedSort, setSelectedSort] = useState("");
  const sortOptions = [
    {
      id: 1,
      label: "Price low first",
      key: "price",
      compareFunc: (a, b) => a > b
    },
    {
      id: 2,
      label: "Price high first",
      key: "price",
      compareFunc: (a, b) => a < b
    }
  ];
  
  useEffect(() => {
    const activeSort = sortOptions.find(it => Number(it.id) === Number(selectedSort));
    if (activeSort) {
      setSort(activeSort);
    }
  }, [selectedSort])

  return (
    <div className="catalog_sort">
      <span className="sort_title">Sorting</span>
      <select value={selectedSort} onChange={e => setSelectedSort(e.target.value)}>
        <option disabled value="">
          Select
        </option>
        {sortOptions.map((option) => (
          <option value={option.id} key={option.label}>{option.label}</option>
        ))}
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
