import React from 'react'

const RectangleButton = ({color, className, text, Tag = 'button', onClick = () => {}}) => {
 
  return (
    <Tag onClick={(e) => onClick(text, e)} className={`${className ? className : `uppercase text-base px-3 font-normal leading-10 text-white rounded-md  ${color ? color : 'bg-gray-darkest' }`}`}>
        {text}
    </Tag>
  )
}

export default RectangleButton