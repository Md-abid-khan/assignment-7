import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";

const Table = ({ blog, addToBookmark ,sweetalerts}) => {
    // console.log(blog);
    const [disable, setDisable] = useState(false)
    const { bidsCount, currentBidPrice, description, id, image, timeLeft, title } = blog;



    const handleButton = () => {
        setDisable(true);
    }
    return (
        <div className='border-2 border-black rounded-2xl m-2'>
            
            
        <div className='flex justify-between m-5 p-5 font-bold'>
            <div className='flex gap-2'>
                <img className='h-15 w-20' src={image} alt="" />
                <p>{title}</p>
            </div>
            <div className='flex justify-between gap-15 font-bold'>
                <h2> {currentBidPrice}   </h2>
                <h2>{timeLeft} Days left</h2>
                
                <div

                    onClick={() => { addToBookmark(blog, currentBidPrice) }}>
                    <div className={`${disable ? "bg-red-500 cursor-not-allowed " : "  cursor-pointer"}`} onClick={handleButton}>
                        <div onClick={sweetalerts}>
                            <FaRegHeart size={20}/>
                        </div>

                        
                    </div>

                </div>

            </div>

        </div>
        </div>

    );
};

export default Table;