import React, {useState, useEffect} from 'react'
import axios from "../../api"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';




const Products = () => {

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

    // console.log(offsetLimit);
    

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
        < ProductCard products={products}/>
            {
                <div className='flex gap-2  '>
                     {loading && skeletonItems}
                </div>
            }
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

export default Products
