import React, { useState } from 'react';

import './style.scss';
import Loader from '../UI/Loader';
import CatalogList from '../CatalogList';
import FiltersBlock from '../FiltersBlock';

const ProductMain = ({ productData, isProductLoading }) => {
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  //Sorting by low/high price and name

  const handleSort = (list) => {
    if (sort) {
      return list?.sort((a, b) => {
        const aData = a[sort.key];
        const bData = b[sort.key];
        const val = sort.compareFunc(aData, bData);
        if (val === true) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      return list;
    }
  };

  //Category sort

  const handleCategoryList = (list) => {
    return list.filter((item) => {
      if (categoryValue === 'all categories') {
        return item;
      }
      if (item.category === categoryValue) {
        return categoryValue;
      }
      if (categoryValue === '') {
        return item;
      }
      return;
    });
  };

  //Filter by price

  const handleFilter = (list) => {
    if (filter) {
      return list?.filter((elem) => {
        console.log(list);
        const data = elem[filter.key];
        const value = filter.compareFunc(data);
        return value;
      });
    } else {
      return list;
    }
  };

  const getPriceRange = (list) => {
    let max = list[0]?.price || 9999;
    let min = list[0]?.price || 0;

    list.forEach((item) => {
      if (item.price > max) {
        max = item.price;
      }
      if (item.price < min) {
        min = item.price;
      }
    });

    return { max, min };
  };

  //Search

  const handleSearch = (list) => {
    return list.filter((item) => {
      return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
  };

  const resultList = handleCategoryList(handleSort(handleFilter(handleSearch(productData))));
  const priceRange = getPriceRange(resultList);

  return (
    <div className="product_catalog_container">
      <div className="catalog_title">
        <h2>Yopta Store List</h2>
      </div>
      {isProductLoading ? (
        <Loader />
      ) : (
        <div className="catalog_block">
          <FiltersBlock
            setSort={setSort}
            setFilter={setFilter}
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
            setSearchValue={setSearchValue}
            maxPrice={priceRange.max}
            minPrice={priceRange.min}
          />
          <div className="catalog_list">
            <CatalogList products={resultList} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductMain;
