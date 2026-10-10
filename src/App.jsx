import React from 'react'
import AsideNavbar from './components/AsideNavbar'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='grid grid-cols-5 bg-white w-screen h-screen'>
      <AsideNavbar />
      <HomePage />
    </div>
  )
}

export default App