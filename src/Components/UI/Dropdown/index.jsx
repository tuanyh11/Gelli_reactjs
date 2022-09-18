import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const Dropdown = ({renderHeader, renderBody, value, activeHead}) => {
  return (
    <div className="relative">
        {renderHeader ? renderHeader() : 
            <div className="flex items-center cursor-pointer ">
                <p className={` ${activeHead ? 'text-c-m': ''}`}>{value}</p>
                <FaAngleDown className="ml-2 w-3 h-3"/>
            </div>
        }
        {renderBody && renderBody()}
    </div>
  )
}

export default Dropdown

