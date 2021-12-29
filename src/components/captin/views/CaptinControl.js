import React from 'react'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'
import CaptinControlForm from '../forms/CaptinControlForm'
import distanceIcon from '../../../assets/icon/distance.svg'
import editIcon from '../../../assets/icon/edit.svg'
import chatIcon from '../../../assets/icon/chat.svg'

const data = [
  {
    name: 'peter',
    city: 'cairo',
    mobile: '01010156849',
    status: 'online',
    trips: 0,
    agency: 'agency',
    cash: '00',
    register: 'direct',
    balance: '100',
    distance: '0',
  },
]

const CaptinControl = () => {
  const { t } = useTranslation()

  const Card = ({ title, count }) => (
    <div>
      <div className='px-4  py-2 lg:py-1 bg-secondary-100/50 rounded-lg'>
        <span className='text-secondary-700 font-bold text-2xl'>{count}</span>
      </div>
      <p className='pt-1.5 text-sm'>{title}</p>
    </div>
  )

  return (
    <div>
      <p className='title-added'>{t('Captin Control')}</p>
      <div className='grid grid-cols-4 text-center mt-4 gap-x-2 lg:gap-x-3 w-fit'>
        <Card title={t('Total')} count={14500} />
        <Card title={t('Android')} count={500} />
        <Card title={t('iphone')} count={500} />
        <Card title={t('Web')} count={500} />
      </div>

      <CaptinControlForm />

      <div className='table-container'>
        <table className=' table-auto w-full'>
          <thead>
            <tr>
              <th>{t('Name')}</th>
              <th>{t('Status')}</th>
              <th>{t('Trips')}</th>
              <th>{t('Agency')}</th>
              <th>{t('Cash')}</th>
              <th>{t('Registered by')}</th>
              <th>{t('Balance')}</th>
              <th>{t('Distance')}</th>
              <th>{t('Control')}</th>
            </tr>
          </thead>
          <tbody className='border border-gray-200'>
            {[0, 0, 0, 0, 0].map((i) => (
              <tr key={i}>
                <td>
                  <p className='text-main text-sm font-semibold'>peter</p>
                  <p className='text-xs'>cairo</p>
                  <p className='text-xs'>01010156849</p>
                </td>
                <td>online</td>
                <td>0</td>
                <td>agency</td>
                <td>00</td>
                <td>direct</td>
                <td>10</td>
                <td>0</td>
                <td>
                  <div className='flex flex-wrap justify-evenly py-1 gap-3 lg:gap-x-2'>
                    <img
                      src={distanceIcon}
                      alt='distance'
                      className='cursor-pointer'
                    />
                    <img src={editIcon} alt='edit' className='cursor-pointer' />
                    <img src={chatIcon} alt='chat' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CaptinControl
