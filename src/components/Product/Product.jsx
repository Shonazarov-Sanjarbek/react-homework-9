import React, {useState, useEffect} from 'react'
import axios from "../../api"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';




const Product = () => {

    const [offset, setOffset] = useState(1);
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState(null)
    const [selectCategory, setSelectCategory] = useState("")
    const [offsetLimit, setOffsetLimit] = useState(1)
    const [total, setTotal] = useState(0)

    let limit = 4   
    
    

    useEffect(() => {
        axios 
            .get(`/products/category-list`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
            
    }, [])

    useEffect(() => {
        setLoading(true)
        axios
            .get(`/products${selectCategory}`, {
                params: {
                    limit: limit * offsetLimit
                }
            })
            .then(res => {
                setTotal(res.data.total)
                setProducts(res.data.products)
            })
            .catch(err => console.error("Failed to fetch products:", err))
            .finally(() => setLoading(false))

    }, [offsetLimit, selectCategory]);

    console.log(offsetLimit);
    

    const skeletonItems = new Array(limit).fill("").map((_, inx)=> (
        <div key={inx} className='w-[300px] border rounded-[30px] p-4 flex flex-col gap-4'>
            <div className='w-full h-[300px] bg-gray-200'>
            </div>
            <div className='w-[40%] h-[20px] bg-gray-200'>
            </div>
            <div className='w-[90%] h-[40px] bg-gray-200'>
            </div>
            <div className='w-[60%] h-[20px] bg-gray-200'>
            </div>
            <div className='w-[50%] h-[20px] bg-gray-200'>
            </div>
        </div>
    ))

    const handleClick = () => setOffset(prev => prev + 1);
    const handleClick1 = () => setOffset(prev => Math.max(prev - 1, 1)); 

    const productItem = products.map((product) => (
        <div 
            key={product.id} 
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
    ));

    const categoryItems = categories?.map(item => (
        <option key={item} value={`/category/${item}`}> {item} </option>
    ))

  return (
    <div id="Product" className='mt-16'>
    <div className="containers">
        <div className='flex items-end mb-8'>
            <h2 className='font-extrabold text-4xl'>Скидки <span className='text-red-600 mr-3'>%</span></h2>
            <p className='font-bold'>Все товары в категории</p>
        </div>
        <select onChange={e => setSelectCategory(e.target.value)} name="" id="">
            <option value="">All</option>
            {categoryItems}
        </select>
        <div className='flex justify-center flex-wrap'>
            {productItem}
            {
                <div className='flex gap-2  '>
                     {loading && skeletonItems}
                </div>
            }
        </div>
        {
        limit * offset <= total ?
            <button onClick={() => setOffsetLimit(p => p + 1)} className='py-2 px-6 border rounded-md block mx-auto mt-5 mb-10'> See more </button>
            :
            <></>
        }
    </div>
</div> 
  )
}

export default Product
