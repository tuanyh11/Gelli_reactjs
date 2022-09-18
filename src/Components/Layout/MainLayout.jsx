import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function MainLayout({children}) {
  return (
    <div>
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}

export default MainLayout