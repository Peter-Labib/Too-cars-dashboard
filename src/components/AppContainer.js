import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../shared/component/Header'
import NavLinks from '../shared/component/Navigation/NavLinks'
import Sidebar from '../shared/component/Navigation/Sidebar'
import SideDrawer from '../shared/component/Navigation/SideDrawer'
import Backdrop from '../shared/ui/Backdrop'
import EditCaptin from './views/EditCaptin'
import Home from './views/Home'
import TripsControl from './views/TripsControl'
import TripsLocations from './views/TripsLocations'

import useMediaQuery from '../shared/hooks/useMediaQuery'

const AppContainer = () => {
  const [openSidebar, setopenSidebar] = useState(false)
  const isDesktop = useMediaQuery(1024)
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
      <div className={`mx-auto flex lg:gap-x-4 w-full h-full px-4`}>
        <div
          className={`hidden lg:block overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${
            openSidebar ? 'max-w-full min-w-[14rem]' : 'max-w-0 min-w-0'
          }`}
        >
          <Sidebar>
            <NavLinks />
          </Sidebar>
        </div>
        <div
          className={`flex transition-all mx-auto self-start ${
            ''
            // openSidebar ? '  max-w-min' : 'max-w-max w-3/4'
            // openSidebar ? '  max-w-min' : 'max-w-max w-3/4'
          }`}
        >
          <div className='max-w-screen-xl mx-auto'>
            <Switch>
              <Route path='/captin'>
                <EditCaptin />
              </Route>
              <Route path='/trips-locations'>
                <TripsLocations />
              </Route>
              <Route path='/trips'>
                <TripsControl />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppContainer
