import React, { useState } from 'react';

import './style.scss';
import Loader from '../UI/Loader';
import CatalogList from '../CatalogList';
import FiltersBlock from '../FiltersBlock';

const ProductMain = ({ productsList, isProductLoading }) => {
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [maxSelectedPrice, setMaxSelectedPrice] = useState(9999);
  const [minSelectedPrice, setMinSelectedPrice] = useState(0);

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
        const data = elem[filter.key];
        const value = filter.compareFunc(data);
        return value;
      });
    } else {
      return list;
    }
  };

  //Find min and max from API

  // const getPriceRange = (list) => {
  //   let max = list[0]?.price || 9999;
  //   let min = list[0]?.price || 0;

  //   list.forEach((item) => {
  //     if (item.price > max) {
  //       max = item.price;
  //     }
  //     if (item.price < min) {
  //       min = item.price;
  //     }
  //   });

  //   return { max, min };
  // };

  //Search

  const handleSearch = (list) => {
    return list.filter((item) => {
      return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
  };

  //Filter price

  const handleFilterPrice = (list) => {
    if (+maxSelectedPrice === 0) {
      return list;
    }
    return list.filter((item) => item.price <= maxSelectedPrice && item.price >= minSelectedPrice);
  };

  //Sorted and filtered data from API

  const resultList = handleCategoryList(handleFilterPrice(handleSort(handleFilter(handleSearch(productsList)))));


  // const priceRange = getPriceRange(resultList);

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
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
            setSearchValue={setSearchValue}
            resultList={resultList}
            setMaxSelectedPrice={setMaxSelectedPrice}
            setMinSelectedPrice={setMinSelectedPrice}
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
