import React from 'react'
import logo from "../../assets/logo.png"
import { NavLink, useLocation } from 'react-router-dom'



const Header = ({about}) => {

  const {pathname} = useLocation()
    

    const call = about?.map((p, inx) => (
        <p key={inx} className='text-xl	s'>{p}</p>
    ))
  return (
    <div className=''>
        <div className="header py-5">
          <div className="containers">
            <div className="flex items-center justify-between">
              <div className=''>
                <NavLink to={`/`}>
                  <img src={logo} alt="" />
                </NavLink>
              </div> 
              <div className=''>
                <ul className='flex gap-8'>
                      <li>
                          <NavLink to={`/katalog`} className={"text-black font-normal text-lg"}>
                              Каталог
                          </NavLink>
                      </li>
                      <li>
                          <NavLink to={`/dostavka`} className={"text-black font-normal text-lg"}>
                              Доставка
                          </NavLink>
                      </li>
                      <li>
                          <NavLink to={`/location`} className={"text-black font-normal text-lg"}>
                              Условия
                          </NavLink>
                      </li>
                      <li>
                          <NavLink to={`/contact`} className={"text-black font-normal text-lg"}>
                              Контакты
                          </NavLink>
                      </li>
                      <li>
                          <NavLink to={`/login`} className={"text-black font-normal text-lg"}>
                              Log   in
                          </NavLink>
                      </li>
                </ul>
              </div>
              <div className='flex flex-col items-end'>
                <div className='flex gap-2'>
                  {call}
                </div>
                <div>
                  <span className='text-sm	text-slate-300'>Заказать звонок</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
