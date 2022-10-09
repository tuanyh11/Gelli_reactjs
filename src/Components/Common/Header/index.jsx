import React, { useEffect, useState } from 'react'
import Main from './Main'
import Nav from './Nav'
import Topbar from './Topbar'
import { HeaderContext } from './Context'
import { useUiSlice } from '../../../Redux/hooks'
import { getUi } from '../../../Redux/Slice/UiSlice'


const Header = () => {
  const [activeNav, setActiveNav] = useState(false)

  const hanlePupopNav = () => {
    setActiveNav(pre => !pre)
  }


  const[uiData, {getCategories}, dispatch] = useUiSlice()

  console.log(uiData)

  useEffect(() =>  {
    dispatch(getCategories())
    dispatch(getUi())
  },[])

  const categories = uiData.data?.categories 

  return (
    <div>
      <HeaderContext.Provider value={[activeNav, hanlePupopNav]}>
        <Topbar/>
        <Main />
        <Nav />
      </HeaderContext.Provider>
    </div>
  )
}

export default Header