import React from 'react'
import logo from "../../assets/logo.png"
import instagram from "../../assets/ins.png"
import { useLocation } from 'react-router-dom';


const Footer = ({information, menu, contact}) => {

    const informationFooter = information?.map((li, inx) => (
        <li key={inx}>
            {li}
        </li>
    ))

    const menuFooter = menu?.map((li, inx) => (
        <li key={inx}>
            {li}
        </li>
    ))

    const contactFooter = contact?.map((li, inx) => (
        <li key={inx}>
            {li}
        </li>
    ))

    const {pathname} = useLocation()

  return (
    <>
        <div id="Footer" className="bg-slate-100 py-[40px] mt-36">
            <div className="containers mx-auto px-4">
                <div>
                    <div className="mb-7">
                    <img src={logo} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between  gap-6 items-start md:items-end mt-7 space-y-10 md:space-y-0">
                    <div className="md:w-1/4">
                        <ul className="flex flex-col gap-6">
                        <li className="font-bold">Информация</li>
                        <li>
                            {informationFooter}
                        </li>
                        </ul>
                    </div>
                    <div className="md:w-1/4">
                        <ul className="flex flex-col gap-5">
                        <li className="font-bold">Меню</li>
                        <li>
                            {menuFooter}
                        </li>
                        </ul>
                    </div>
                    <div className="md:w-1/4">
                        <ul className="flex flex-col gap-5">
                        <li className="font-bold">Контакты</li>
                        <li>
                            {contactFooter}
                        </li>
                        </ul>
                    </div>
                    <div className="md:w-1/5">
                        <img src={instagram} alt="" className="mx-auto md:mx-0" />
                    </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Footer
