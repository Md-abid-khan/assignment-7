import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const MainDesion = () => {
    return (
        <div>
            <div className="overflow-x-auto bg-slate-600 m-5 rounded-2xl">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3 ">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              Name
            </div>
          </div>
        </td>
        <td className='font-semibold'>
          $
        </td>
        <td className='font-semibold'>Days left</td>
        <th>
          <div className=""><FaRegHeart /></div>
        </th>
      </tr>
      
    </tbody>
    {/* foot */}
   
  </table>
</div>
        </div>
    );
};

export default MainDesion;