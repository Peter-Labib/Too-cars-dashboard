import React from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../../shared/components/Table'

const RejectedTrips = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p className='title-added'>{t('Rejected trips')}</p>
      <Table head={[t('Id'), t('Trip number'), t('status'), t('Created at')]} />
    </div>
  )
}

export default RejectedTrips
