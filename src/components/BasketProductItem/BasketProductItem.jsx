import { Button, ButtonGroup, Checkbox, TextField } from '@mui/material';
import React, { useState } from 'react';

import img from '../../images/testImg.png';

import './style.scss';

const LongText = ({ content, limit, className }) => {
  const [showAll, setShowAll] = useState(false);

  const handleChangeText = () => setShowAll(!showAll);

  if (content.length <= limit) {
    return <div>{content}</div>;
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

const BasketProductItem = () => {
  return (
    <>
      <div className="left_product_item">
        <div className="product_left_block">
          <div className="product_checkbox_block">
            <Checkbox className="product_checkbox" defaultChecked size="small" />
          </div>
          <div className="product_left_image">
            <img src={img} alt="product_img" />
          </div>
          <div className="product_left_description">
            <LongText
              className="description_item item_title"
              content="Blink Outdoor | Wireless, weather-resistant HD security camera with two-year battery life, motion detection, works with Alexa "
              limit={75}
            />
            <div className="description_item item_instock">In stock: 12</div>
            <div className="description_item item_rate">Rate: 3.9</div>
            <div className="description_item item_category">Category: men's clothing</div>
          </div>
        </div>
        <div className="product_left_amount">
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>-</Button>
            <TextField defaultValue='1' id="outlined-basic" variant="outlined" />
            <Button>+</Button>
          </ButtonGroup>
        </div>

        <div className="product_left_price">228$</div>
      </div>
    </>
  );
};

export default BasketProductItem;
