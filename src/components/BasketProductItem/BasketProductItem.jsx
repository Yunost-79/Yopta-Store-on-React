import { Button, ButtonGroup, Checkbox, TextField } from '@mui/material';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editBasketItem, setDeleteBasketDataItem } from '../../redux/actions/productsBasketAction';

import CloseIcon from '@mui/icons-material/Close';

import img from '../../images/testImg.png';

import './style.scss';

const LongText = ({ content, limit, className }) => {
  const [showAll, setShowAll] = useState(false);

  const handleChangeText = () => setShowAll(!showAll);

  if (content.length <= limit) {
    return <div className={className ? className : ''}>{content}</div>;
  }
  if (showAll) {
    return (
      <div className={className ? className : ''} onClick={handleChangeText}>
        {content}
      </div>
    );
  }
  const toShow = content.substring(0, limit) + '...';
  return (
    <div className={className ? className : ''} onClick={handleChangeText}>
      {toShow}
    </div>
  );
};

const BasketProductItem = ({ data, setDeleteBasketDataItem, editBasketItem }) => {
  const handeleDeleteItem = () => {
    setDeleteBasketDataItem(data.id);
  };

  const handleUpdateQuantity = (quantity) => {
    if (quantity > 0) {
      editBasketItem({ ...data, quantity });
    }
  };

  return (
    <div key={data.id} className="left_product_item">
      <div className="product_left_block">
        <div className="product_checkbox_block">
          <Checkbox className="product_checkbox" defaultChecked size="small" />
        </div>
        <div className="product_left_image">
          <img src={data.image} alt="product_img" />
          {/* <img src={img} alt="product_img" /> */}
        </div>
        <div className="product_left_description">
          <LongText className="description_item item_title" content={data.title} limit={50} />
          <div className="description_item item_instock">{`In stock: ${data.rating.count}`}</div>
          <div className="description_item item_rate">{`Rate: ${data.rating.rate}`}</div>
          <div className="description_item item_category">{`Category: ${data.category}`}</div>
        </div>
      </div>
      <div className="product_left_amount">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => handleUpdateQuantity(data.quantity - 1)}>-</Button>
          <TextField
            onChange={(e) => handleUpdateQuantity(e.target.value)}
            value={data.quantity}
            type="text"
            id="outlined-basic"
            variant="outlined"
          />
          <Button onClick={() => handleUpdateQuantity(data.quantity + 1)}>+</Button>
        </ButtonGroup>
      </div>
      <div className="product_left_price">{`${data.price} €`}</div>
      <div className="product_left_remove">
        <CloseIcon onClick={() => handeleDeleteItem(data)} />
      </div>
    </div>

    // {productBasketData.map((data) => (

    // ))}
  );
};

const mapStateToProps = (state) => ({
  quantity: state.productsBasket.quantity,
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    setDeleteBasketDataItem: (payload) => dispatch(setDeleteBasketDataItem(payload)),
    editBasketItem: (payload) => dispatch(editBasketItem(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketProductItem);
