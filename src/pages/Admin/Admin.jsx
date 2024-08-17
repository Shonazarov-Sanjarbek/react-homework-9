import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Admin = () => {
  return (
    <div className='flex'>
      <div className='w-80 min-h-screen bg-blue-400'>
        <h2>Admin</h2>
        <ul>
          <li>
            < NavLink to={"/admin/create"}> Create </NavLink>
          </li>
          <li>
            < NavLink to={"/admin/manage"}> Manage </NavLink>
          </li>
        </ul>
      </div>
      <div className='flex-1 p-5'>
      <Outlet/>
      </div>
    </div>
  )
}

export default Admin
