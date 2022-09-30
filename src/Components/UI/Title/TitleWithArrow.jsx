import React from 'react'

const TitleWithArrow = ({text}) => {
  return (
    <div className="flex items-center">
        <h1 className="text-start font-greatVibes text-2xl font-medium">{text}</h1>
        <div className="diamond relative flex-1 ml-3 h-[1px] bg-black-1"></div>
  </div>
  )
}

export default TitleWithArrow