import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const Dropdown = ({renderHeader, renderBody, value, activeHead, onClick, style={header: '', text: ''} }) => {
  return (
    <div>
        {renderHeader ? renderHeader() : 
            <div className={`flex items-center cursor-pointer w-auto ${style.header}`} onClick={onClick}>
                <p className={`${style.text} ${activeHead ? 'text-c-m': ''}`}>{value}</p>
                <FaAngleDown className="ml-2 w-3 h-3"/>
            </div>
        }
        {renderBody && renderBody()}
    </div>
  )
}

export default Dropdown

