import React from 'react'
import {strings} from '../../Localization/languages' 
import plusBlue from '../../assets/icon/plus-blue.svg'
import closeRed from '../../assets/icon/close-red.svg'
import plusGreen from '../../assets/icon/plus-green.svg'
import location from '../../assets/icon/location-blue.svg'

const CaptinRedirectButton = ({title, icon}) => (
  <div className='transition-shadow rounded-lg  flex items-center gap-x-4 px-4 py-3 bg-sky-100/40 shadow-md shadow-sky-100/20 hover:bg-sky-100/80 cursor-pointer'>
      <div>
          <img src={icon} alt='icon' />
      </div>
      <p className=' whitespace-nowrap'>{title}</p>
  </div>
)

const EditCaptinRouteBox = () => {
  return (
    <div className='w-full'>
      <p className='title-added'>{strings.EditCaptin}</p>
      <div className='grid grid-cols-2 grid-rows-2 gap-4 shadowed-container-added p-4'>
        <div className='col-span-1'>
          <CaptinRedirectButton title={strings.AddCaptin} icon={plusBlue} />
        </div>
        <div className='col-span-1'>
          <CaptinRedirectButton title={strings.AddBalance} icon={plusGreen} />
        </div>
        <div className='col-span-1'>
          <CaptinRedirectButton title={strings.Deactivate} icon={closeRed} />
        </div>
        <div className='col-span-1'>
          <CaptinRedirectButton title={strings.Trips} icon={location} />
        </div>
      </div>
    </div>
  )
}

export default EditCaptinRouteBox
