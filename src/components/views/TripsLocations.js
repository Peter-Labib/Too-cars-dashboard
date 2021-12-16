import React from 'react'
import { strings } from '../../Localization/languages'
import DateSelect from '../../shared/ui/DateSelect'
import DropSelectW from '../../shared/ui/DropSelectW/DropSelectW'
import SearchBtn from '../../shared/ui/SearchBtn'
// import Input from '../../shared/ui/Input'

const TripsLocations = () => {
  return (
    <div>
      <p className='title-added'>{strings.TripsLocations}</p>

      <form className='gap-4 grid grid-cols-2 lg:grid-cols-4'>
        <DropSelectW placeholder={strings.City} />
        <DropSelectW placeholder={strings.Status} />
        <div className='min-w-[8rem]'>
          <DateSelect placeholder={strings.From} />
        </div>
        <DateSelect placeholder={strings.To} />
        <div className='max-w-fit'>
          <SearchBtn />
        </div>
      </form>
      <div className='mt-16'>
        <table className='table-auto overflow-x-auto shadow-3xl-extend rounded-md divide-y lg:w-fit'>
          <tr>
            <th className='py-2.5 px-4'>{strings.Hours}</th>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>00</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>01</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>02</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>03</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>04</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>05</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>06</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>07</td>
            <td className='md:inline-block border border-secondary-400 px-3.5 py-2.5 rounded-md w-20'>{strings.Total}</td>
          </tr>
          <tr>
            <th className='py-2.5 px-4'>{strings.Trips}</th>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>00</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>01</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>02</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>03</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>04</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>02</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>02</td>
            <td className='md:inline-block border border-gray-200 px-3.5 py-2.5 rounded-md mx-0.5 w-12'>02</td>
            <td className='md:inline-block border border-secondary-400 px-3.5 py-2.5 rounded-md w-20'>20</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TripsLocations
