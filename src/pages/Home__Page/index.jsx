import React from 'react'
import Navbar from '../../components/blocks/Navbar'
import Footer from '../../components/blocks/Footer'
import Herosection from './components/blocks/Herosection'
import Categories from './components/blocks/Categories'
import Popularitems from './components/blocks/Popularitems'

const Home = () => {
  return (
    <>
      <div><Navbar/></div>
      <div><Herosection/></div>
      <div><Categories/></div>
      <div><Popularitems/></div>
      <div><Footer/></div>
    </>
  )
}

export default Home