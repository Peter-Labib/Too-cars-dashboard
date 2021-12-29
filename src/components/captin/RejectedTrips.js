import React from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import Table from '../../shared/components/Table'

const RejectedTrips = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p className='title-added'>{t('Rejected trips')}</p>
      {/* <Table head={[t('Id'), t('Trip number'), t('status'), t('Created at')]} /> */}
      <table className='w-full'>
        <thead>
          <tr>
            <th>{t('Id')}</th>
            <th>{t('Trip number')}</th>
            <th>{t('status')}</th>
            <th>{t('Created at')}</th>
          </tr>
        </thead>
        <tbody className='border border-gray-200'>
          {[0, 0, 0, 0, 0, 0].map(() => (
            <tr  key={uuidv4()}>
              <td className='py-2'>12548</td>
              <td className='py-2'>84942</td>
              <td className='py-2'>Rejected</td>
              <td className='py-2'>7:00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RejectedTrips
