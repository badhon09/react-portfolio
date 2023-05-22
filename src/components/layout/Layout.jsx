import React from 'react'
import { Navbar } from '../partials/Navbar'
import MobileNav from '../partials/MobileNav'
import { Footer } from '../partials/Footer'

export default function Layout({children}) {
  return (
    
            <>
        {/* Preloader start */}
        {/* <div id="preloader">
            <div className="loader--border" />
        </div> */}
        {/* Preloader end */}
       <MobileNav/>
        <div className="h-full bg-[url('../images/hero-bg-img.png')] bg-cover bg-no-repeat bg-center bg-[#DAEEF1] dark:bg-[url('../images/home2-hero-bg-dark.png')] dark:bg-dark_primary_bg md:pb-[90px]">
           <Navbar/>
            {/* Main wrapper start */}
            
            {children}
            
            <Footer/>
        </div>
        </>



  )
}
