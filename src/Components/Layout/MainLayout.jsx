import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import PolicyAndBrand from '../Common/PolicyAndBrand'
import Breadcrumb from '../Common/Breadcrumb'



function MainLayout({children, offPolicyAndBrand, offBreadcrumb}) {
  
  return (
    <div>
      <Header/>
        {!offBreadcrumb && 
          <Breadcrumb/>
        }
        {children}
        {!offPolicyAndBrand && <PolicyAndBrand />}
      <Footer/>
    </div>
  )
}

export default MainLayout