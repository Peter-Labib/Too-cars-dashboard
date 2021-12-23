import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faWifi, faCar } from '@fortawesome/free-solid-svg-icons'
import Section from '../../shared/components/Section'
import DetailCard from '../../shared/components/DetailCard'
import HomePieChart from '../HomePieChart'
import icon from '../../assets/icon/users.svg'

const OsUsersCount = ({ color, os, count }) => (
  <div className='flex gap-x-1 items-center'>
    <div
      className='rounded-full'
      style={{ background: color, height: '.8rem', width: '.8rem' }}
    ></div>
    <span className='text-sm'>{os}</span>
    <span className='font-semibold'>{count}</span>
  </div>
)

const Home = () => {
  const { t } = useTranslation()
  return (
    <div className='grid grid-cols-6 gap-x-4'>
      {/* first col */}
      <div className='col-span-6 md:col-span-3 lg:col-span-2 '>
        <Section title={t('Drivers Egypt')} titleCentered>
          <div className='grid grid-cols-2 gap-x-2 gap-y-4 pb-4 px-4'>
            <DetailCard
              textColor='text-[#00BA3F]'
              count='45484'
              countsFor={t('Mobile and Admin Active')}
            />
            <DetailCard
              textColor='text-[#FC3030]'
              count='45484'
              countsFor={t('Admin Inactive')}
            />
            <DetailCard count='45484' countsFor={t('Admin Suspend')} />
            <DetailCard count='45484' countsFor={t('Admin Under Revision')} />
            <DetailCard
              count='45484'
              countsFor={t('Admin Waiting approval')}
            />
          </div>
        </Section>
      </div>
      {/* third col */}
      <div className='col-span-6 md:col-span-3 lg:col-span-2 self-start flex flex-col gap-y-4 lg:gap-y-8 mb-4'>
        <Section title={t('Pessengers Egypt')} titleCentered>
          <div className='grid grid-cols-2 gap-x-2 gap-y-4  pb-4 px-4'>
            <DetailCard
              textColor='text-green--extended'
              count='45484'
              countsFor={t('Mobile Active')}
            />
            <DetailCard
              textColor='text-purple--extended'
              count='45484'
              countsFor={t('Mobile Inactive')}
            />
            <DetailCard
              textColor='text-black--extended'
              count='45484'
              countsFor={t('Suspend')}
            />
          </div>
        </Section>
        <Section title={t('Supervisors Trips')} titleCentered>
          <div className='grid grid-cols-2 gap-x-2 gap-y-4  pb-4 px-4'>
            <DetailCard
              textColor='text-red--extended'
              count='45484'
              countsFor={t('Busy')}
            />
            <DetailCard
              textColor='text-green--extended'
              count='45484'
              countsFor={t('Today Paid Trips')}
            />
          </div>
        </Section>
      </div>

      {/* all users circule */}
      <div className='col-span-6 md:col-span-3 lg:col-span-2 flex flex-col  lg:self-start gap-y-4 lg:gap-y-8 '>
        <div className='shadowed-container-added overflow-hidden flex flex-col gap-y-7 items-center mb-4 p-2'>
          <div className='flex gap-x-2 '>
            <span>
              <img src={icon} alt='users' />
            </span>
            <span className='font-semibold'>{t('All Users')}</span>
            <span className='text-main font-semibold'>64128</span>
          </div>
          <div className='flex gap-x-2'>
            <OsUsersCount color='#60A0FF' os={t('Android')} count='15887' />
            <OsUsersCount color='#FF6161' os={t('Iphone')} count='15887' />
            <OsUsersCount color='#00BB40' os={t('Web')} count='15887' />
          </div>
          <div className='w-full relative h-44'>
            <div
              className='w-32 grid place-items-center rounded-full absolute opacity-70'
              style={{
                background:
                  'linear-gradient(195.26deg, #60A0FF 23.55%, #3C43FF 90.31%)',
                boxShadow: '0px 22.1736px 43.3616px rgba(192, 0, 240, 0.2)',
                height: '8rem',
                top: '0',
                left: '38%',
              }}
            >
              <span className='text-white'>8000</span>
            </div>
            <div
              className='w-24 grid place-items-center rounded-full absolute opacity-70'
              style={{
                background:
                  'linear-gradient(89.54deg, #FF6161 0.46%, #FF0000 118.27%)',
                boxShadow: '0px 17.2461px 24.6373px rgba(104, 208, 215, 0.1)',
                height: '6rem',
                top: '28%',
                left: '14%',
              }}
            >
              <span className='text-white'>8000</span>
            </div>
            <div
              className='w-16 grid place-items-center rounded-full absolute opacity-70'
              style={{
                background:
                  'linear-gradient(329.04deg, #00BB40 34.42%, #10C659 99.58%)',
                boxShadow: '0px 17.7389px 18.7243px rgba(198, 107, 0, 0.05)',
                height: '4rem',
                top: '60%',
                left: '34%',
              }}
            >
              <span className='text-white'>8000</span>
            </div>
          </div>
          {/* <HomePieChart /> */}
        </div>
        <div className='shadowed-container-added '>
          <div className='flex items-center transition hover:bg-secondary hover:text-main cursor-pointer font-semibold justify-between px-12 py-3'>
            <p className='px-8'>{t('mobile types')}</p>
            <span className='px-1'>
              <FontAwesomeIcon icon={faMobileAlt} />
            </span>
          </div>
          <div className='flex items-center transition hover:bg-secondary hover:text-main cursor-pointer font-semibold justify-between px-12 py-3'>
            <p className='px-8'>{t('networks types')}</p>
            <span className=''>
              <FontAwesomeIcon icon={faWifi} />
            </span>
          </div>
          <div className='flex items-center transition hover:bg-secondary hover:text-main cursor-pointer font-semibold justify-between px-12 py-3'>
            <p className='px-8'>{t('car types')}</p>
            <span className=''>
              <FontAwesomeIcon icon={faCar} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
