import React, { useState, useEffect } from 'react';

import './style.scss';
import Loader from '../UI/Loader';
import CatalogList from '../CatalogList';
import FiltersBlock from '../FiltersBlock';

const ProductMain = ({ productData, isProductLoading }) => {
  // console.log(productData);
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);

  const handleSort = list => {
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

  const handleFilter = list => {
    if (filter) {
      
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
          <FiltersBlock setSort={setSort} />
          <div className="catalog_list">
            <CatalogList productData={handleFilter(handleSort(productData))} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductMain;
