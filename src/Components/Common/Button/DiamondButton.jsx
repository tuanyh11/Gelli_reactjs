import React from 'react'



const DiamondButton = ({
  containerButton = '',
  button = '', 
  content = '',
  children,
}) => {
  return (
    <div className={`container-button !p-[2px] hover:border-primary group rounded-sm ${containerButton}`} >
      <div className={`button rounded-sm ${button}`}>
          {children && <div className={`content ${content}`}>{children}</div>}
      </div>
    </div>
  )
}

export default DiamondButton