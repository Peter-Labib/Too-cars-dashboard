import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import editIcon from '../../assets/icon/edit.svg'
import chatIcon from '../../assets/icon/chat.svg'

const Table = ({ body = [], head = [], chat, edit }) => {
  return (
    <table className='table-auto overflow-x-auto block md:inline-table lg:w-full'>
      <thead className='bg-main/5'>
        <tr className=' bg-secondary border-b border-gray-300'>
          {head.map((item) => (
            <th key={uuidv4()} className='px-4 py-4'>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='border border-gray-200'>
        {body.map((item) => (
          <tr
            key={uuidv4()}
            className='border-b border-gray-200 text-sm text-gray-800'
          >
            <td className='py-2 px-4'>{item.tripNumb}</td>
            <td className='py-2 px-4'> {item.city}</td>
            <td className='py-2 px-4'> {item.client}</td>
            <td className='py-2 px-4'> {item.status}</td>
            <td className='py-2 px-4'> {item.createdAt}</td>
            <td className='py-2 px-4'> {item.car}</td>
            <td className='py-2 px-4'> {item.distance}</td>
            {edit && (
              <td className='py-2 px-4'>
                <div className='mx-auto max-w-max cursor-pointer'>
                  <img src={editIcon} alt='edit' />
                </div>
              </td>
            )}
            {chat && (
              <td className='p-2 '>
                <div className='mx-auto max-w-max cursor-pointer'>
                  <img src={chatIcon} alt='chat' />
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
