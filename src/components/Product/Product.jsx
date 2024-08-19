import React, { useState, memo } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    const [offset, setOffset] = useState(1);


  const handleClick = () => setOffset(prev => prev + 1);
  const handleClick1 = () => setOffset(prev => Math.max(prev - 1, 1)); 
  return (
    <div  
    className='product__wrapper overflow-hidden group w-[300px] mt-7 relative duration-300 p-4 gap-1 hover:shadow-lg hover:cursor-pointer flex flex-col rounded-[30px]'>
    <Link to={`product/${product.id}`}>
    <img src={product.images?.[0]} className='w-full h-[300px] object-contain' alt={product.title} />
    </Link>
    <p className='text-[red] font-bold'>{product.discountPercentage}%</p>
    <h3 className='text-xl'>{product.title}</h3>
    <p className='line-clamp-1'>{product.description}</p>
    {product.dimensions && (
        <p>{product.dimensions.width}x{product.dimensions.height} cm</p>
    )}
    <p className='text-black text-3xl mb-10 mt-5 font-bold'>{product.price} $</p>
    <div className=' w-[320px] items-center flex absolute justify-start transition-all duration-300 -bottom-20 left-4 group-hover:bottom-2'>
        <div className="w-1/3 flex items-center gap-3">
            <button onClick={handleClick1} disabled={offset <= 1} className='flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]'>-</button>
            <p className='text-black'>{offset}</p>
            <button onClick={handleClick} className='flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl'>+</button>
        </div>
        <div className='w-1/2 flex justify-end'>
            <button className='w-[48px] h-[48px] bg-yellow-400 rounded-[50%] flex items-center justify-center text-white text-3xl'>
                <MdOutlineAddShoppingCart />
            </button>
        </div>
    </div>
    </div>
  )
}

export default memo(Product)
