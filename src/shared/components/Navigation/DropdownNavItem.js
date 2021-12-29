import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem'

const DropdownNavItem = ({ linkData }) => {
  const { name, icon, children } = linkData
  const [open, setOpen] = useState(false)

  const dropDownToogle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      <div
        className=' px-4 py-3 group flex items-center transition cursor-pointer group hover:bg-main w-full'
        onClick={dropDownToogle}
      >
        <div>
          <FontAwesomeIcon
            className={`transition  group-hover:text-white group-hover:drop-shadow-lg`}
            icon={icon}
          />
        </div>
        <p className='pl-3 pr-7 flex-grow group-hover:text-white whitespace-nowrap truncate'>
          {name}
        </p>
        <div
          className={`justify-self-end transition group-hover:bg-main rounded-full`}
        >
          <FontAwesomeIcon
            className={`transition transform ${
              open ? 'rotate-180' : ''
            }  group-hover:text-white group-hover:drop-shadow-lg `}
            icon={faChevronCircleDown}
          />
        </div>
      </div>
      <div
        className={`transition-all ${
          open ? 'max-h-40' : 'max-h-0'
        } overflow-hidden`}
      >
        {children.map((child) => (
          <NavItem key={uuidv4()} linkData={child} subMenu />
        ))}
      </div>
    </div>
  )
}

export default DropdownNavItem
