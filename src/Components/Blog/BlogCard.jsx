import React, { useState } from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { LiaReadme } from "react-icons/lia";
import { FcReading } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../Redux/slices/ReadLatterSlice';

function BlogCard({ id, image, title, author, publishedDate, data, category }) {
  // data is the item array from which i extracted id , image etc and passed here as props.
  const readLatterItems = useSelector((state) => state.ReadLatterSlice)
  const isInReadLatter = readLatterItems.some(item => item.id === id)

  // const [store, setstore] = useState([]);
  const dispatch = useDispatch((state) => state)
  const AddReadHandler = () => {
    dispatch(add(data))
    // setstore((e) => [{ ...e }, data]);
    // console.log(store)
  }
  const RemoveReadHandler = () => {
    dispatch(remove(data))
  }
  return (
    <>
      <div className='min-h-[400px] max-w-fit p-5 rounded-md flex flex-col space-y-4 group shadow-lg transition-all relative'>
        <div id="img-section">
          <img className='w-full rounded-md min-h-36 object-cover' src={image} alt="blog-img" />
        </div>

        <div id="card-section" className='flex flex-col space-y-1'>
          <Link to={`/blog/${id}`}>
            <h2 id="card-heading" className='text-lg font-semibold group-hover:text-purple-700'>
              {title}
            </h2>
          </Link>
          <div id="author-info" className='flex items-center space-x-2 text-gray-500'>
            <IoPersonSharp />
            <h3 className='text-lg'>{author}</h3>
          </div>
          <p id="date-of-publish" className='text-gray-500'>{publishedDate}</p>
        </div>

        
        <div className='cursor-pointer text-3xl sm:text-4xl absolute bottom-2 right-2 hover:text-green-700 transition-colors'>
          {!isInReadLatter ? (
            <div onClick={AddReadHandler}>
              <LiaReadme />
            </div>
          ) : (
            <div onClick={RemoveReadHandler}>
              <FcReading />
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default BlogCard
