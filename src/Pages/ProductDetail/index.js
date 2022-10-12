import { isFulfilled } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api';
import {  CardProDetail} from '../../Components';
import Nav from './Nav'
import RelatedProduct from './RelatedProduct';
import ReviewSection from './ReviewSection';



const ProductDetail = () => {

    const [product, setProduct] = useState()

    const [page, setPage] = useState('description')

    const [error, setError] = useState(null)

    const params = useParams()

    useEffect(() => {
        (async() => {
            try {
                const res = await getProduct(params.id)
                setProduct(res.data?.product)
            } catch (error) {
                setError( error.message)
            }
        } )()
    }, [])

    if(error) return(<div className='py-20'>{error}</div>)

    return (
        
        <div>
            <section className="mb-[100px]">
                <CardProDetail product={product}/>
            </section>

            <section className="mb-[100px]">
                <Nav page={page} onClick={(value) => setPage(value)}/>
                {/* description */}
                {page.toLowerCase() === 'description' && 
                    <div className='px-10 py-8 border rounded-md text-13 leading-6 relative pseudo-diamond after:top-0 after:rotate-45 after:-translate-y-1/2 after:left-16 after:bg-gray-300'>
                        {
                        product?.description && 
                        <p  dangerouslySetInnerHTML={{__html: product.description}}>
                        </p>
                        }
                    </div>               
                }
                {/* review */}
                {page.toLowerCase() === 'review' &&
                    <ReviewSection/>
                }
            </section>

            <section className="">
                <RelatedProduct/>
            </section>
        </div>
    )
}

export default ProductDetail