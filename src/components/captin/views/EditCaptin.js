import React from 'react'
import EditCaptinRouteBox from '../EditCaptinRouteBox'
import EditCaptinMainData from '../EditCaptinMainData'
import CaptinStatus from '../CaptinStatus'
import EditCpatinCar from '../EditCpatinCar'
import BillCycle from '../BillCycle'
import CaptinLicense from '../CaptinLicense'
import BankAccount from '../BankAccount'
import RejectedTrips from '../RejectedTrips'

const EditCaptin = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-x-4'>
        <div className='flex flex-col gap-y-4 lg:gap-y-6  flex-grow '>
          <EditCaptinMainData />
          <div>
            <BankAccount />
          </div>
          <div>
            <CaptinLicense />
          </div>
        </div>
        <div className='flex flex-col gap-y-4 lg:gap-y-6 max-w-[400px] '>
          <EditCaptinRouteBox />
          <CaptinStatus />
          <EditCpatinCar />
        </div>
        <div></div>
      </div>
      <div className='mt-6'>
        <RejectedTrips />
      </div>
      <div className='mt-6'>
        <BillCycle />
      </div>
    </div>
  )
}

export default EditCaptin
