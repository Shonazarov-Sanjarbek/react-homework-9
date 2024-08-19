import React, { useState, memo } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductCard = ({products}) => {

  

  const productItem = products?.map((product) => (
    <Product key={product.id} product={product}/>
));

  return (
    <div className='flex justify-center flex-wrap'>
      {productItem}
    </div>
  )
}

export default memo(ProductCard) 
