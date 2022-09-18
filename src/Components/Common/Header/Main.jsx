import React, { useState } from 'react'
import { FaSearch, FaShoppingBasket } from 'react-icons/fa'
import { Container } from 'reactstrap'
import Dropdown from '../../UI/Dropdown'

const categories = [
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

// .Search {
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   width: 1920px;
//   height: 5065px;
//   z-index: 414;
// }
// . {
//   font-size: 13px;
//   font-family: "FontAwesome";
//   color: rgb(68, 68, 68);
//   line-height: 2.692;
//   position: absolute;
//   left: 1151.044px;
//   top: 82.002px;
//   z-index: 413;
// }
// .Category__________Enter_your_keywords {
//   font-size: 13px;
//   font-family: "Montserrat";
//   color: rgb(242, 130, 136);
//   line-height: 2.692;
//   text-align: left;
//   position: absolute;
//   left: 779.938px;
//   top: 116.059px;
//   z-index: 412;
// }
// .Txt {
//   border-width: 1px;
//   border-color: rgb(235, 235, 235);
//   border-style: solid;
//   border-radius: 10px;
//   position: absolute;
//   left: 764px;
//   top: 77px;
//   width: 417px;
//   height: 43px;
//   z-index: 411;
// }


const renderBody = (items) => {
    return (
        <ul className="opacity-0 pointer-events-none absolute">
            {items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    )
}
  
const Main = () => {

    const [defaultValue, setDefaultValue] = useState('Categories');

  return (
    <div className="py-9 border-b border-c-2">
        <Container>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-5xl font-medium text-c-m font-alex-brush">Gelli</h1>
                    <p className="ml-3 text-c-2 text-[13px] uppercase font-medium">premium template</p>
                </div>
                <form className="flex items-center relative leading-[2.692] !px-4 border border-b-1 rounded-xl w-[414px]">
                    <div className="relative ">
                        <Dropdown renderBody={() => renderBody(categories) } value={defaultValue} activeHead={true}/>
                    </div>
                    <div className="w-[2px] h-[13px] block bg-b-1 ml-2 "></div>
                    <div className="flex items-center flex-1">
                        <input type="text" className="outline-0 px-3 w-full text-13 font-medium placeholder-c-3" placeholder='Enter your keywords' />
                        <FaSearch className=""/>
                    </div>
                </form>
                <div className="flex items-center">
                    <div className="cursor-pointer">
                        <FaShoppingBasket className="text-[33px] text-dark "/>
                    </div>
                    <div className="w-[2px] h-[40px] block mx-4 bg-b-1 ml-2"></div>
                    <div className="text-13">
                        <p className="normal-case text-xs">5 Item(s)</p>
                        <span className="text-c-m text-base">$12500</span>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}



export default Main