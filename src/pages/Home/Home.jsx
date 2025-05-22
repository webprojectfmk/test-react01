import React from 'react'
import Header from '../'
import Footer from './Footer'
import Script from './Script'
import LoadingBar from './LoadingBar'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Testpage from './Testpage'

const Home = () => {
  return (
    <>
        <Testpage/>
        <Header/>
        <LoadingBar/>
        <TopBar/>
        <Navbar/>
        {/* <Carousel/>
        <Footer/>
        <Script/> */}
    </>
  )
}

export default Home