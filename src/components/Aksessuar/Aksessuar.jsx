import React from 'react'
import aksesuar1 from "../../assets/aksesuar-1.png"
import aksesuar2 from "../../assets/aksesuar-2.png"
import aksesuar3 from "../../assets/aksesuar-3.png"
import aksesuar4 from "../../assets/aksesuar-4.png"
import aksesuar5 from "../../assets/aksesuar-5.png"
import aksesuar6 from "../../assets/aksesuar-6.png"
import aksesuar7 from "../../assets/aksesuar-7.png"
import aksesuar8 from "../../assets/aksesuar-8.png"

const card = [
    {
    img: aksesuar1,
    title: "Мебель",  
    one: "Шкафы и шкафы-купе",
    twoo: "Стеллажи и книжные шкафы",
    three: "Столы",
    four: "Стулья",
    five: "Кровати",
    },
    {
    img: aksesuar2,
    title: "Аксессуары для создания уюта",  
    one: "Постельное белье",
    twoo: "Одеяла",
    three: "Комплекты постельного белья",
    four: "Подушки",
    five: "Пледы",
    },
    {
    img: aksesuar3,
    title: "Мебель",  
    one: "Шкафы и шкафы-купе",
    twoo: "Стеллажи и книжные шкафы",
    three: "Столы",
    four: "Стулья",
    five: "Кровати",
    },
    {
    img: aksesuar4,
    title: "Мебель",  
    one: "Шкафы и шкафы-купе",
    twoo: "Стеллажи и книжные шкафы",
    three: "Столы",
    four: "Стулья",
    five: "Кровати",
    },
    {
    img: aksesuar5,
    title: "Мебель",  
    one: "Шкафы и шкафы-купе",
    twoo: "Стеллажи и книжные шкафы",
    three: "Столы",
    four: "Стулья",
    five: "Кровати",
    },
    {
    img: aksesuar6,
    title: "Мебель",  
    one: "Шкафы и шкафы-купе",
    twoo: "Стеллажи и книжные шкафы",
    three: "Столы",
    four: "Стулья",
    five: "Кровати",
    },
    {
    img: aksesuar7,
    title: "Мебель",  
    one: "Шкафы и шкафы-купе",
    twoo: "Стеллажи и книжные шкафы",
    three: "Столы",
    four: "Стулья",
    five: "Кровати",
    },
    {
    img: aksesuar8,
    title: "Мебель",  
    one: "Шкафы и шкафы-купе",
    twoo: "Стеллажи и книжные шкафы",
    three: "Столы",
    four: "Стулья",
    five: "Кровати",
    }
]
// console.log(card);


const Aksessuar = () => {


    const acseusar = card?.map((card) => (
        <>
        <div className='w-1/5 flex flex-col gap-5'>
            <img src={card.img} className='w-full' alt="" />
            <ul className='px-[26] flex flex-col gap-3'>
                <li className='text-[18px] leading-8 font-bold'>
                    {card.title}
                </li>
                <li className='text-[18px] leading-8'>
                    {card.one}
                </li>
                <li className='text-[18px] leading-8'>
                    {card.twoo}
                </li>
                <li className='text-[18px] leading-8'>
                    {card.three}
                </li>
                <li className='text-[18px] leading-8'>
                    {card.four}
                </li>
                <li className='text-[18px] leading-8'>
                    {card.five}
                </li>
            </ul>
        </div>
        </>
        
    ))


  return (
    <div className=' containers mt-5 flex flex-col gap-10 items-start'>
      <h2 className='w-[40%] text-4xl font-bold'>
        Каталог
      </h2>
      <div className='wrapper flex gap-6 justify-center flex-wrap'>  
        {acseusar}
      </div>
    </div>
  )
}

export default Aksessuar
