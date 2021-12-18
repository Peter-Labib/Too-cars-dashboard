import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavItem = ({ linkData, subMenu }) => {
  const { name, icon } = linkData
  console.log('NavItem')
  return (
    <div
      className={`flex items-center transition cursor-pointer ${
        subMenu ? 'px-12' : 'px-4'
      } py-3 hover:text-white hover:bg-main`}
    >
      <FontAwesomeIcon className='transition' icon={icon} />
      <p className='px-3 flex-grow whitespace-nowrap transition'>{name}</p>
    </div>
  )
}

export default NavItem
