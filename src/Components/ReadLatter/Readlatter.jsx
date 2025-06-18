import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../Redux/slices/ReadLatterSlice';
import { FcReading } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Readlatter = () => {
  const readLatterItems = useSelector((state) => state.ReadLatterSlice);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  if (readLatterItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-xl">
        Your Read Later list is empty.
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="text-center my-6">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2 transition duration-300 ease-in-out hover:scale-105">
          Fuel Your Mind — One Blog at a Time
        </h1>
        <p className="text-gray-500 text-sm md:text-lg italic">
          Add blogs to your list, read at your pace, grow at your space.
        </p>
        <p className="text-gray-500 text-sm md:text-base italic mt-2">Total Blogs: {readLatterItems.length}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {readLatterItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col min-h-[450px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt="blog"
              className="w-full h-40 object-cover rounded-md"
            />
            <Link to={`/blog/${item.id}`}>
              <h2 className="font-semibold text-lg mt-2 hover:text-violet-700">{item.title}</h2>
            </Link>
            <div className="flex items-center text-gray-500 space-x-2 mt-1">
              <span><FcReading /></span>
              <span>{item.author}</span>
            </div>
            <p className="text-sm text-gray-400">{item.published_date}</p>

            {/* Push button to bottom */}
            <div className="mt-auto">
              <button
                onClick={() => handleRemove(item)}
                className="bg-red-500 text-white w-full py-1 rounded hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Readlatter;
