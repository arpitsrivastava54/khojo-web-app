import React from 'react'
import { useSelector } from 'react-redux'

const SearchList = () => {

  console.log(useSelector(state => state.response))


  return (
    <div className='search-list '>
      <ul className='flex justify-evenly mb-10'>
       <li className='btn cursor-pointer'>Videos</li>
       <li className='btn cursor-pointer'>Images</li>
      </ul>
    </div>
  )
}

export default SearchList