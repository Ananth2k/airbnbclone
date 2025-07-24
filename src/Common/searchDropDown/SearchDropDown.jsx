import React from 'react'
import Location from './Location'
import Calander from './Calander'
import Guests from './Guests'

function SearchDropDown() {
  return (
    <div className='search-drop-down'>
      <div className='d-flex'>
        <Location/>
        {/* <Calander/> */}
        {/* <Guests/> */}
      </div>
    </div>
  )
}

export default SearchDropDown