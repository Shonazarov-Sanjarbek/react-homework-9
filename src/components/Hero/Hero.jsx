import React from 'react'
import heroImg from "../../assets/hero.png"


const Hero = ({hero}) => {

    const heroItem = hero?.map((li, inx) => (
        <li key={inx} className="marker:text-yellow-300"> {li}  </li>
    ))

  return (
    <div className='mt-32'>
    <div className="containers">
      <div id='Hero' className='flex items-center justify-center gap-2 flex-wrap'>
        <div className='flex flex-col gap-8 items-start w-[470px]'>
          <h2 className='text-5xl font-bold w-4/6'>Мебель на любой вкус!</h2>
          <ul className='flex flex-col list-disc	text-lg font-normal'>
            {heroItem}
          </ul>
          <button className='py-2.5 px-20	bg-amber-500 rounded-3xl text-white	hover:bg-yellow-500  duration-300'>Перейти в каталог</button>
        <a href="#"><p className='items-center flex text-center text-amber-500'>Внести список артикулов</p></a>
        </div>
        <div className="w-[500px] h-[350px]">
          <img className="w-full h-full" src={heroImg} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
