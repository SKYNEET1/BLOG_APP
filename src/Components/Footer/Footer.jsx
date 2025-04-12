import React from 'react'
import navItems from '../../utils/navItems'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFileLines } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-gray-900 text-gray-100'>
      <div className="wrapper">
        <div className="content-wrapper">
          <footer className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div>
              <h3 className='mb-5 font-bold text-xl'>Category</h3>
              <ul>
                {navItems.map((element) => (
                  <li key={element.id}>
                    <Link className='text-gray-500 font-medium text-lg hover:text-orange-500 transition-all' to={element.path}>{element.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='mb-5 font-bold text-xl'>Social Media</h3>
              <ul>
                <li>
                  <Link to='https://www.linkedin.com/in/swagatrout/' className='text-gray-500 font-medium text-lg hover:text-blue-500 transition-all flex space-x-2 items-center'>
                    <FaLinkedin />
                    <span>Linkedin</span>
                  </Link>
                  <Link to='https://github.com/SKYNEET1' className='text-gray-500 font-medium text-lg hover:text-blue-500 transition-all flex space-x-2 items-center'>
                    <FaGithub />
                    <span>Github</span>
                  </Link>
                  <Link to='https://www.instagram.com/skyneet1/reels/' className='text-gray-500 font-medium text-lg hover:text-blue-500 transition-all flex space-x-2 items-center'>
                    <AiFillInstagram />
                    <span>Instagram</span>
                  </Link>
                  <Link to='/' className='text-gray-500 font-medium text-lg hover:text-blue-500 transition-all flex space-x-2 items-center'>
                    <FaFileLines />
                    <span>Portfolio</span>
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
          <div className='w-full bg-gray-500 h-[1px] my-6'></div>
          <div id="footer-btm" className='text-center'>
            <span className='text-gray-500 font-semibold'>Copyright @Swagat Nandan Rout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer