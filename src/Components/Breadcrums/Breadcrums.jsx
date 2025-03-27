import React from 'react'
import './Breadcrums.css'
import arrow from '../Assets/Images/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;

  return (
    <div className='breadcrum'>
        Shop <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums
