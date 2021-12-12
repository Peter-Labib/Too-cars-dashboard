import React from 'react'
import Select from 'react-select'

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderWidth: 0,
    boxShadow: '0px 14.3425px 47.8082px rgba(160, 163, 189, 0.3)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#0086E1',
  }),
}

const DropDownSelect = ({ placeholder = '' }) => {
  return (
    <div className='w-full'>
      <Select placeholder={placeholder} styles={customStyles} />
    </div>
  )
}

export default DropDownSelect
