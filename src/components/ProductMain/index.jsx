import React, { useState, useEffect } from 'react';

import './style.scss';
import Loader from '../UI/Loader';
import CatalogList from '../CatalogList';
import FiltersBlock from '../FiltersBlock';

const ProductMain = ({ productData, isProductLoading }) => {
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);

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

  return (
    <div className="product_catalog_container">
      <div className="catalog_title">
        <h2>Yopta Store List</h2>
      </div>
      {isProductLoading ? (
        <Loader />
      ) : (
        <div className="catalog_block">
          <FiltersBlock setSort={setSort} setFilter={setFilter} />
          <div className="catalog_list">
            <CatalogList productData={handleFilter(handleSort(productData))} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductMain;
