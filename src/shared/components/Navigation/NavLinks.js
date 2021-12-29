import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DropdownNavItem from './DropdownNavItem'
import NavItem from './NavItem'
import homeIcon from '../../../assets/icon/home.svg'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

const NavLinks = () => {
  const { t } = useTranslation()

  const links = [
    {
      name: t('Captins'),
      icon: faFlag,
      children: [
        {
          name: t('Captin Control'),
          path: '/captin-control',
          icon: faFlag,
        },
        {
          name: t('Captin Edit'),
          path: '/captin-edit',
          icon: faFlag,
        },
        {
          name: t('Guarantee'),
          path: '/guarantee',
          icon: faFlag,
        },
      ],
    },
    {
      name: t('Trips'),
      icon: faFlag,
      children: [
        {
          name: t('Trips Control'),
          path: 'trips-control',
          icon: faFlag,
        },
        {
          name: t('Trips Location'),
          path: 'trips-locations',
          icon: faFlag,
        },
      ],
    },
    {
      name: 'Trips',
      icon: faFlag,
      children: [
        {
          name: 'first',
          path: 'page',
          icon: faFlag,
        },
      ],
    },
    {
      name: 'pages',
      path: 'page',
      icon: faFlag,
    },
    {
      name: 'offers',
      path: 'page',
      icon: faFlag,
    },
  ]

  return (
    <React.Fragment>
      <Link
        to='/'
        className='flex bg-gray-100  text-black px-4 py-2 items-center'
      >
        <div>
          <img src={homeIcon} alt='home' />
        </div>
        <div className='px-2'>Home</div>
      </Link>
      <div className='py-3'>
        {links.map((link, i) =>
          link.children?.length > 0 ? (
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
