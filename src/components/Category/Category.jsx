import React from 'react'
import card1 from "../../assets/category-1.png"
import card2 from "../../assets/category-2.png"
import card3 from "../../assets/category-3.png"
import card4 from "../../assets/category-4.png"
import card5 from "../../assets/category-5.png"
import card6 from "../../assets/category-6.png"
import card7 from "../../assets/category-7.png"
import card8 from "../../assets/category-8.png"
import card9 from "../../assets/category-9.png"
import card10 from "../../assets/category-10.png"
import { FaArrowRightLong } from "react-icons/fa6";


const data = [
    {
        id: 1,
        url: card1,
        title: "Диваны"
    },
    {
        id: 2,
        url: card2,
        title: "Спальная"
    },
    {
        id: 3,
        url: card3,
        title: "Кухня"
    },
    {
        id: 4,
        url: card4,
        title: "Для сада"
    },
    {
        id: 5,
        url: card5,
        title: "Диваны"
    },
    {
        id: 6,
        url: card6,
        title: "Мебель"
    },
    {
        id: 7,
        url: card7,
        title: "Товары для отдыха"
    },
    {
        id: 8,
        url: card8,
        title: "Зеркала"
    },
    {
        id: 9,
        url: card9,
        title: "шкаф"
    },
    {
        id: 10,
        url: card10,
        title: "Кухня и бытовая тех.."
    },
]

const Category = () => {

    const CategoryCard = data?.map((card) => (
        <div key={card.id} className="card1  flex gap-[10px] flex-col items-center justify-start">
            <div className='w-full flex justify-center h-36'>
                <img src={card.url} className=' w-full object-contain' alt="" />
            </div>
            <p className='text-[18px] text-center font-bold'>{card.title}</p>
        </div>
    ))

  return (
    <>
        <div className="containers">
            <div id='Category' className='flex  items-end mb-8'>
                <h2 className='font-extrabold text-4xl mr-3'>Популярные категории</h2>
                <p className='font-bold flex items-center justify-center gap-2'>Все категории <FaArrowRightLong /></p>
            </div>
            <div className='flex flex-wrap justify-center gap-5 mt-[61px] mb-[100px]'>{CategoryCard}</div>
        </div>
    </>
  )
}

export default Category
