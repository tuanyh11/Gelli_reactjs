import React from 'react'
import { Container } from 'reactstrap'
import Main from './Main'
import Menu from './Menu'
import Topbar from './Topbar'

const Header = () => {
  return (
    <div>
        <Topbar/>
        <Main/>
        <Menu/>
    </div>
  )
}

export default Header