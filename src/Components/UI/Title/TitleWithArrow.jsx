import React from 'react'

const TitleWithArrow = ({text, containerStyle, customArrow, arrowStyle, textStyle}) => {
  return (
    <div className={`${containerStyle ? containerStyle: "flex items-center"}`}>
        <h1 className="text-start font-greatVibes text-2xl font-medium " style={{...textStyle}}>{text}</h1>
        {customArrow ? customArrow() : <div className={arrowStyle ? arrowStyle : ' diamond relative flex-1 ml-3 h-[1px] bg-black-1 after:top-0 after:h-[1px] after:bg-gradient-to-r after:w-1/2 after:right-0 after:content-[""] after:absolute after:from-black-1 after:to-gray-100'}></div>}
    </div>
  )
}

export default TitleWithArrow