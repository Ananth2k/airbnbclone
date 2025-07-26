import React from 'react'

function SearchBar({scrolled,isLocation,onToggleLocation}) {
  return (
    <div className={`my-3 d-flex justify-content-between align-items-center border bg-white search-bar position-relative ${scrolled ? "search-scrolled " : "slide-bottom"}`}>
       {scrolled 
       ?(

        <div onClick={onToggleLocation} className={`px-3 border-left-before`} >
          <h2  className="fs-7 fw-semibold mb-0">Any Where</h2>
        </div>

       ) 
       :(

        <div  onClick={onToggleLocation} className={`p-2 px-4 border-left-after-1`}>
          <h2  className="fs-7 fw-semibold mb-0">Where</h2>
          <input className="fs-6 border-0 text-muted" placeholder='Search destination'/>
        </div>

       )}
      

      <div className={`d-flex`}>
         {scrolled 
          ?(
            <div className={`px-3 border-left-before`}>
            <h2  className="fs-7 fw-semibold mb-0">Any time</h2>
          </div>
          ) 
        
        :(
          <>
           <div className={`p-2 border-left-after-1`}>
            <h2  className="fs-7 fw-semibold mb-0">check in</h2>
            <input className="fs-6 border-0 text-muted" placeholder='Add date'/>
          </div>
          <div className={`p-2 border-left-after-1`}>
            <h2  className="fs-7 fw-semibold mb-0">check out</h2>
            <input className="fs-6 border-0 text-muted" placeholder='Add date'/>
          </div>
          </>


         )}
         
      </div>

      <div className={`d-flex align-items-center`}>
        {scrolled 

        ?(
          <div className={`px-3`}>
            <h2  className="fs-7 fw-semibold mb-0">Any guest</h2>
          </div>

        ) 
        :(
          <div className={`px-3`}>
          <h2  className="fs-7 fw-semibold mb-0">Who</h2>
          <input className="fs-6 border-0 text-muted" placeholder='Add guests'/>
          </div>
        )}
        
        <div className={`search_icon_nav ${scrolled ?"p-12px" :"p-3 mx-2"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
        </div>
      </div>
      
      
         
    </div>
  )
}

export default SearchBar