import React from 'react'
import Location from './Location'
import Calander from './Calander'
import Guests from './Guests'

function SearchDropDown({ isLocation, onToggleLocation }) {
  return (
    <div className='search-drop-down'>
      <div className='d-flex'>
        <Location isLocation={isLocation} onToggleLocation={onToggleLocation} />
        {/* <Calander/> */}
        {/* <Guests/> */}
      </div>
    </div>
  )
}


export default SearchDropDown