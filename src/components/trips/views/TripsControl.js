import React from 'react'
import { strings } from '../../../Localization/languages'
// import DropDownSelect from '../../shared/ui/DropDownSelect'
import Table from '../../../shared/components/Table'
import Input from '../../../shared/formElements/Input'
import DropSelectW from '../../../shared/formElements/DropSelectW/DropSelectW'
import DetailCard from '../../../shared/components/DetailCard'
import SearchBtn from '../../../shared/formElements/SearchBtn'
import ResetBtn from '../../../shared/formElements/ResetBtn'

const TripsControl = () => {
  return (
    <div className='max-w-[300px] md:max-w-none'>
      <p className='title-added'>{strings.TripsControl}</p>
      <div className='grid md:grid-cols-5 lg:grid-cols-10 gap-2'>
        <DetailCard count='500 ' countsFor={strings.CaptinWaiting} />
        <DetailCard count='500 ' countsFor={strings.ClientCancelTrip} />
        <DetailCard count='500 ' countsFor={strings.CaptinAcceptence} />
        <DetailCard count='500 ' countsFor={strings.CaptinCancelTrip} />
        <DetailCard count='500 ' countsFor={strings.CaptinArrived} />
        <DetailCard count='500 ' countsFor={strings.TripBegin} />
        <DetailCard count='500 ' countsFor={strings.Completed} />
        <DetailCard count='500 ' countsFor={strings.Paid} />
        <DetailCard count='500 ' countsFor={strings.NoCaptin} />
        <DetailCard count='500 ' countsFor={strings.Total} />
      </div>
      <form className='py-4 mb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2 mb-4'>
          {/* <DropDownSelect placeholder={strings.City} /> */}

          <DropSelectW placeholder={strings.City} />
          <DropSelectW placeholder={strings.Agency} />
          <DropSelectW placeholder={strings.CarType} />
          <DropSelectW placeholder={strings.CarModel} />
          <DropSelectW placeholder={strings.Status} />
          <DropSelectW placeholder={strings.ReasonOfCancelation} />
          <Input placeholder={strings.AddressFrom} type='text' />
          <Input placeholder={strings.AddressTo} type='text' />
          <DropSelectW placeholder={strings.Client} />
          <DropSelectW placeholder={strings.Captin} />
          <DropSelectW placeholder={strings.Promo} />
          <Input placeholder={strings.MaxDistance} />
        </div>
        <div className='flex gap-x-4 items-center'>
          <SearchBtn type='submit' />
          <ResetBtn />
        </div>
      </form>
      <Table
        head={[
          strings.TripNumber,
          strings.City,
          strings.ClientName,
          strings.Status,
          strings.CreatedAt,
          strings.Car,
          strings.Distance,
          strings.Edit,
          strings.Chat,
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
