import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to='/' activeClass='active'>Home</NavLink>
      {' | '}
      <NavLink to='/about' activeClass='active'>About</NavLink>
      {' | '}
      <NavLink to='/courses' activeClass='active'>Courses</NavLink>
    </nav>
  )
}

export default Header
