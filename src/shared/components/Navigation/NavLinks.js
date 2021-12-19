import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { Link } from 'react-router-dom'
import DropdownNavItem from './DropdownNavItem'
import links from '../../../routes/links'
import NavItem from './NavItem'
import homeIcon from '../../../assets/icon/home.svg'

const NavLinks = () => {
    return (
        <React.Fragment>
        <Link to='' className='flex bg-gray-100  text-black px-4 py-2 items-center'>
        <div>
          <img src={homeIcon} alt='home' />
        </div>
        <div className='px-2'>Home</div>
      </Link>
      <div className='py-3'>
        {links.map((link, i) =>
          link.children.length > 0 ? (
            <DropdownNavItem key={uuidv4()} linkData={link} />
          ) : (
            <NavItem key={uuidv4()} linkData={link} />
          )
        )}
      </div>
      </React.Fragment>
    )
}

export default NavLinks
