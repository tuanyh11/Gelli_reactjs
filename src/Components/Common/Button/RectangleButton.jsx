import React from 'react'

const RectangleButton = ({color, className, text, Tag = 'button', onClick}) => {
  return (
    <Tag onClick={(e) => onClick(text, e)} className={`${className ? className : `uppercase text-base px-3 py-2 text-white rounded-md bg-black-1 ${color}`}`}>
        {text}
    </Tag>
  )
}

export default RectangleButton