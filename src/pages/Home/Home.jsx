import React from 'react'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'

const Home = () => {
  return (
      <>
      < Hero hero = {["Худи, чашки для горячего чая и термосы", "Eлочные игрушки, брелочки", "Начало списка вещей, которые можно"]} />
      < Category />
      < Product />
      </>
  )
}

export default Home
