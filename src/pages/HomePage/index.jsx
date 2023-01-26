import React, { useEffect, useState } from 'react';
import './style.scss';

import PreviewMain from './items/PreviewMain';
import ProductMain from './items/ProductMain';
import { fetchData } from '../../API/ProductService';
import { connect } from 'react-redux';
import { setProductList } from '../../redux/actions/productDataAction';

const HomePage = ({ productList, setProductList }) => {
  const [isProductLoading, setIsProductLoading] = useState(false);

  useEffect(() => {
    handleGetData();
  }, []);
  

  const handleGetData = async () => {
    try {
      setIsProductLoading(true);
      const data = await fetchData('/products');
      const products = data.data;
      setProductList(products);
      setIsProductLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <PreviewMain />
      <ProductMain productsList={productList} isProductLoading={isProductLoading} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  productList: state.productsData.productList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setProductList: (payload) => dispatch(setProductList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
