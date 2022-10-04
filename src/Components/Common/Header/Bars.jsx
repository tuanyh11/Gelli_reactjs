import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { HeaderContext } from './Context'

const Bars = ({className}) => {
  const handlePupopNav = useContext(HeaderContext)[1]
   
  return (
    <div onClick={() => handlePupopNav()} className={`cursor-pointer p-2 ${className ? className: ''}`}>
        <FaBars className="text-2xl text-dark"/>
    </div>
  )
}

export default Bars