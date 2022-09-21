import React from 'react'

const Title = ({className, image, text, Tag = 'h1'}) => {
  return (
    <div className={``}>
        <Tag className="text-center font-greatVibes text-[42px] font-normal">{text}</Tag>
        <img className={`ml-auto mr-auto`} src={image} alt="" />
    </div>
  )
}

export default Title