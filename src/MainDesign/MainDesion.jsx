import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import Table from './table.jsx/Table';

const MainDesion = ({ addToBookmark }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("JSON.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [])
  // console.log(blogs);


  return (
    <div>
      <div className="overflow-x-auto bg-slate-600 m-5 rounded-2xl">
        <div className="table">
          {/* head */}
          {/* <thead>
      <tr>
        
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead> */}
         
            {/* row 1 */}
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
                  key={blogs.id} blog={blog}
                  addToBookmark={addToBookmark} ></Table> </div>)
              }
            </div>




          
          {/* foot */}

        </div>
      </div>
    </div>
  );
};

export default MainDesion;