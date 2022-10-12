import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FaAngleDown, FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const currency = ['usd', 'euro']
const language = ['english', 'germary']

const Topbar = () => {
  return (
    <div className='h-[40px] bg-[#f4f4f4] text-gray-dark font-semibold text-xs'>
      <Container className="h-full">
        <div className=" flex items-center justify-center lg:justify-between h-full">
          <div className="lg:flex items-center hidden">
            <Link to="/" className="flex items-center hover:!text-primary">
              <FaEnvelope className="mr-2"/>
              <p >youremail@gmail.com</p>
            </Link>

            <Link to={'/'} className="flex items-center ml-[30px] hover:!text-primary">
              <FaPhoneAlt className="mr-2"/>
              <p >(+91)123 356 789</p>
            </Link>
          </div>
          
          <div className="flex items-center ">
            <div className="cursor-pointer hover:!text-primary ">
              <div className="flex items-center  pr-3 leading-10">
                <p>my account</p>
                <FaAngleDown className="w-3 h-3 ml-1 font-thin" />
              </div>
            </div>

            <div className="cursor-pointer group relative hover:!text-primary">
              <div className="flex items-center   px-3 leading-10 ">
                <p>usd</p>
                <FaAngleDown className="w-3 h-3 ml-1 font-thin" />
              </div>
              <ul className="z-[99999] opacity-0 pointer-events-none group-hover:!opacity-100 group-hover:pointer-events-auto group-hover:top-[100%] duration-300 transition ease absolute bg-c-light top-[110%] shadow-sm left-0 ">
                {currency.map((item, i) => <li className='!px-5 py-[10px] text-gray-dark border-b-[1px] hover:!text-primary last:border-b-0 hover:bg-[#f4f4f4] transition ease duration-500' key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="cursor-pointer group relative ">
              <div className="flex items-center  pl-3 leading-10 hover:!text-primary">
                <p>english</p>
                <FaAngleDown className="w-3 h-3 ml-1 font-thin" />
              </div>
              <ul className="z-[99999] opacity-0 pointer-events-none group-hover:!opacity-100 group-hover:pointer-events-auto group-hover:top-[100%] duration-300 transition ease absolute bg-c-light top-[110%] shadow-sm left-0 ">
                {language.map((item, i) => <li className='!px-5 py-[10px] text-gray-dark hover:!text-primary border-b-[1px] last:border-b-0 hover:bg-[#f4f4f4] transition ease duration-500' key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}




export default Topbar