import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import PolicyAndBrand from '../Common/PolicyAndBrand'


function MainLayout({children, offPolicyAndBrand}) {
  
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