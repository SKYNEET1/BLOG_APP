import React from 'react'
import blogsData from '../../utils/blogsData.json'
import { Link } from 'react-router-dom'

function BlogSideBar() {
  return (
    <div className='ml-10 max-w-56'>
      <h2 className='font-semibold text-2xl mb-5'>Latest Blogs</h2>
      <div>
        {blogsData.map((item) => (
          <div key={item.id} className='border-b-2 border-gray-200 py-3'>
            <h3 className='font-semibold text-md mb-2'>{item.title}</h3>
            <Link to={`/blog/${item.id}`} className='hover:text-orange-500 transition-all'>Read more →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSideBar