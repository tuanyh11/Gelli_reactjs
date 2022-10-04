import React from 'react'

const OffLayer = ({children}) => {
  return (
    <div   className='fixed top-0 bottom-0 left-0 right-0 transition  z-[999999] '>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1F1F1F] opacity-50"></div>
        {children}
    </div>
  )
}

export default OffLayer