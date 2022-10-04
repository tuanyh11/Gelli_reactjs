import React from 'react'

const Arrow = ({children, ...props}) => {
  const { className, style, onClick, classContainer } = props;
  return (
    <div 
      className={`${classContainer}`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
      >
        {children}
    </div>
  )
}


export default Arrow