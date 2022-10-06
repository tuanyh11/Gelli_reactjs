import React, { useState } from 'react'
import Main from './Main'
import Nav from './Nav'
import Topbar from './Topbar'
import { HeaderContext } from './Context'


const Header = () => {
  const [activeNav, setActiveNav] = useState(false)

  const hanlePupopNav = () => {
    setActiveNav(pre => !pre)
  }

  return (
    <div>
      <HeaderContext.Provider value={[activeNav, hanlePupopNav]}>
        <Topbar/>
        <Main/>
        <Nav/>
      </HeaderContext.Provider>
    </div>
  )
}

export default Header