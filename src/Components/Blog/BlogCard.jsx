import React from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function BlogCard({id, image, title, author, publishedDate, data, category}) {

  return (
    <Link to={`/blog/${id}`} state={data}>
      <div className='min-h-[400px] max-w-fit p-5 rounded-md flex flex-col space-y-4 group shadow-lg transition-all'>
        <div id="img-section">
          <img className='w-full rounded-md min-h-36 object-cover' src={image} alt="blog-img" />
        </div>
        <div id="card-section" className='flex flex-col space-y-1'>
          <h2 id="card-heading" className='text-lg font-semibold group-hover:text-purple-700'>{title}</h2>
          <div id="author-info" className='flex items-center space-x-2 text-gray-500'>
            <IoPersonSharp />
            <h3 className='text-lg'>{author}</h3>
          </div>
          <p id="date-of-publish" className='text-gray-500'>{publishedDate}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard