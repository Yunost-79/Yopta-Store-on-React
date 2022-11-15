import React, { useState, useEffect } from 'react';
import CommonButton from '../UI/CommonButton';
import './style.scss';

const FiltersBlock = ({ setSort, setFilter, setSearchValue }) => {
  const [selectedSort, setSelectedSort] = useState('');
  const [maxPrice, setMaxPrice] = useState(9999);
  const [minPrice, setMinPrice] = useState(0);

  const sortOptions = [
    {
      id: 1,
      label: 'Price low first',
      key: 'price',
      compareFunc: (a, b) => a > b,
    },
    {
      id: 2,
      label: 'Price high first',
      key: 'price',
      compareFunc: (a, b) => a < b,
    },
    {
      id: 3,
      label: 'By name A-Z',
      key: 'title',
      compareFunc: (a, b) => a > b,
    },
    {
      id: 4,
      label: 'By name Z-A',
      key: 'title',
      compareFunc: (a, b) => a < b,
    },
  ];

  useEffect(() => {
    const activeSort = sortOptions.find((it) => Number(it.id) === Number(selectedSort));

    if (activeSort) {
      setSort(activeSort);
    }
    // eslint-disable-next-line
  }, [selectedSort]);

  const handlePriceClick = () => {
    setFilter({
      key: 'price',
      compareFunc: (value) => value > minPrice && value < maxPrice,
    });
  };

  return (
    <div className="catalog_sort">
      <span className="sort_filter_title">Sorting</span>

      <input type="text" name="search" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />

      <select className="sort_select" value={selectedSort} onChange={(e) => setSelectedSort(e.target.value)}>
        <option className="sort_selected_option_disabled" disabled value="">
          Select
        </option>
        {sortOptions.map((option) => (
          <option className="sort_selected_option_active" value={option.id} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      <input className="filter_input" type="text" onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} placeholder="Max price" />
      <input className="filter_input" type="text" onChange={(e) => setMinPrice(e.target.value)} value={minPrice} placeholder="Min price" />
      <CommonButton onClick={handlePriceClick}>Filter by price</CommonButton>
    </div>
  );
};

export default FiltersBlock;
