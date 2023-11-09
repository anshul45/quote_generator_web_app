import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTags, addToBookMark, addsingleQuote, setIsOpenTags } from '../utils/quoteSlice';
const Home = () => {

    
    const singleQuote = useSelector((store)=> store.quote.singleQuote);
    const isOpenTags = useSelector((store)=> store.quote.isOpenTags);
    const allTags = useSelector((store)=> store.quote.tags);
    const dispatch = useDispatch();
    
   

    
    useEffect(() => {  
            fetchData();
        
            if (!allTags.length) {
              fetchTags();
            }
           // eslint-disable-next-line 
          }, [])

    const fetchData = async() => {
        const response = await axios.get("https://api.quotable.io/quotes/random");
        dispatch(addsingleQuote(response.data[0]));  
        
       
    }
    const fetchTags = async() => {
        const tags = await axios.get("https://api.quotable.io/tags");
        dispatch(addTags(tags.data));     
    }


    const handleClick = () =>{
        fetchData()
    }

  
   

  return (
    <div className='pt-12 pb-12 gap-8 flex flex-col items-center bg-inherit'>
        <div className='w-fit max-w-sm px-10 py-5 rounded-xl   flex flex-col gap-10 justify-between items-center  bg-red-500 text-white sm: mx-14 md:w-11/12' >
            <p>{singleQuote?.content}</p>
            <div className='flex items-center gap-16'>

            <h1 className='font-bold text-xs whitespace-nowrap'>-{singleQuote?.author}</h1>
            <img alt="Bookmark" className=' w-5 h-5 cursor-pointer  ' src="./Bookmark.png" onClick={() => dispatch(addToBookMark(singleQuote))}/>
            </div>
        </div>
        <div className={`rounded-lg bg-white text-2xl  cursor-pointer w-32 h-1 pr-1 pb-8 text-end `} onClick={()=> dispatch(setIsOpenTags())}>{isOpenTags?"⯅":"⯆"}</div>
        {isOpenTags && <div className='flex gap-8 justify-center flex-wrap max-w-xs'>
            {allTags.slice(10,20).map(tag => ( <div className='px-2 bg-green-400 rounded-2xl text-gray-100' key={tag._id}>{tag.name}</div>))}
            </div>}
        <div className='bg-green-600 text-white px-6 py-0.5 rounded-2xl cursor-pointer' onClick={handleClick}>Next Quote</div>
    </div>
  )
}

export default Home