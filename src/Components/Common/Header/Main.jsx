import React, { useRef, useState } from 'react'
import { FaSearch, FaShoppingBasket } from 'react-icons/fa'
import { Container } from 'reactstrap'
import Dropdown from '../../UI/Dropdown'

const categories = [
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'categories'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'perfume'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'rollerballs & travel size'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'lotions & oils'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'body mist & hair mist'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        name: 'bath & shower'
    },
]

   
const Main = () => {

    const renderBody = (items, handleOnClick) => { 
        return ( 
            <ul >
                {items.map(item => <li onClick={() => handleOnClick(item)} className='hover:!text-primary default-transition px-4 cursor-pointer text-sm py-2 hover:' key={item.id}>{item.name}</li>)}
            </ul>
        )
    }

    const [category, setCategory] = useState(categories[0].name);

    const modelRef = useRef()

    const handleOnClick = (item) => {
        setCategory(item.name)
        modelRef.current.turnOffEvent()
    }

  return (
    <div className="py-9 border-b border-c-2">
        <Container>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-5xl font-medium !text-primary font-alex-brush">Gelli</h1>
                    <p className="ml-3 text-c-2 text-[13px] uppercase font-medium hidden lg:block">premium template</p>
                </div>
                <form className="flex items-center relative leading-[2.692]  !px-4 border border-b-1 rounded-xl w-[414px]">
                    <div className=" ">
                        <Dropdown 
                            renderBody={() => renderBody(categories, handleOnClick) } 
                            value={category} 
                            activeHead={true}
                            style={{text: 'w-[100px] limit'}}
                            ref={modelRef}
                        />
                    </div>
                    <div className="w-[2px] h-[13px] block bg-b-1 ml-2 "></div>
                    <div className="flex items-center flex-1">
                        <input type="text" className="outline-0 px-3 w-full text-13 font-medium placeholder-c-3" placeholder='Enter your keywords' />
                        <FaSearch className=""/>
                    </div>
                </form>
                <div className="flex items-center">
                    <div className="cursor-pointer relative">
                        <FaShoppingBasket className="text-[33px] text-dark "/>
                        <div className="absolute top-1 -right-2 text-white min-w-[18px] text-xs font-medium flex justify-center h-[18px] leading-[18px] text-center  !bg-primary rounded-[50%]">1</div>
                    </div>
                    <div className="w-[2px] h-[40px] mx-4 bg-b-1 ml-2 hidden lg:block"></div>
                    <div className="text-13 hidden lg:block">
                        <p className="normal-case text-xs">5 Item(s)</p>
                        <span className="!text-primary text-base">$12500</span>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}



export default Main