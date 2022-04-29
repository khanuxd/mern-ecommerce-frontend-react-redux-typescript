import React from 'react'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'

import Routes from './Routes'

export default function App() {
  return (
    <main className='main'>
      <div className="body-content">
        <AppNavbar />
        <Routes />
      </div>
      <Footer />
    </main>
  )
}
