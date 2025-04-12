import React from 'react'
import { Link } from 'react-router-dom'

function Banner({title, description = "", buttonText = ""}) {
  return (
    <div className='bg-banner-bg bg-cover bg-center text-gray-100 pb-16 relative'>
      <div className='absolute top-0 left-0 h-full w-full bg-black opacity-50 z-0' id="overlay"></div>
      <div className='wrapper relative z-10'>
        <div className="content-wrapper text-center">
          <h1 className='lg:text-7xl text-5xl font-bold mb-5'>{title}</h1>
          <p className='p-0 md:px-32 mb-5 text-lg'>{description}</p>
          <Link to='/blog'>
            <button className='font-semibold text-lg hover:text-orange-500 transition-all'>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner