import React from 'react'

const Banner = ({image, title, subtitle, children, containerStyle}) => {
  return (
    <div className={containerStyle}>
           {children ? children : (
            <div className="pt-[700px]  bg-cover bg-no-repeat md:bg-center relative [background-position:77%_70%]" style={{backgroundImage: `url(${image})`}}>
              <div className="absolute  top-1/2 right-1/2 translate-x-[62%] -translate-y-[72%]">
                <h1 className="text-6xl md:text-[100px] uppercase font-extrabold  !text-primary md:!text-white ">{title}</h1>
                <h1 className="text[200px]  font-alex-brush font-medium absolute top-7 left-0 lg:translate-x-6 text-gray-darkest md:text-[200px] md:left-0 md:translate-x-1/2">{subtitle}</h1>
              </div>
            </div> 
           )}
    </div>
  )
}



export default Banner


  