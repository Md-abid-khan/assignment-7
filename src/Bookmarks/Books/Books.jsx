

const Books = ({ books, removeBooksItems, sweetalertsForRemove ,hiddenDiv }) => {
    


    return (
        <div>
            
            <div className='flex justify-between p-5 font-bold border-2 border-black rounded-2xl mb-2 mt-2'>

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
                <div  onClick={() => removeBooksItems(books.id, books.currentBidPrice)}>
                    <div className="cursor-pointer" onClick={sweetalertsForRemove}>
                        <div onClick={hiddenDiv}>
                           X 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Books;