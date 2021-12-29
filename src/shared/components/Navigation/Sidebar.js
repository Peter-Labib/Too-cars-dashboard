import React, { useState } from 'react'

const Sidebar = React.memo(({children}) => {
  return (
    <nav className='w-full text-main'>
      {children}
    </nav>
  )
})

export default Sidebar
