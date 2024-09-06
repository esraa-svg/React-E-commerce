import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'
import Login from '../Login/Login'
export default function Protcted({children}) {
    const {userToken}=useContext(AuthContext)
  return (
    <div>
    {
    userToken? children:<Login/>
}
    </div>
  )
}
