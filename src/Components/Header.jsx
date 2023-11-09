import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setCurrentPage } from '../utils/quoteSlice';

const Header = () => {
  const currPage = useSelector(store=> store.quote.currentPage);
  const dispatch = useDispatch();
  return (
    <div className='flex justify-between py-5 px-14 bg-inherit text-white'>
      <div className={currPage === "Home"?"font-bold cursor-pointer":"cursor-pointer"}onClick={()=>dispatch(setCurrentPage("Home"))} >Home</div>
      <div className={currPage === "BookMark"?"font-bold cursor-pointer":"cursor-pointer"} onClick={()=>dispatch(setCurrentPage("BookMark"))} >Bookmarks</div>
    </div>
  )
}

export default Header