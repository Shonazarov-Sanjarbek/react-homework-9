import React from 'react'
import dastavka1 from "../../assets/dastavka-1.png" 
import dastavka2 from "../../assets/dastavka-2.png" 

const About = () => {
  return (
    <div className=' containers wrapper mt-6 flex flex-col items-center justify-center'>
        <div className='card w-full flex'>
            <div className='content w-1/2 flex flex-col gap-12'>
                <h2 className='font-bold text-4xl text-black'>
                    Доставка
                </h2>
                <ul className='flex flex-col gap-10'>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Мы увозим товары из магазинов IKEA и привозим их в Ваш дом.
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Наше преимущество - фиксированная стоимость доставки по Беларуси. Такой приятной цены вы не найдете у транспортных компаний. 
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Наша задача – доставить заказ своевременно и без повреждений.
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-bold'>
                        <span>
                            Как мы работаем?
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Мы закупаем выбранные вами товары в магазинах IKEA. После того как они прибывают на наши склады, мы начинаем доставлять их вам.
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Доставляем заказ до подъезда. Подъем на этаж согласовывается заранее с оператором и оплачивается отдельно. Для подъема крупногабаритных товаров вы должны найти помощника курьеру.
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Даты поставки указаны в календаре на главной странице сайта. 
                        </span>
                    </li>
                </ul>
            </div>
            <div className='img w-1/2'>
                <img src={dastavka1} alt="" />
            </div>
        </div>
        <div className='card w-full flex'>
            <div className='img w-1/2'>
                <img src={dastavka2} alt="" />
            </div>
            <div className='content w-1/2 flex flex-col gap-12'>
                <ul className='flex flex-col gap-10'>
                    <li className='text-[18px] leading-8 font-bold'>
                        <span>
                            Доставка по Минску и Минскому р-ну
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Доставка по Минску осуществляется в течение 1-3 дней после поставки товаров на наш склад. За это время с вами связывается оператор и согласовывает комфортное для вас время получения заказа. В согласованный день курьер заранее уведомит о скором прибытии товара. 
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Заказ будет доставлен в течение 1-5 рабочих дней после поставки товаров на наш склад. Вам позвонит оператор и согласует удобное для вас время. В день доставки курьер за час свяжется с вами и уведомит о точном времени прибытия товара.
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-bold'>
                        <span>
                            Доставка по Беларуси
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Сборка и погрузка товаров осуществляется сотрудниками магазина IKEA. Поэтому точную информацию о наличии выкупленных товаров мы узнаем после разгрузки машины на нашем складе в Минске. 
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Из-за отсутствия некоторых позиций итоговая сумма заказа может уменьшиться. Если сумма отсутствующих товаров в заказе превышает 4 000 рос. руб, то комиссия за заказ будет пересчитана в соответствии с тарифами, которые указаны в разделе "Оплата".
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className='card w-full flex'>
            <div className='img w-1/2'>
                <img src={dastavka2} alt="" />
            </div>
            <div className='content w-1/2 flex flex-col gap-12'>
                <ul className='flex flex-col gap-10'>
                    <li className='text-[18px] leading-8 font-bold'>
                        <span>
                            Доставка по Минску и Минскому р-ну
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Доставка по Минску осуществляется в течение 1-3 дней после поставки товаров на наш склад. За это время с вами связывается оператор и согласовывает комфортное для вас время получения заказа. В согласованный день курьер заранее уведомит о скором прибытии товара. 
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Заказ будет доставлен в течение 1-5 рабочих дней после поставки товаров на наш склад. Вам позвонит оператор и согласует удобное для вас время. В день доставки курьер за час свяжется с вами и уведомит о точном времени прибытия товара.
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-bold'>
                        <span>
                            Доставка по Беларуси
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Сборка и погрузка товаров осуществляется сотрудниками магазина IKEA. Поэтому точную информацию о наличии выкупленных товаров мы узнаем после разгрузки машины на нашем складе в Минске. 
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Из-за отсутствия некоторых позиций итоговая сумма заказа может уменьшиться. Если сумма отсутствующих товаров в заказе превышает 4 000 рос. руб, то комиссия за заказ будет пересчитана в соответствии с тарифами, которые указаны в разделе "Оплата".
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className='card w-full flex'>
            <div className='content w-1/2 flex flex-col gap-12'>
                <ul className='flex flex-col gap-10'>
                    <li className='text-[18px] leading-8 font-bold'>
                        <span>
                            Если некоторых позиций не оказалось в наличии
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Вы имеете право отказаться от какой-либо позиции в заказе, но при этом нами удерживается комиссия за доставку этого товара.
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Вы можете это сделать в течение 12 часов после оформления заказа
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            Согласовывая доставку с оператором, вы обязуетесь ее принять. На каждую точку курьеру дается 10 мин. Если разгрузка не начинается в течение 5 мин с момента прибытия курьера к месту назначения, курьер следует дальше по маршруту. Все непринятые заказы отправляются на возврат в магазин IKEA. Чтобы получить непринятый заказ, вам необходимо еще раз его оформить на один из последующих рейсов. За нами остаётся право отказать вам в дальнейшем сотрудничестве..
                        </span>
                    </li>
                    <li className='text-[18px] leading-8 font-normal'>
                        <span>
                            В течение часа проверьте комплектацию согласно акту сдачи-приемки услуг, а также каждую позицию на видимые повреждения и брак.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About
