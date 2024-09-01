import React from 'react'
import Header from '../pages/header'

import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='grid-background'>
      <main className='min-h-screen container'>
      <Header/>
      <Outlet />
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'>Made by ♥ by Ashish</div>
    </div>
  )
}

export default AppLayout