
import './App.css'
import Header from './assets/Header/Header'
import Bookmarks from './Bookmarks/Bookmarks'
import Footer from './Footer/Footer'
import MainDesion from './MainDesign/MainDesion'
import Navbar from './Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className="mainContainer flex text-center">
        <div className="leftContainer w-[70%]">
          <MainDesion></MainDesion>
        </div>
        <div className="rightContainer w-[30%]">
          <Bookmarks></Bookmarks>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
