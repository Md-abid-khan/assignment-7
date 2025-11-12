import React, { useEffect, useState } from 'react';
import Table from './table.jsx/Table';

const MainDesion = ({ addToBookmark ,sweetalerts}) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("JSON.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [])
  // console.log(blogs);


  return (
    <div>
      <h1 className='text-2xl mt-5'>Active Auctions</h1>
      <h2>Discover and bid on extraordinary items</h2>
      <div className="overflow-x-auto bg-slate-600 m-5 rounded-2xl">
        <div className="table">

          <ul className='flex justify-between m-5 text-center p-5  font-bold'>
            <li>Items</li>
            <div className='flex justify-around gap-10'>
              <li>Current Bid</li>
              <li>Time Left</li>
              <li>Bid Now</li>
            </div>

          </ul>

          <div>
            {
              blogs.map(blog => <div> <Table
                key={blog.id} blog={blog}
                addToBookmark={addToBookmark}
                sweetalerts={sweetalerts} ></Table> </div>)
            }
          </div>





          {/* foot */}

        </div>
      </div>
    </div>
  );
};

export default MainDesion;