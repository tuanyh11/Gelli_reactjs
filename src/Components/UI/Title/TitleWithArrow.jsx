import React from 'react'

const TitleWithArrow = ({text, containerStyle, customArrow, arrowStyle}) => {
  return (
    <div className={`${containerStyle ? containerStyle: "flex items-center"}`}>
        <h1 className="text-start font-greatVibes text-2xl font-medium">{text}</h1>
        {customArrow ? customArrow() : <div className={arrowStyle ? arrowStyle : 'diamond relative flex-1 ml-3 h-[1px] bg-black-1'}></div>}
    </div>
  )
}

export default TitleWithArrow