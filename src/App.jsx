

import { useState } from 'react'
import './App.css'
import Header from './assets/Header/Header'
// import Bookmarks from './Bookmarks/Bookmarks'
import Footer from './Footer/Footer'
import MainDesion from './MainDesign/MainDesion'
import Navbar from './Navbar/Navbar'
import Books from './Bookmarks/Books/Books'
import { CiHeart } from "react-icons/ci"

function App() {
  const [bookmarks,setBookmarks] =useState([]);

 const addToBookmark = (id) => {
  console.log("hello" , id);
  const newMarks = [...bookmarks,id];
  setBookmarks(newMarks)
 }



  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className="mainContainer flex text-center">
        <div className="leftContainer w-[70%]">
          <MainDesion addToBookmark={addToBookmark}></MainDesion>
        </div>
        <div className="rightContainer w-[30%] bg-slate-600 p-5 rounded-2xl mt-5 mb-5">
          <div className='flex justify-center gap-1 mb-2 mt-10 '>
                
                    <CiHeart size={25}/>
                  <p className='font-bold'> Favourite Items</p>
            </div>
            <hr />
            <div>
              {
                bookmarks.map(books => <div> <Books books={books} ></Books> </div>)
              }
            </div>
            <hr />
            <div className='flex justify-around mt-5'>
                <p className='font-bold'>Total bids Amount</p>
                <p className='font-bold'>$</p>
            </div>
          {/* <Bookmarks>
          </Bookmarks> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
