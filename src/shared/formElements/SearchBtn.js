import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBtn = ({ ...atr }) => {
  return (
    <button
      className='transition-colors bg-green-500 hover:bg-green-700 shadow-green-500/50 shadow-sm px-3 py-2 text-white rounded-md'
      {...atr}
    >
      <FontAwesomeIcon icon={faSearch} />
    </button>
  )
}

export default SearchBtn
