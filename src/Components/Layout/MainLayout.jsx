import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import PolicyAndBrand from '../Common/PolicyAndBrand'
import { useLocation } from 'react-router-dom'


function MainLayout({children, offPolicyAndBrand}) {
  // console.log(useLocation())
  return (
    <div>
      <Header/>
        {children}
        {!offPolicyAndBrand && <PolicyAndBrand />}
      <Footer/>
    </div>
  )
}

export default MainLayout