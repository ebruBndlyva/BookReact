import React from 'react'
import UserNavbar from '../../components/User/UserNavbar'
import { Outlet } from "react-router"
import UserFooter from '../../components/User/UserFooter'
function UserRoute() {
  return (
    <> 
    <UserNavbar/>
    <Outlet/>
    <UserFooter/>
    </>
  )
}

export default UserRoute