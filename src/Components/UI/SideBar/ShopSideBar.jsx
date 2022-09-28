import React, { useState } from 'react'
import  Slider  from '@mui/material/Slider';
import RectangleButton from './../../Common/Button/RectangleButton';

const sidebarShopLabel = {
    label_sidebar_category: 'shop by categories',
    label_sidebar_manufacturers: 'manufacturers',
    label_sidebar_filter: 'filter by price',
    label_sidebar_compare: 'compare',
    label_sidebar_product_tag: 'product tag'
  }
  
  const categories = [
    {
      name: 'perfume',
    },
    {
      name: 'rollerballs & travel size', 
    },
    {
      name: 'lotions & oils',
    },
    {
      name: 'body mist & hair mist',
    }
  ]
  
  const manufacturers = [
    {
      name: 'aerin',
    },
    {
      name: 'ateller', 
    },
    {
      name: 'calvin klein', 
    },
    {
      name: 'carven', 
    },
  ]
  
  const productTags = [
    {
      name: 'Collections'
    },
    {
      name: 'jewelry'
    },
    {
      name: 'premium'
    },
    {
      name: 'rings'
    },
    {
      name: 'perfume'
    }
  ]
  

const ShopSideBar = () => {
    const [filterPrice, setFilterPrice] = useState([0, 30])


    const handleFilterByPrice = (e, values, activeThumb) => {
      setFilterPrice(values)
    }
  return (
    <div className="">
    <div className="">
      <div className="flex items-center">
        <h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_sidebar_category}</h1>
        <div className="diamond relative flex-1 ml-3 h-[1px] bg-black-1"></div>
      </div>
    
      <ul className="px-4 pt-6 pb-[70px]">
        {categories.map((item, i) => (
          <li className='uppercase font-medium text-13 mb-2 last:!mb-0' key={i}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="">
      <div className="flex items-center">
        <h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_sidebar_manufacturers}</h1>
        <div className="diamond relative flex-1 ml-3 h-[1px] bg-black-1"></div>
      </div>

      <ul className="px-4 pt-6 pb-[70px]">
        {manufacturers.map((item, i) => (
          <li className='capitalize  font-medium text-13 mb-2 last:!mb-0 flex items-center' key={i}>
            <input type="checkbox" className='mr-2'/>
            {item.name}
          </li>
        ))}
      </ul>
    </div>

    <div className="pb-[70px]">
      <div className='flex items-center'>
        <h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_sidebar_manufacturers}</h1>
        <div className="diamond relative flex-1 ml-3 h-[1px] bg-black-1"></div>
      </div>
      <div className="mt-3">
        <div className="">
          <Slider 
            getAriaLabel={() => 'Minimum distance shift'}
            value={filterPrice}
            
            onChange={handleFilterByPrice}
            valueLabelDisplay="auto"
            disableSwap
            sx={{
              width: '100%',
              color: '#f28288',
              '& .MuiSlider-rail': {
                background: '#cbcbcb',
              },
              '& .MuiSlider-thumb': {
                borderRadius: '2px',
                width: '16px',
                height: '16px',
                transform: 'rotate(45deg) translate(-50%, -22%)'
              },
              '& .MuiSlider-valueLabel': {
                display: 'none'
              }
            }}
          />
          {/* <Range /> */}
        </div>
        <div className='flex items-center mt-2'>
            <RectangleButton text={'filter'}/>

          <div className="ml-auto flex items-center ">
            <span className="text-sm font-medium ">price:</span> 
            <p className='mx-2 w-[3ch]'>${filterPrice[0]}</p>
            <span className='' >-</span>
            <p className='ml-2 w-[3ch]'>${filterPrice[1]}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="">
      <div className="flex items-center">
        <h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_sidebar_compare}</h1>
        <div className="diamond relative flex-1 ml-3 h-[1px] bg-black-1"></div>
      </div>

      <div className=" pt-6 pb-[70px]">
        <p className='text-13 font-medium' >No product compare</p>
        <div className="mt-3 flex ">
        <RectangleButton text={'compare'}/>
          <button className="ml-auto uppercase font-medium">clear all</button>
        </div>
      </div>
    </div>
    
    <div className="">
      <div className="flex items-center">
        <h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_sidebar_product_tag}</h1>
        <div className="diamond relative flex-1 ml-3 h-[1px] bg-black-1"></div>
      </div>

      <ul className=" pt-6 pb-[70px] flex flex-wrap">
        {productTags.map((item, i) => <li className='p-2 border mr-3 mb-2 text-sm  border-b-c-1 rounded-md' key={i}>{item.name}</li>)}
      </ul>
    </div>
    {/* {productTags} */}
</div>
  )
}

export default ShopSideBar