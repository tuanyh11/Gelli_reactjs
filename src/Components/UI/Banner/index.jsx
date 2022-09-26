import React from 'react'

const Banner = ({image, title, subtitle, children, containerStyle}) => {
  return (
    <div className={containerStyle}>
           {children ? children : (
            <div className="py-[350px] bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${image})`}}>
              <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                <h1 className="text-[100px] uppercase font-extrabold text-white">{title}</h1>
                <h1 className="text-[200px] font-alex-brush font-medium absolute top-9 text-gray-darkest">{subtitle}</h1>
              </div>
            </div> 
           )}
    </div>
  )
}

export default Banner

// .Gelli {
//     font-size: 200px;
//     font-family: "AlexBrush";
//     color: rgb(68, 68, 68);
//     line-height: 1.2;
//     text-align: left;
//     position: absolute;
//     left: 782.937px;
//     top: 518.5px;
//     z-index: 380;
//   }
  
  