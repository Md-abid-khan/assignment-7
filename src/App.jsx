

import { useState } from 'react'
import './App.css'
import Header from './assets/Header/Header'
// import Bookmarks from './Bookmarks/Bookmarks'
import Footer from './Footer/Footer'
import MainDesion from './MainDesign/MainDesion'
import Navbar from './Navbar/Navbar'
import Books from './Bookmarks/Books/Books'
import { CiHeart } from "react-icons/ci"
import Swal from 'sweetalert2'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [count, setCount] = useState(0);
  // const [disable,setDisable]=useState(false);


  const addToBookmark = (id, num) => {
    // console.log("hello" , id);
    const newMarks = [...bookmarks, id];
    setBookmarks(newMarks)
    const newAmount = count + num;
    setCount(newAmount)
    // setDisable(disable);
    // alert("Bookmark add successfully")
  }

  const removeBooksItems = (id, num) => {
    const remainingItems = bookmarks.filter(books => books.id !== id);
    // console.log(remainingItems);
    setBookmarks(remainingItems)
    setCount(count - num)

  }

  const sweetalerts =()=>{
    Swal.fire({
      title: "Add to Bookmark Successful",
      ConfirmButtonText : "OK",
      icon : "success",
      position: "top-end",
      timer: 1000,
      width: 400,
      height: "200px"
    })
  }
  const sweetalertsForRemove =()=>{
    Swal.fire({
      title: "Remove From Bookmark Successful",
      ConfirmButtonText : "OK",
      icon : "success",
      position: "top-end",
      timer: 1000,
      width: 400,
      height: "200px"
    })
  }

  // const handleButton = () => {
  //   setDisable(disable);
  // }
  // function Show  ()  {
  //       if (books.length === 0) {
  //           const showing = <div className='mb-8'>
  //               <h2 className='my-5 font-bold'>No favourites yet</h2>
  //               <div className=''>Click the heart icon on any item <br /> to add it to your favorites</div>
  //           </div>
  //       return showing;
  //       }

  //   }



  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className="mainContainer flex text-center">
        <div className="leftContainer w-[70%]">
          <MainDesion addToBookmark={addToBookmark}
          sweetalerts={sweetalerts}
          ></MainDesion>
        </div>
        <div className="rightContainer w-[30%] bg-slate-600 p-5 rounded-2xl mt-24 mb-5">
          <div className='flex justify-center gap-1 mb-2 mt-10 '>

            <CiHeart size={25} />
            <p className='font-bold'> Favourite Items</p>
          </div>
          <hr />
          <div>

            <div className='mb-8'>
              <h2 className='my-5 font-bold'>No favourites yet</h2>
              <div className=''>Click the heart icon on any item <br /> to add it to your favorites</div>
            </div>
          </div>
          {/* { hide  &&(
            <div className={`${!hide} && "hidden"`}>

            <div className='mb-8'>
              <h2 className='my-5 font-bold'>No favourites yet</h2>
              <div className=''>Click the heart icon on any item <br /> to add it to your favorites</div>
            </div>
          </div>

          )} */}
          <div>
            {
              bookmarks.map(books => <div> <Books books={books}

                removeBooksItems={removeBooksItems}
                sweetalertsForRemove={sweetalertsForRemove} ></Books> </div>)

            }
          </div>

          <hr />
          <div className='flex justify-around mt-5'>
            <p className='font-bold'>Total bids Amount</p>
            <p className='font-bold'>${count}</p>
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
