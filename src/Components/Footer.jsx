import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link to='/About' className="link link-hover hover:text-info">About us</Link>
    <Link to='/Contact' className="link link-hover hover:text-info">Contact</Link>
    <Link to='/SignUp' className="link link-hover hover:text-info">SignUp</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <Link className="link link-hover hover:text-info">Terms of use</Link>
    <Link className="link link-hover hover:text-info">Privacy policy</Link>
    <Link className="link link-hover hover:text-info">Cookie policy</Link>
  </nav>
</footer>
  )
}

export default Footer