

const Books = ({ books, removeBooksItems ,sweetalertsForRemove}) => {
    
    // console.log(books);
    // if(books.length === 0){
    //     const show = 
    //     <div className='mb-8'>
    //             <h2 className='my-5 font-bold'>No favourites yet</h2>
    //             <div className=''>Click the heart icon on any item <br /> to add it to your favorites</div>
    //         </div>
    // }
    // return show;
    // function Show  ()  {
    //     if (books.length === 0) {
    //         const showing = <div className='mb-8'>
    //             <h2 className='my-5 font-bold'>No favourites yet</h2>
    //             <div className=''>Click the heart icon on any item <br /> to add it to your favorites</div>
    //         </div>
    //     return showing;
    //     }

    // }
    // console.log(books.currentBidPrice);
    // console.log(count);
  

    return (
        <div>
            
           
            
            



            <div className='flex justify-between p-5 font-bold border-2 border-black rounded-2xl mb-2'>

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


                <button onClick={() => removeBooksItems(books.id, books.currentBidPrice)}>
                    <div onClick={sweetalertsForRemove}>
                        X
                    </div>
                    
                    </button>
            </div>
        </div>

    );
};

export default Books;