import React from 'react'
import { useTranslation } from 'react-i18next'
import Input from '../../shared/formElements/Input'
import Button from '../../shared/formElements/Button'
const BankAccount = () => {
  const { t } = useTranslation()
  return (
    <div className='w-full'>
      <p className='title-added'>{t('Bank Account')}</p>
      <form className='shadowed-container-added p-4'>
        <div className='flex flex-col md:flex-row justify-evenly gap-x-8 '>
          <Input label={t('Bank Account')} blue />
          <Input label={t('Bank Name')} blue />
        </div>
        <div className='mx-auto max-w-min mt-3'>
          <Button type='submit'>{t('Submit')}</Button>
        </div>
      </form>
    </div>
  )
}

export default BankAccount
