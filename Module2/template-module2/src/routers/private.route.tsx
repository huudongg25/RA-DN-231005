import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const [checkLogin,setCheckLogin] = useState<string>('')

    useEffect(()=>{
        setCheckLogin(localStorage.getItem("token") as string)
    },[])


  return (
    checkLogin ? <Outlet/> : <Navigate to={'/login'} />
  )
}

export default PrivateRouter