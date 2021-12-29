import React from 'react'
import EditCaptinRouteBox from '../EditCaptinRouteBox'
import EditCaptinMainData from '../EditCaptinMainData'
import CaptinStatus from '../CaptinStatus'
import EditCpatinCar from '../EditCpatinCar'
import BillCycle from '../BillCycle'
import CaptinLicense from '../CaptinLicense'
import BankAccount from '../BankAccount'
import RejectedTrips from '../RejectedTrips'
import Status from '../Status'

const EditCaptin = () => {
  return (
    <div>
      {/* <div className='flex flex-col lg:flex-row gap-x-4'>
        <div className='grid flex-col gap-y-4 lg:gap-y-6  flex-grow '>
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
      </div> */}

      <div className='grid gap-4 grid-cols-10 lg:grid-rows-6'>
        <div className='col-start-1 col-end-11 order-2 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-7'>
          <EditCaptinMainData />
        </div>
        <div className='col-start-1 col-end-11 order-1 lg:col-start-8 lg:col-end-11 lg:row-start-1 lg:row-end-3'>
          <EditCaptinRouteBox />
        </div>
        <div className='col-start-1 col-end-11 order-3 lg:col-start-8 lg:col-end-11 lg:row-start-3 lg:row-end-7'>
          <CaptinStatus />
        </div>
      </div>
      <div className='grid gap-x-4 gap-y-6 grid-cols-10 lg:grid-rows-5 mt-6'>
        <div className='col-start-1 col-end-11 order-2 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-3'>
          <BankAccount />
        </div>
        <div className='col-start-1 col-end-11 order-3 lg:col-start-8 lg:col-end-11 lg:row-start-1 lg:row-end-3'>
          <EditCpatinCar />
        </div>
        <div className='col-start-1 col-end-11 lg:col-start-8 lg:col-end-11 lg:row-start-3 lg:row-end-5'>
          <Status />
        </div>
        <div className='col-start-1 col-end-11 order-2 lg:col-start-1 lg:col-end-8 lg:row-start-2 lg:row-end-7'>
          <CaptinLicense />
        </div>
      </div>
      <div className='mt-4 lg:mt-0'>
        <RejectedTrips />
      </div>
      <div className='mt-6 lg:mt-8'>
        <BillCycle />
      </div>
    </div>
  )
}

export default EditCaptin
