import React from 'react'
import { useTranslation } from 'react-i18next'
import DateSelect from '../../../shared/formElements/DateSelect'
import Dropdown from '../../../shared/formElements/Dropdown/Dropdown'
import SearchBtn from '../../../shared/formElements/SearchBtn'
// import Input from '../../shared/ui/Input'

const TripsLocations = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p className='title-added'>{t('Trips locations')}</p>

      <form className='gap-4 grid grid-cols-2 lg:grid-cols-4'>
        <Dropdown placeholder={t('City')} />
        <Dropdown placeholder={t('Status')} />
        <div className='min-w-[8rem]'>
          <DateSelect placeholder={t('from')} />
        </div>
        <DateSelect placeholder={t('to')} />
        <div className='max-w-fit'>
          <SearchBtn />
        </div>
      </form>
      <div className='mt-16 overflow-x-auto mx-auto shadow-3xl-extend lg:overflow-x-hidden my-16 max-w-[93vw]'>
        <table className='table-auto  rounded-md divide-y lg:w-fit'>
          <tr>
            <th className='py-2.5 px-4'>{t('Hours')}</th>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              00
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              01
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              02
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              03
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              04
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              05
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              06
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              07
            </td>
            <td className='md:inline-block border border-secondary-400 px-3.5 py-2.5 rounded-md w-20'>
              {t('Total')}
            </td>
          </tr>
          <tr>
            <th className='py-2.5 px-4'>{t('Trips')}</th>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              00
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              01
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              02
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              03
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              04
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              02
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              02
            </td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>
              02
            </td>
            <td className='md:inline-block border border-secondary-400 px-3.5 py-2.5 rounded-md w-20'>
              20
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TripsLocations
