import React from 'react'
import humburger from "../../assets/burger.png";
import Star from "../../assets/star.png";
import user from "../../assets/users.png";
import search from "../../assets/search.svg";
import card from "../../assets/cart.png";
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const {pathname} = useLocation()

  return (
    <div className=" containers mx-auto mb-[120px] flex items-center justify-between">
        <div className="flex  items-center gap-[100px] mt-[30px]">
            <img src={humburger} alt="" />
            <div className="flex items-center border rounded-[30px] p-2 w-[600px]">
                <input
                className="bg-inherit w-full outline-none px-2"
                type="text"
                placeholder="Что желаете найти?"
                />
                <button className="bg-inheri">
                <img src={search} alt="" />
                </button>
            </div>
        </div>
        <div className="flex justify-center gap-[38px] mt-[30px] ">
            <p className="mr-[40px] text-[rgb(255,153,0)] cursor-pointer">
                Вставить список покупок
            </p>
            <img src={Star} alt="" />
            <img src={card} alt="" />
            <img src={user} alt="" />
        </div>
    </div>
  )
}

export default Navbar
