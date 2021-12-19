import React from 'react'

const IconedInput = React.forwardRef(
  (
    {
      onChange,
      label,
    //   value = '',
      children,
      id,
      name,
      error = '',
      classes = '',
      ...atr
    },
    ref
  ) => {
    return (
      <div className='input-container-main-data-added'>
        <label className='truncate' htmlFor={id}>
          {label}
        </label>
        <div
          className={`flex border border-transparent  bg-secondary rounded-md overflow-hidden transition ${
            error
              ? ''
              : 'focus-within:border-main'
          } `}
        >
          <div className='w-full'>
            <input
              className='w-full bg-secondary-100/40 outline-none p-2'
              {...atr}
              id={id}
              ref={ref}
              onChange={onChange}
              name={name}
            />
          </div>
          <div className='bg-secondary-100/40 flex items-center px-2'>{children}</div>
        </div>
        <p className='error-text'>{error}</p>
      </div>
    )
  }
)

export default IconedInput
