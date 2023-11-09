import React from 'react'
import { useSelector } from "react-redux";
import Home from '../Components/Home';
import Bookmark from "../Components/Bookmark"
import Header from "../Components/Header";

const HomePage = () => {
    const currPage = useSelector((store) => store.quote.currentPage);
  return (
    <div className='w-full h-screen bg-violet-800'>
    <Header />
      {currPage === "Home" ? <Home /> : <Bookmark />}
    </div>
  )
}

export default HomePage