import React from 'react'

const Input = React.forwardRef(
  (
    { onChange, label, value = '', id, error = '', classes = '', blue, ...atr },
    ref
  ) => {
    return (
      <div className='h-full w-full z-10 flex flex-col'>
        {blue && (
          <label className='truncate mb-1' htmlFor={id}>
            {label}
          </label>
        )}
        <input
          className={`${classes} py-2.5 px-2 transition placeholder:text-gray-500  ${
            blue ? 'bg-secondary-100/40' : ' shadow-3xl-extend'
          }  rounded-md border  focus:outline-none border-transparent  ${
            error ? 'border-red-500' : 'focus:border-main'
          }  `}
          // value={value}
          ref={ref}
          onChange={onChange}
          id={id}
          {...atr}
        />
        <p className='error-text pt-[3px]'>{error}</p>
      </div>
    )
  }
)

export default Input
