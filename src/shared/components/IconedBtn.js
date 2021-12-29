import React from 'react'

const IconedBtn = ({ title, icon }) => {
  return (
    <div className='transition-shadow rounded-lg  flex items-center gap-x-4 px-4 py-3 bg-sky-100/40 shadow-md shadow-sky-100/20 hover:bg-sky-100/80 cursor-pointer'>
      <div>
        <img src={icon} alt='icon' />
      </div>
      <p className=' whitespace-nowrap'>{title}</p>
    </div>
  )
}

export default IconedBtn
