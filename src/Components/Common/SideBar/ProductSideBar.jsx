import React, { useState } from 'react'
import RectangleButton from './../../Common/Button/RectangleButton';
import { products } from '../../../Fakedata/products';
import CardProFeatured from '../../UI/Product/CardProFeatured';
import TitleWithArrow from '../../UI/Title/TitleWithArrow';

const sidebarShopLabel = {
    label_sidebar_category: 'shop by categories',
    label_sidebar_manufacturers: 'manufacturers',
    label_sidebar_filter: 'filter by price',
    label_sidebar_compare: 'compare',
    label_sidebar_product_tag: 'product tag',
    label_featured_product: 'featured product'
}

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


const ProductSideBar = () => {
    
    return (
        <div className="">
            <div className="">
                <TitleWithArrow text={sidebarShopLabel.label_featured_product}/>
                <ul className="pt-[30px] pb-[70px] !pl-5">
                    {products.slice(0, 8).map((item, i) => (
                        <div key={i} className="!mb-5 last:mb:-0" >
                            <CardProFeatured  data={item}/>
                        </div>
                    ))}
                </ul>
            </div>
            
            <div className="">
                <TitleWithArrow text={sidebarShopLabel.label_sidebar_compare}/>
   
                <div className=" pt-6 pb-[70px]">
                    <p className='text-13 font-medium' >No product compare</p>
                    <div className="mt-3 flex ">
                        <RectangleButton text={'compare'} />
                        <button className="ml-auto uppercase font-medium">clear all</button>
                    </div>
                </div>
            </div>

            <div className="">
                <TitleWithArrow text={sidebarShopLabel.label_sidebar_product_tag}/>

                <ul className=" pt-6 pb-[70px] flex flex-wrap">
                    {productTags.map((item, i) => <li key={i} className='p-2 border mr-3 mb-2 text-sm  border-b-c-1 rounded-md' >{item.name}</li>)}
                </ul>
            </div>
            {/* {productTags} */}
        </div>
    )
}

export default ProductSideBar