import React from 'react'
import { Outlet } from 'react-router-dom'

const Test = () => {
  return (
    <div>
        <h2>Hello Con</h2>
        <Outlet/>
    </div>
  )
}

export default Test