import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Header from '../shared/components/Header'
import NavLinks from '../shared/components/Navigation/NavLinks'
import Sidebar from '../shared/components/Navigation/Sidebar'
import SideDrawer from '../shared/components/Navigation/SideDrawer'
import Backdrop from '../shared/formElements/Backdrop'
import Home from './views/Home'
import EditCaptin from './captin/views/EditCaptin'
import CaptinControl from './captin/views/CaptinControl'
import Guarantee from './captin/views/Guarantee'
import TripsControl from './trips/views/TripsControl'
import TripsLocations from './trips/views/TripsLocations'

const AppContainer = () => {
  const [openSidebar, setopenSidebar] = useState(false)
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })
  console.log('appContainer')

  const sidebarToogle = () => {
    setopenSidebar((prev) => !prev)
  }

  return (
    <React.Fragment>
      <Header toggle={sidebarToogle} />
      {!isDesktop && (
        <React.Fragment>
          <SideDrawer show={openSidebar}>
            <NavLinks />
          </SideDrawer>
          <Backdrop onClick={sidebarToogle} show={openSidebar} />
        </React.Fragment>
      )}
      <div className={`mx-auto flex lg:gap-x-4 w-full h-full lg:px-4`}>
        <div
          className={`hidden lg:block overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${
            openSidebar ? 'max-w-full min-w-[14rem]' : 'max-w-0 min-w-0'
          }`}
        >
          {isDesktop && (
            <Sidebar>
              <NavLinks />
            </Sidebar>
          )}
        </div>
        <div
          className={`flex transition-all mx-auto self-start ${
            ''
            // openSidebar ? '  max-w-min' : 'max-w-max w-3/4'
            // openSidebar ? '  max-w-min' : 'max-w-max w-3/4'
          }`}
        >
          <div className='max-w-screen-xl mx-auto mt-2'>
            <Routes>
              <Route path='/captin-edit' element={<EditCaptin />} />
              <Route path='/captin-control' element={<CaptinControl />} />
              <Route path='/guarantee' element={<Guarantee />} />
              <Route path='/trips-locations' element={<TripsLocations />} />
              <Route path='/trips-control' element={<TripsControl />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppContainer
