import React from 'react'



const DiamondButton = ({
  containerButton = '',
  button = '', 
  content = ''
}) => {
  return (
    <div className={`container-button !w-4 !h-4 !p-[2px] hover:border-primary group ${containerButton}`} >
      <button className={`button group-hover:!bg-white ${button}`}>
          <div className={`content ${content}`}></div>
      </button>
    </div>
  )
}

export default DiamondButton