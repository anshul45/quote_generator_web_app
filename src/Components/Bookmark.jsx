import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeFromBookMark } from '../utils/quoteSlice';
const Bookmark = () => {
  const dispatch = useDispatch();
  const bookMarkQuote = useSelector(store => store.quote.bookMarkQuote)
  
  return (
    <div className='pt-12 pb-12 flex flex-col gap-7  items-center bg-inherit '>
      {!bookMarkQuote.length?(<div className='text-white text-center mt-36 font-bold text-3xl'>You need to add a bookmark..</div>):(
       bookMarkQuote.map((quote) => (<div className=' w-fit max-w-sm  px-10 py-5 rounded-xl flex flex-col gap-10 items-center   bg-red-500 text-white sm: mx-14 md:w-11/12' key={quote.id}>
            <p>{quote.content}</p>
            <div className='flex items-center gap-16'>

<h1 className='font-bold text-xs'>-{quote.author}</h1>
<div className=' text-sm cursor-pointer' onClick={()=> dispatch(removeFromBookMark(quote._id))}>✖</div>
</div>
        </div>))
      )
      }
    </div>
  )
}

export default Bookmark;