import React from 'react'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import Products from '../../components/Product/Products'

const Home = () => {
  return (
      <>
      < Hero hero = {["Худи, чашки для горячего чая и термосы", "Eлочные игрушки, брелочки", "Начало списка вещей, которые можно"]} />
      < Category />
      < Products />
      </>
  )
}

export default Home
