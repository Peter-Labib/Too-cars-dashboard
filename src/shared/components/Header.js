import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/img/too-logo-1.png'
import icon from '../../assets/img/icon.png'
import egyptIcon from '../../assets/icon/egypt.svg'
import usaIcon from '../../assets/icon/usa.svg'

const Header = ({ avatar = icon, toggle }) => {
  const { t, i18n } = useTranslation()

  const toogleLanguageHandler = (val) => {
    i18n.changeLanguage(val)
    document.documentElement.dir = i18n.dir()
    document.documentElement.lang = i18n.language
  }

  const LanguageSelectElment = ({ lang, val, icon }) => (
    <li
      className=' flex items-center gap-x-2 p-1 hover:bg-main/10 transition'
      onClick={() => toogleLanguageHandler(val)}
    >
      <div className='w-4 flex-none hidden md:block'>
        <img src={icon} alt={val} className='w-full' />
      </div>
      <p className=''>{lang}</p>
    </li>
  )

  return (
    <header className='h-16 flex px-4 lg:px-8 bg-main text-white gap-x-3 items-center mb-4'>
      <Link to='/' className='lg:mx-4 max-h-full text-center'>
        <div className='w-2/6 mx-auto'>
          <img className='object-cover w-full' src={logo} alt='logo' />
        </div>
        <p className=''>{t('Dashboard')}</p>
      </Link>
      <button className='p-1 mx-1' onClick={toggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className='hidden lg:block gab-x-2 divide-x-2 divide-white'>
        <span className='px-2'>Home</span>
        <span className='px-2'>Control</span>
      </div>
      <div className='flex-grow'></div>
      <div className='flex gap-x-2 items-center rtl:flex-row-reverse'>
        <div className='rounded-full w-10 overflow-hidden'>
          <img className='object-cover w-full' src={avatar} alt='avatar' />
        </div>
        <div className='hidden lg:block'>
          <p className='text-sm'>peter labib</p>
          <p className='text-[0.65rem]'>peter.adel.labib@gmail.com</p>
        </div>
      </div>
      {/* <button
        className='bg-white text-main px-2 rounded-lg'
        onClick={toogleLanguageHandler}
      >
        {strings.getLanguage() === 'en' ? 'ar' : 'en'}
      </button> */}
      <div className='relative cursor-pointer group'>
        <div className='flex'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <ul className='absolute transition-all -right-[150%]  top-[170%] w-[70px] scale-0 opacity-0 group-hover:scale-100 group-hover:top-[110%] group-hover:opacity-100 h-auto min-w-full bg-white rounded-sm z-20 text-main text-xs shadow-md '>
          <LanguageSelectElment lang='العربية' val='ar' icon={egyptIcon} />
          <LanguageSelectElment lang='English' val='en' icon={usaIcon} />
        </ul>
      </div>
    </header>
  )
}

export default Header
