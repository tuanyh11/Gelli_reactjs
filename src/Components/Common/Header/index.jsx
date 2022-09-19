import React from 'react'
import { Container } from 'reactstrap'
import Main from './Main'
import Nav from './Nav'
import Topbar from './Topbar'

const Header = () => {
  return (
    <div>
        <Topbar/>
        <Main/>
        <Nav/>
    </div>
  )
}

export default Header