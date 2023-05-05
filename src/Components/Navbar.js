import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navsection'>
        <Link to="/">About</Link>
        <Link to="/profile">profile</Link>
    </div>
  )
}

export default Navbar