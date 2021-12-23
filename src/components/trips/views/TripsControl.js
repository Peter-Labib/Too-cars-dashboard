import React from 'react'
import { useTranslation } from 'react-i18next'
// import DropDownSelect from '../../shared/ui/DropDownSelect'
import Table from '../../../shared/components/Table'
import Input from '../../../shared/formElements/Input'
import DropSelectW from '../../../shared/formElements/DropSelectW/DropSelectW'
import DetailCard from '../../../shared/components/DetailCard'
import SearchBtn from '../../../shared/formElements/SearchBtn'
import ResetBtn from '../../../shared/formElements/ResetBtn'

const TripsControl = () => {
  const { t } = useTranslation()

  return (
    <div className='max-w-[300px] md:max-w-none'>
      <p className='title-added'>{t('Trips Control')}</p>
      <div className='grid md:grid-cols-5 lg:grid-cols-10 gap-2'>
        <DetailCard count='500 ' countsFor={t('Captin waiting')} />
        <DetailCard count='500 ' countsFor={t('Client cancel trip')} />
        <DetailCard count='500 ' countsFor={t('Captin Acceptance')} />
        <DetailCard count='500 ' countsFor={t('Captin cancel trip')} />
        <DetailCard count='500 ' countsFor={t('Captin arrived')} />
        <DetailCard count='500 ' countsFor={t('Trip begin')} />
        <DetailCard count='500 ' countsFor={t('completed')} />
        <DetailCard count='500 ' countsFor={t('Paid')} />
        <DetailCard count='500 ' countsFor={t('No captin')} />
        <DetailCard count='500 ' countsFor={t('Total')} />
      </div>
      <form className='py-4 mb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2 mb-4'>
          {/* <DropDownSelect placeholder={strings.City} /> */}

          <DropSelectW placeholder={t('City')} />
          <DropSelectW placeholder={t('Agency')} />
          <DropSelectW placeholder={t('Car type')} />
          <DropSelectW placeholder={t('Car model')} />
          <DropSelectW placeholder={t('Status')} />
          <DropSelectW placeholder={t('Reason of cancellation')} />
          <Input placeholder={t('Address from')} type='text' />
          <Input placeholder={t('Address to')} type='text' />
          <DropSelectW placeholder={t('Client')} />
          <DropSelectW placeholder={t('Captin')} />
          <DropSelectW placeholder={t('Promo')} />
          <Input placeholder={t('Max distance')} />
        </div>
        <div className='flex gap-x-4 items-center'>
          <SearchBtn type='submit' />
          <ResetBtn />
        </div>
      </form>
      <Table
        head={[
          t('Trip number'),
          t('City'),
          t('Client name'),
          t('Status'),
          t('Created at'),
          t('Car'),
          t('Distance'),
          t('Edit'),
          t('Chat'),
        ]}
        body={[
          {
            tripNumber: '1598431458',
            city: 'New York',
            client: 'ahmed',
            status: 'waiting',
            createdAt: '8/8/2021',
            car: 'verna',
            distance: '0',
          },
        ]}
        chat
        edit
      />
    </div>
  )
}

export default TripsControl
