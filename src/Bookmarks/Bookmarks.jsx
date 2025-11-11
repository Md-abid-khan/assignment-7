import React from 'react';
import { CiHeart } from "react-icons/ci"

const Bookmarks = () => {
    return (
        <div className='bg-slate-600 p-5 rounded-2xl m-5 '>

            <div className='flex justify-center gap-1 mb-2'>
                
                    <CiHeart size={25}/>
                  <p className='font-bold'> Favourite Items</p>
            </div>
            <hr />
            <div className='mb-8'>
                <h2 className='my-5 font-bold'>No favourites yet</h2>
                <div className=''>Click the heart icon on any item <br /> to add it to your favorites</div>
            </div>
            <hr />
            <div className='flex justify-around mt-5'>
                <p className='font-bold'>Total bids Amount</p>
                <p className='font-bold'>$</p>
            </div>
        </div>
    );
};

export default Bookmarks;