import React, { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import calenderIcon from '../../assets/icon/calender.svg'
import 'react-datepicker/dist/react-datepicker.css'

const DateSelect = ({ blue, id = '', label, placeholder }) => {
  const [startDate, setStartDate] = useState()
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      className={`${
        blue ? 'bg-secondary-100/40' : ' shadow-3xl-extend'
      } py-[9px] px-2 transition rounded-md border border-transparent flex items-center justify-between`}
      onClick={onClick}
      ref={ref}
    >
      <div className='select-none'>{value ? value : placeholder}</div>
      <div>
        <img src={calenderIcon} alt='Calender' />
      </div>
    </div>
  ))
  return (
    <div className='h-full w-full z-10  flex flex-col '>
      {blue && (
        <label className='truncate mb-1' htmlFor={id}>
          {label}
        </label>
      )}
      <DatePicker
      dateFormat='dd/MM/yyyy'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
        popperClassName='z-20'
      />
    </div>
  )
}

export default DateSelect
