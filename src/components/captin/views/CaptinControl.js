import React from 'react'
import CountUp from 'react-countup'
import { strings } from '../../../Localization/languages'
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
      <p className='title-added'>{strings.CaptinControl}</p>
      <div className='grid grid-cols-4 text-center mt-4 gap-x-2 lg:gap-x-3 w-fit'>
        <Card title={strings.Total} count={14500} />
        <Card title={strings.Android} count={500} />
        <Card title={strings.Iphone} count={500} />
        <Card title={strings.Web} count={500} />
      </div>

      <CaptinControlForm />

      <div className='overflow-x-auto mx-auto lg:overflow-x-hidden my-16 max-w-[93vw]'>
        <table className=' table-auto w-full'>
          <thead>
            <tr>
              <th>{strings.Name}</th>
              <th>{strings.Status}</th>
              <th>{strings.Trips}</th>
              <th>{strings.Agency}</th>
              <th>{strings.Cash}</th>
              <th>{strings.RegisteredBy}</th>
              <th>{strings.Balance}</th>
              <th>{strings.Distance}</th>
              <th>{strings.Control}</th>
            </tr>
          </thead>
          <tbody className='border border-gray-200'>
            {data.map((dat, i) => (
              <tr key={i}>
                <td>
                  <p className='text-main text-sm font-semibold'>{dat.name}</p>
                  <p className='text-xs'>{dat.city}</p>
                  <p className='text-xs'>{dat.mobile}</p>
                </td>
                <td>{dat.status}</td>
                <td>{dat.trips}</td>
                <td>{dat.agency}</td>
                <td>{dat.cash}</td>
                <td>{dat.register}</td>
                <td>{dat.balance}</td>
                <td>{dat.distance}</td>
                <td>
                  <div className='flex flex-wrap justify-evenly py-1 gap-3 lg:gap-x-2'>
                    <img src={distanceIcon} alt='distance' />
                    <img src={editIcon} alt='edit' />
                    <img src={chatIcon} alt='chat' />
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
