import React from 'react'
import { useTranslation } from 'react-i18next'

import Input from '../../shared/formElements/Input'

const Status = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p className='title-added'>{t('Status')}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 shadowed-container-added p-4'>
        <Input label={t('Busy')} blue readOnly />
        <Input label={t('Available')} blue readOnly />
        <Input label={t('Unemployed')} blue readOnly />
        <Input label={t('Total')} blue readOnly />
      </div>
    </div>
  )
}

export default Status
