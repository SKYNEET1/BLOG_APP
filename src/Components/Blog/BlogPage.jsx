import React from 'react'
import { useParams } from 'react-router-dom'
import blogsData from '../../utils/blogsData.json'
import BlogSideBar from './BlogSideBar';
import { IoPersonSharp } from 'react-icons/io5';

function BlogPage() {

  const {id} = useParams();

  const blog = blogsData.find((b) => b.id === parseInt(id));
  return (
    <div>
      <div className="wrapper">
        <div className="content-wrapper flex flex-col md:flex-row gap-5">
          <div className='flex flex-col gap-7'>
            <img 
              src={blog.image} 
              alt="blog image"
              className='w-full rounded-md'
            />
            <div>
              <h2 className='font-bold text-xl text-purple-600 mb-5'>{blog.title}</h2>
              <div id='blog-details'>
                <div id='author-info' className='flex space-x-3 items-center text-gray-600'>
                  <IoPersonSharp />
                  <p className='text-lg'>{blog.author} | {blog.published_date}</p>
                </div>
                <div id='blog-reading-time' className='flex space-x-3 items-center text-gray-600'>
                  <IoPersonSharp />
                  <p className='text-lg'>{blog.reading_time}</p>
                </div>
              </div>
              <div className='flex flex-col gap-6 text-gray-500 mt-5'>
                <p>{blog.content}</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci, unde suscipit qui obcaecati commodi, minima corrupti voluptatum voluptates magni sunt, laboriosam minus. Consequuntur laudantium alias tempora culpa illo minima!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci, unde suscipit qui obcaecati commodi, minima corrupti voluptatum voluptates magni sunt, laboriosam minus. Consequuntur laudantium alias tempora culpa illo minima!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci, unde suscipit qui obcaecati commodi, minima corrupti voluptatum voluptates magni sunt, laboriosam minus. Consequuntur laudantium alias tempora culpa illo minima!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci, unde suscipit qui obcaecati commodi, minima corrupti voluptatum voluptates magni sunt, laboriosam minus. Consequuntur laudantium alias tempora culpa illo minima!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci, unde suscipit qui obcaecati commodi, minima corrupti voluptatum voluptates magni sunt, laboriosam minus. Consequuntur laudantium alias tempora culpa illo minima!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci, unde suscipit qui obcaecati commodi, minima corrupti voluptatum voluptates magni sunt, laboriosam minus. Consequuntur laudantium alias tempora culpa illo minima!</p>
              </div>
            </div>
          </div>
          <BlogSideBar />
        </div>
      </div>
    </div>
  )
}

export default BlogPage