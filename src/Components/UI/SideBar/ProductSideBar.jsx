import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import RectangleButton from './../../Common/Button/RectangleButton';
import { products } from '../../../Fakedata/products';
import CardProductList from '../CardProduct/CardProductList';
import CardProFeatured from './../CardProduct/CardProFeatured';

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
                <div className="flex items-center">
                    <h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_featured_product}</h1>
                    <div className="diamond relative flex-1 ml-3 h-[1px] bg-black-1"></div>
                </div>
                <ul className="">
                    {products.map((item, i) => (
                        <CardProFeatured key={i} data={item}/>
                    ))}
                </ul>
            </div>
            
            <div className="">
                <div className="flex items-center">
                    <h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_sidebar_compare}</h1>
                    <div className="diamond relative flex-1 ml-3 h-[1px] bg-black-1"></div>
                </div>

                <div className=" pt-6 pb-[70px]">
                    <p className='text-13 font-medium' >No product compare</p>
                    <div className="mt-3 flex ">
                        <RectangleButton text={'compare'} />
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
                    {productTags.map((item, i) => <li key={i} className='p-2 border mr-3 mb-2 text-sm  border-b-c-1 rounded-md' >{item.name}</li>)}
                </ul>
            </div>
            {/* {productTags} */}
        </div>
    )
}

export default ProductSideBar