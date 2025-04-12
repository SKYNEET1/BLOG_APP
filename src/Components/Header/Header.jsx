import React, { useState } from 'react'
import navItems from '../../utils/navItems'
import { NavLink, Link } from 'react-router-dom'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { IoIosGlobe } from 'react-icons/io'
import { LuMenu } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'
import Login from './Login'

function Header() {

  const [loginDialog, setLoginDialog] = useState(false)
  const [showNav, setShowNav] = useState(false)

  return (
    <div>
      <div id='nav-bar' className='bg-gray-800 flex justify-between items-center text-white p-6 h-24 w-full fixed top-0 left-0 z-50 text-xl font-medium'>
        <div id='logo' className='font-bold'>
          <Link to='/'>Blog <span className='text-orange-500'>Stories</span></Link>
        </div>
        <div id='nav-links' className='hidden md:flex '>
          <ul className='flex space-x-10'>
            {navItems.map((element) => (
              <li key={element.id}>
                <NavLink 
                  to={element.path}
                  className={({isActive}) => `hover:text-orange-500 transition-all ${isActive ? `text-orange-500` : `text-gray-100`}`}
                >{element.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden lg:flex space-x-4 items-center'>
          <div className='flex space-x-3'>
            <FaFacebook className='hover:text-orange-500 cursor-pointer transition-all text-md' />
            <IoIosGlobe className='hover:text-orange-500 cursor-pointer transition-all text-md' />
            <FaTwitter className='hover:text-orange-500 cursor-pointer transition-all text-md' />
          </div>
          <button 
            onClick={() => setLoginDialog(true)}
            className='bg-orange-500 hover:bg-gray-100 hover:text-orange-500 transition-all rounded-md text-lg font-semibold px-6 py-1.5'
          >Login</button>
        </div>
        <button 
        onClick={() => setShowNav(true)}
          className='md:hidden flex'
        >
          <LuMenu/>
        </button>
      </div>

       {/* Mobile Navigation  */}
      
      {showNav && (
        <div id='mobile-navbar' className='flex flex-col w-full fixed top-0 left-0 z-50 '>
          <div className='bg-gray-800 flex justify-between items-center text-white p-6 h-24 w-full text-xl font-medium'>
            <div id='logo' className='font-bold'>Blog <span className='text-orange-500'>Stories</span></div>
            <button onClick={() => setShowNav(false)}>
              <RxCross2 />
            </button>
          </div>
          <div className='bg-gray-100 p-6'>
            <ul id="mob-nav-items" className='flex flex-col space-y-5 mb-4'>
              {navItems.map((element) => (
                  <li key={element.id}>
                    <NavLink 
                      to={element.path}
                      className={({isActive}) => `font-semibold text-lg hover:text-orange-500 transition-all ${isActive ? `text-orange-500` : `text-gray-900`}`}
                    >{element.label}</NavLink>
                  </li>
                ))}
            </ul>
            <button 
              onClick={() => setLoginDialog(true)}
              className='bg-orange-500 text-gray-100 hover:bg-gray-100 hover:text-orange-500 transition-all rounded-md text-lg font-semibold px-6 py-1.5'
            >Login</button>
          </div>
        </div>
      )}

      {/* Login page */}
      {loginDialog && (
        <Login loginDialog={loginDialog} setLoginDialog={setLoginDialog} />
      )}
    </div>
  )
}

export default Header