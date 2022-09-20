import React, { useRef, useState } from 'react'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Dropdown from '../../UI/Dropdown'

const pages = [
  {
    id: Math.random().toString(36).substr(2, 9),
    name: 'home'
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: 'categories',
    items: [
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
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: 'our blog'
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: 'faq'
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: 'contact us'
  },
]

const social = [
  {
    id: Math.random().toString(36).substr(2, 9),
    icon: <FaFacebookF className="w-[14px] h-[14px]" />,
    url: 'https://www.facebook.com'
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    icon: <FaGooglePlusG className="w-[20px] h-[20px]" />,
    url: 'https://www.facebook.com'
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    icon: <FaTwitter className="w-[14px] h-[14px]" />,
    url: 'https://www.facebook.com'
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    icon: <FaLinkedinIn className="w-[14px] h-[14px]" />,
    url: 'https://www.facebook.com'
  },
]

const renderBody = (items,  handleOnClick) => { 
  return ( 
      <ul>
          {items.map(item => <li onClick={() => handleOnClick(item)} className='capitalize font-medium default-transition px-4 hover:!text-primary cursor-pointer text-sm py-2 ' key={item.id}>{item.name}</li>)}
      </ul>
  )
}

const Nav = () => {
  
  const [category, setCategory] = useState('Categories');

  const modelRef = useRef()

  const handleOnClick = (item) => {
    setCategory(item.name)
    modelRef.current.turnOffEvent()
  }


  return (
    <div className="border-b border-c-1 ">
      <Container>
        <div className="flex items-center justify-between md:flex-col lg:flex-row leading-[78px]">
          {/* nav */}
          <ul className="flex relative">
            {pages.map( item => {
              if(item.items) {
                return (<li className="uppercase px-[14px] text-13 font-bold  " key={item.id}>
                      <Dropdown value={item.name} ref={modelRef} renderBody={() => renderBody(item.items, handleOnClick)} />
                  </li>)
              }
              return (
                <li className="uppercase px-[14px] text-13 font-bold " key={item.id}><Link to={'/'}>{item.name}</Link></li>
              )
            })}
          </ul>

          {/* social  */}
          <ul className="flex items-center md:!pt-4 lg:!pt-0">
            {social.map(item => <li key={item.id} className="px-[14px]"><a href={item.url}>{item.icon}</a></li>)}
          </ul>
        </div>
      </Container>
    </div>
  )
}


export default Nav