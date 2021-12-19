import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ResetBtn = ({ onClick }) => {
  return (
    <button
      className='transition-colors bg-red-500 hover:bg-red-700 px-3.5 py-2 shadow-sm shadow-red-500/50  text-white rounded-md'
      onClick={onClick}
      type='reset'
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  )
}

export default ResetBtn
