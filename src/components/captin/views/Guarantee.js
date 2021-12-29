import React from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import IconedBtn from '../../../shared/components/IconedBtn'
import plusIcon from '../../../assets/icon/plus-green.svg'
import editIcon from '../../../assets/icon/edit.svg'

const Guarantee = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='title-added'>{t('Guarantee')}</p>
        <div>
          <IconedBtn title={t('Add guarantee')} icon={plusIcon} />
        </div>
      </div>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>{t('Guarantee name')}</th>
              <th>{t('City')}</th>
              <th>{t('Guarantee hours count')}</th>
              <th>{t('Guarantee acceptance rate')}</th>
              <th>{t('From')}</th>
              <th>{t('To')}</th>
              <th>{t('Price')}</th>
              <th>{t('Drivers in guarantee')}</th>
              <th>{t('Edit')}</th>
            </tr>
          </thead>
          <tbody className='border border-gray-200'>
            {[0, 0, 0, 0, 0].map(() => (
              <tr key={uuidv4()}>
                <td className='py-2'>first</td>
                <td className='py-2'>new cairo</td>
                <td className='py-2'>7</td>
                <td className='py-2'>95</td>
                <td className='py-2'>7:00</td>
                <td className='py-2'>9:00</td>
                <td className='py-2'>0</td>
                <td className='py-2'>0</td>
                <td className='py-2'>
                    <img src={editIcon} alt='edit' className='mx-auto cursor-pointer' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Guarantee
