import React from 'react'

const SecondaryBanner = ({image, title, description}) => {
  return (
    <div className="border-transparent border-4 hover:border-4 hover:!border-primary default-transition group">
      <div className="px-7 py-[65px] bg-cover uppercase bg-no-repeat object-contain [background-position:100%_0%]" style={{backgroundImage: `url(${image})`}}>
          <div>
            <h1 className=" text-[30px] font-light text-gray-darkest group-hover:text-primary default-transition tracking-widest" dangerouslySetInnerHTML={{__html: title}}/>
          </div>
          <div className="w-[95px] h-[1px] bg-c-1 mt-2"></div>
          <p className="mt-3 text-c-4">{description}</p>
      </div>
    </div>
  )
}

export default SecondaryBanner

