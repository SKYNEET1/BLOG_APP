import React, { useState } from 'react'
import Banner from '../Banner/Banner'
import BlogCardWrapper from './BlogCardWrapper'
import BlogSideBar from './BlogSideBar'
import BlogFilter from './BlogFilter'

function Blog() {

  const [selectedCatagory, setSelectedCatagory] = useState("All")

  return (
    <div>
      <Banner 
        title={"Blog "}
      />
      <div className="wrapper">
        <div className="content-wrapper">
          <BlogFilter selectedCatagory={selectedCatagory} setSelectedCatagory={setSelectedCatagory}/>
          <div className='flex flex-col md:flex-row gap-5'>
            <BlogCardWrapper
              blogCategory={selectedCatagory}
            />
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog