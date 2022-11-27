import React from 'react'

import './style.scss'

import PreviewImage from '../../../images/preview-image.png';


const PreviewMain = () => {
  return (
<div className="preview_conteiner">
        <div className="preview_left_block">
          <h1 className="preview_title">Welcome to Yopta Store</h1>
          <p className="preview_subtitle">The first store created with the support of dementia and degradation</p>
        </div>
        <div className='preview_right_block'>
          <img src={PreviewImage} alt="boldman" />
        </div>
      </div>  )
}

export default PreviewMain