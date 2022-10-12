import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { useLocation, useParams } from 'react-router-dom'
import breadcrumbImg from '../../../Fakedata/images/breadcrum.png'
const Breadcrumb = ({imageUrl}) => {

  const location = useLocation()

  const currentLocation = location.pathname.split("/")[1]

  const history = location.state?.oldPath
  // {history} <span className='px-2'><FaAngleRight /></span>  {currentLocation}
  const param = useParams()

  const path = [ history, currentLocation, param?.id].filter((item) => item)

  return (
    <div className='pt-[250px] bg-no-repeat relative' style={{backgroundImage: `url(${breadcrumbImg})`}}>
        <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-greatVibes text-[42px] font-medium">
            {currentLocation}
          </h1>
          <div className="uppercase text-sm mt-6">
            { <div className='flex items-center'>
              {path.map((item, i) => <React.Fragment key={i}>{item} {i !== path.length - 1 && <span key={i} className='px-2'><FaAngleRight /></span>}</React.Fragment>
              )}
            </div> }
          </div>
        </div>
    </div>
  )
}

export default Breadcrumb