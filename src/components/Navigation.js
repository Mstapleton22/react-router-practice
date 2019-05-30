import React from 'react'
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink activeClassName="active-link" to='/about'>About</NavLink>
      <NavLink activeClassName="active-link" to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Navigation
