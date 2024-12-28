import React from 'react'
import { Outlet } from "react-router"
import AdminNavbar from '../../components/Admin/AdminNavbar'
import AdminFooter from '../../components/Admin/AdminFooter'
function AdminRoute() {
  return (
    <> 
    <AdminNavbar/>
    <Outlet/>
    {/* <AdminFooter/> */}
    </>
  )
}

export default AdminRoute