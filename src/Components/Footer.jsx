import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title text-center">WATCH</h6>
    <Link to='/About' className="hover:text-info">About us</Link>
    <Link to='/Contact' className="hover:text-info">Contact</Link>
  </nav>
</footer>
  )
}

export default Footer