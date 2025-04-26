import React from 'react'

const Footer = () => {
  return (
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover hover:text-info">About us</a>
    <a className="link link-hover hover:text-info">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover hover:text-info">Terms of use</a>
    <a className="link link-hover hover:text-info">Privacy policy</a>
    <a className="link link-hover hover:text-info">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer