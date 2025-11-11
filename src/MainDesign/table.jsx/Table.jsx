import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const Table = ({ blog ,addToBookmark}) => {
    // console.log(blog);
    const { bidsCount, currentBidPrice, description, id, image, timeLeft, title } = blog;
    return (
        <div className='flex justify-between m-5 p-5 font-bold'>
            <div className='flex gap-2'>
                <img className='h-15 w-20' src={image} alt="" />
                <p>{title}</p>
            </div>
            <div className='flex justify-between gap-15 font-bold'>
                <h2> {currentBidPrice}   </h2>
                <h2>{timeLeft} Days left</h2>
                <div onClick={()=>{addToBookmark(blog)}}>

                <FaRegHeart />
                </div>

            </div>
        
        </div>
        
    );
};

export default Table;