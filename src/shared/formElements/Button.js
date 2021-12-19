import React, { useState } from 'react'

const Button = ({ login, children, errors, ...atr }) => {
  const [errorAnimation, setErrorAnimation] = useState(false)
  React.useEffect(() => {
    console.log('error', errors)
  }, [errors])

  const onClickHandler = () => {
    if (Object.keys(errors).length > 0) {
      setErrorAnimation(true)
    } else {
      setErrorAnimation(false)
    }
    console.log('cerror', errors)
  }

  return (
    <button
      className={`${login ? 'py-2 w-full' : 'py-1'} ${
        errorAnimation
          ? 'animate-buzz bg-red-600 hover:bg-red-700'
          : 'bg-main/90 hover:bg-main'
      } transition text-white bg-main rounded-3xl px-6`}
      {...atr}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}

export default Button
