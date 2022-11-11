import React, { useState, useEffect } from 'react';
import SortSelect from '../UI/SortSelect';
import './style.scss';

const FiltersBlock = ({ setSort, setFilter }) => {
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
  }, [selectedSort]);

  const handlePriceClick = () => {
    setFilter({
      key: 'price',
      compareFunc: (value) => value > minPrice && value < maxPrice,
    });
  };

  return (
    <div className="catalog_sort">
      <span className="sort_title">Sorting</span>
      <select value={selectedSort} onChange={(e) => setSelectedSort(e.target.value)}>
        <option disabled value="">
          Select
        </option>
        {sortOptions.map((option) => (
          <option value={option.id} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      <input onChange={e=>setMaxPrice(e.target.value)} value={maxPrice} />
      <input onChange={e=>setMinPrice(e.target.value)} value={minPrice} />
      <button onClick={handlePriceClick}>Kick me</button>

    </div>
  );
};

export default FiltersBlock;
