import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Section from '../../shared/components/Section'
import acceptanceIcon from '../../assets/icon/acceptance.svg'

const CaptinStatus = ({ state, rate = 0, acceptance = 0 }) => {
  const { t } = useTranslation()

  const InfoCard = ({ title, children }) => (
    <div className='shadow-3xl-extend rounded-lg flex flex-col p-2  '>
      <p className='truncate text-sm pb-2'>{title}</p>
      {children}
    </div>
  )

  return (
    <div className='grid grid-cols-2 md:grid-cols-3  gap-4 shadowed-container-added w-full p-4'>
      <InfoCard title={t('User Status')}>
        <p className='text-main font-semibold truncate'>Suspend</p>
      </InfoCard>
      <InfoCard title={t('Rating')}>
        {
          <div className='flex gap-x-1 items-center mx-auto'>
            <span className='text-main font-semibold'>{rate}</span>
            <FontAwesomeIcon icon={faStar} color='#FFD80C' />
          </div>
        }
      </InfoCard>
      <InfoCard title={t('Acceptance Rate')}>
        {
          <div className='mx-auto'>
            <p className='inline-block pr-1 float-left text-main font-semibold'>
              {acceptance}
            </p>
            <img
              className='align-middle inline-block'
              src={acceptanceIcon}
              alt='percentag'
            />
          </div>
        }
      </InfoCard>
      <InfoCard title={t('Created at')}>
        <p className='text-main font-semibold truncate'>15/6/2021</p>
      </InfoCard>
      <InfoCard title={t('Last update')}>
        <p className='text-main font-semibold truncate'>15/6/2021</p>
      </InfoCard>
      <InfoCard title={t('Balance')}>
        <p className='text-main font-semibold truncate'>0</p>
      </InfoCard>
      <InfoCard title={t('Reject times')}>
        <p className='text-main font-semibold truncate'>0</p>
      </InfoCard>
      <InfoCard title={t('Refferal code for drivers')}>
        <p className='text-main font-semibold truncate'>35d9812</p>
      </InfoCard>
      <InfoCard title={t('Refferal code for pessengers')}>
        <p className='text-main font-semibold truncate'>35d9812</p>
      </InfoCard>
      <InfoCard title={t('Car type')}>
        <p className='text-main font-semibold truncate'>Nissan</p>
      </InfoCard>
      <InfoCard title={t('Activation code')}>
        <p className='text-main font-semibold truncate'>35d9812</p>
      </InfoCard>
      <InfoCard title={t('Mobile type')}>
        <p className='text-main font-semibold truncate'>android samsung</p>
      </InfoCard>
    </div>
  )
}

export default CaptinStatus
