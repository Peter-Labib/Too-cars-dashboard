import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppContainer from './components/AppContainer'
import Login from './components/views/Login'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<AppContainer />} />
        </Routes>
      </React.Fragment>
    )
  }
}

export default App
