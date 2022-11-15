import React, { useState, useEffect } from 'react';
import CommonButton from '../UI/CommonButton';
import './style.scss';

const FiltersBlock = ({ setSort, setFilter, setSearchValue, maxPrice, minPrice }) => {
  const [selectedSort, setSelectedSort] = useState('');
  const [maxSelectedPrice, setMaxSelectedPrice] = useState(9999);
  const [minSelectedPrice, setMinSelectedPrice] = useState(0);

  useEffect(() => {
    setMaxSelectedPrice(maxPrice);
  }, [maxPrice]);

  useEffect(() => {
    setMinSelectedPrice(minPrice);
  }, [minPrice]);

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

  const categoryOptions = [
    {
      id: 1,
      label: 'Electronics',
      key: 'electronics',
    },
    {
      id: 2,
      label: 'Jewelery',
      key: 'jewelery',
    },
    {
      id: 3,
      label: "Men's clothing",
      key: "men's clothing",
    },
    {
      id: 4,
      label: "Women's clothing",
      key: "women's clothing",
    },
    {
      id: 5,
      label: 'All categories',
      key: 'all categories',
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
      compareFunc: (value) => value >= Number(minPrice) && value <= Number(maxPrice),
    });
  };

  return (
    <div className="catalog_sort">
      <span className="sort_filter_title">Sorting</span>

      <input className="filter_search" type="text" name="search" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />

      <select className="sort_select" value={selectedSort} onChange={(e) => setSelectedSort(e.target.value)}>
        <option className="sort_selected_option_disabled" disabled value="">
          Select
        </option>
        {sortOptions.map((optionSort) => (
          <option className="sort_selected_option_active" value={optionSort.id} key={optionSort.label}>
            {optionSort.label}
          </option>
        ))}
      </select>

      <select className="sort_select">
        <option className="sort_selected_option_disabled">Categories</option>
        {categoryOptions.map((optionCateg) => (
          <option className="sort_selected_option_active" value={optionCateg.id} key={optionCateg.label}>
            {optionCateg.label}
          </option>
        ))}
      </select>
      <input className="filter_input" type="text" onChange={(e) => setMaxSelectedPrice(e.target.value)} value={maxSelectedPrice} placeholder="Max price" />
      <input className="filter_input" type="text" onChange={(e) => setMinSelectedPrice(e.target.value)} value={minSelectedPrice} placeholder="Min price" />
      <CommonButton onClick={handlePriceClick}>Filter by price</CommonButton>
    </div>
  );
};

export default FiltersBlock;
