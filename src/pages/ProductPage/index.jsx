import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../API/ProductService';

import './style.scss';

const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    handleGetData();
  }, [id])

  const handleGetData = async () => {
    if (id) {
      const data = await fetchData(`/products/${id}`);
      setProductData(data)
    }
  }
  console.log(productData)
  return (
    <div className='product-page'>
      <div className='title'>ProductPage</div>
      {productData?.id}
    </div>
  );
};

export default ProductPage;
