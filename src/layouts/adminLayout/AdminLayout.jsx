import React, { useEffect } from 'react'
import SideNavbar from '../../Components/SideNavbar/SideNavbar'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

function AdminLayout() {
  const admin = useSelector((state) => state.admin);
  
  if(admin === null) {
    return <Navigate to='/' replace />
  }
  return (
    <div className='dashboardContainer'>
        <SideNavbar />
        <Outlet />
    </div>
  )
}

export default AdminLayout