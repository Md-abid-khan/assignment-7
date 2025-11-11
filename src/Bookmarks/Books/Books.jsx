import React from 'react';
import { CiHeart } from "react-icons/ci"

const Books = ({ books }) => {
    console.log(books);

    return (
       <div>
        

        <div className='flex justify-between p-5 font-bold'>

            <div>
                <img className='h-15' src={books.image} alt="" />
            </div>
            <div>
                <p>{books.title}</p>
            <div className='flex justify-around'>
                <p>$ {books.currentBidPrice}</p>
                <p>Bid: {books.bidsCount}</p>
            </div>
            </div>


            <button>X</button>
        </div>
       </div>
        
    );
};

export default Books;