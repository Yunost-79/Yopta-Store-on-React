import React from 'react';
import { useParams } from 'react-router-dom';

import './style.scss';



const ProductPage = ({ singleProductId, setIsProductLoading }) => {
  
const {id} = useParams();

console.log(id);




  return <div>ProductPage</div>;
};

export default ProductPage;
