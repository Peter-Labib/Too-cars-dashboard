import React from 'react'
import Select from 'react-select'
import './DropSelectW.scss'

// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     borderWidth: 0,
//     boxShadow: '0px 14.3425px 47.8082px rgba(160, 163, 189, 0.3)',
//     width: '100%',
//   }),
//   indicatorSeparator: () => ({
//     display: 'none',
//   }),
//   dropdownIndicator: (provided) => ({
//     ...provided,
//     color: '#0086E1',
//   }),
// }

// const customBlueStyles = {
//   control: (provided) => ({
//     ...provided,
//     borderWidth: 0,
//     width: '100%',
//     background: '#F3FAFF',
//   }),
//   indicatorSeparator: () => ({
//     display: 'none',
//   }),
//   dropdownIndicator: (provided) => ({
//     ...provided,
//     color: '#0086E1',
//   }),
// }

// const errorStyles = {
//   control: (provided) => ({
//     ...provided,
//     padding: '1rem',
//   }),
// }

const DropSelectW = React.forwardRef(
  (
    {
      placeholder = '',
      label = '',
      id,
      name,
      blue,
      error,
      onChange,
      options = [],
      value,
    },
    ref
  ) => {
    const onChangeHandler = (e) => {
      const val = e.value
      onChange(val)
    }

    return (
      <div className='w-full'>
        {blue && (
          <label htmlFor={id} className='mb-1 inline-block'>
            {label}
          </label>
        )}
        <Select
          classNamePrefix='custom-select_container'
          className={`${blue ? 'select--blue' : ''} ${
            error ? 'error' : ''
          } custom-select`}
          placeholder={placeholder}
          // styles={blue ? customBlueStyles : customStyles}
          instanceId={id}
          ref={ref}
          onChange={onChangeHandler}
          options={options}
          name={name}
          value={value?.value}
        />
        <p className='error-text pt-[3px]'>{error}</p>
      </div>
    )
  }
)

export default DropSelectW
