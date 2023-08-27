import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='min-h-[10vh] flex flex-col justify-center items-center gap-1 bg-blue-950'>
      <h1>All right reserved by &copy; Arpit Srivastava</h1>
      <h2>visit us : <Link target='_blank' to="https://arpitsrivastava.netlify.app" className='text-[#ffb94c]'>arpitsrivastava.com</Link></h2>
    </div>
  )
}

export default Footer