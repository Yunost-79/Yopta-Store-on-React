import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState, useEffect } from 'react';
import './style.scss';

const styles = {
  textInput: {
    marginTop: '15px',
    borderColor: red[500],
  },

  
};

const FiltersBlock = ({ setSort, setSearchValue, categoryValue, setCategoryValue, setMaxSelectedPrice, setMinSelectedPrice, setClearValues }) => {
  const [selectedSort, setSelectedSort] = useState('');

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

  return (
    <div className="catalog_sort">
      <span className="sort_filter_title">Sorting</span>

      <TextField style={styles.textInput} id="search_filter" label="Search" variant="standard" onChange={(e) => setSearchValue(e.target.value)} />

      <FormControl style={styles.textInput} fullWidth>
        <InputLabel id="select_sorting">Select sorting...</InputLabel>
        <Select
          labelId="select_sorting"
          id="select_sorting_item"
          value={selectedSort}
          label="Sorting"
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          {sortOptions.map((optionSort) => (
            <MenuItem style={styles.textInput} value={optionSort.id} key={optionSort.label}>
              {optionSort.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl style={styles.textInput} fullWidth>
        <InputLabel id="sort_select">Select category...</InputLabel>
        <Select
          labelId="sort_select"
          id="sort_select_item"
          value={categoryValue}
          label="Categories"
          onChange={(e) => setCategoryValue(e.target.value)}
        >
          {categoryOptions.map((optionCateg) => (
            <MenuItem value={optionCateg.key} key={optionCateg.key}>
              {optionCateg.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className="price_fields">
        <TextField id="max_price_filter" label="Max price" variant="standard" onChange={(e) => setMaxSelectedPrice(e.target.value)} />
        <TextField id="min_price_filter" label="Min price" variant="standard" onChange={(e) => setMinSelectedPrice(e.target.value)} />
      </div>

      {/* <CommonButton>Clear all</CommonButton> */}
    </div>
  );
};

export default FiltersBlock;
