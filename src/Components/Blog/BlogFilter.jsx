import React from 'react'
import filterItem from '../../utils/filter'

function BlogFilter({selectedCatagory, setSelectedCatagory}) {
  return (
    <div className='border-b-2 border-gray-200 py-2 mb-4 pb-3 flex space-x-10 overflow-x-scroll'>
      {filterItem.map((category) => (
        <button 
          className={`text-md hover:bg-slate-100 px-3 py-1 rounded-md focus:bg-slate-100 focus:text-orange-500 ${selectedCatagory === "All" && category.name == "All" ? "bg-slate-100 text-orange-500" : "bg-white text-black"}`}
          key={category.id}
          onClick={() => setSelectedCatagory(category.name)}
        >
            {category.name}
        </button>
      ))}
    </div>
  )
}

export default BlogFilter