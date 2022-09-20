import React, { useEffect, useImperativeHandle, useRef } from 'react'
import { FaAngleDown } from 'react-icons/fa'

const Dropdown = ({renderHeader, renderBody, value, activeHead, activeContent, onClick, style={header: '', text: ''} }, ref) => {
  const toggleRef = useRef(null)
  const contentRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      turnOffEvent: () => {
        const isActive = contentRef.current.classList.contains('active')
        contentRef.current.classList.toggle('pointer-events-none', !isActive)
      }
    }
  }, [])

  useEffect(() => {
    if(toggleRef && contentRef) {
      document.addEventListener('mousedown', e => {
        if(toggleRef.current.contains(e.target) ) {
          contentRef.current.classList.toggle('active')
          const isActive = contentRef.current.classList.contains('active')
          if(isActive) contentRef.current.classList.remove('pointer-events-none')
        } else {
          if(!contentRef.current.contains(e.target)) {
            contentRef.current.classList.remove('active')
            contentRef.current.classList.add('pointer-events-none')
          } 
        }

        
      })
    }

    return () => document.removeEventListener('mousedown', () => {})
  }, [toggleRef, contentRef])


  return (
    <div ref={toggleRef}  className='dropdownCustom'>
        {renderHeader ? renderHeader() : 
            <div className={`flex items-center cursor-pointer w-auto ${style.header}`} onClick={onClick}>
                <p className={`${style.text} ${activeHead ? '!text-primary': ''}`}>{value}</p>
                <FaAngleDown className="ml-2 w-3 h-3"/>
            </div>
        }
        <div ref={contentRef} className={`test z-[999999] absolute default-transition  opacity-0 left-0 right-0 bg-white top-[120%] shadow-sm `}>
          {renderBody && renderBody()}
        </div>
    </div>
  )
}

export default React.forwardRef(Dropdown)

