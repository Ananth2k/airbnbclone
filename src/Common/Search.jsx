import React from 'react'

function Search({scrolled}) {
  return (
    <div className={`text-center d-flex my-3 ${scrolled ? "search-scrolled" : ""} justify-content-center`}>
         <div className="col-12 bg-white search-bar">
              <div className={` border ${scrolled ?"d-flex justify-content-space-around" : "row"} search-border align-items-center`}>
                  <div className={`px-4 py-2 text-start ${scrolled ?"" : "col-4"}`}>
                   {scrolled ?(
                   <div><p className="fs-7 fw-semibold mb-0">Anywhere</p></div>
                   )
                     :(
                       <div className="border-left">
                      <p className="fs-7 fw-semibold mb-0">Where</p>
                    <input placeholder="Search destination" className="fs-6 border-0 text-muted"></input>
                    </div>
                        
                     ) 
                    }  
                  </div>

                  <div className={` ${scrolled ?"" : "col-4"} row align-items-center`}>
                    {scrolled ?(
                    <div className="">
                      <p className="fs-7 fw-semibold mb-0">Any time</p>
                                        
                    </div>
                    ) :(
                      <>
                    <div className="col-6 px-3 py-2 text-start">
                      <div  className="border-left">
                      <p className="fs-7 fw-semibold mb-0">check in</p>
                      <input placeholder="Add date" className="w-100 fs-6 border-0 text-muted"></input>
                      </div>                    
                    </div>
                    <div className="col-6 px-3 py-2 text-start">
                      <div className="border-left">
                      <p className="fs-7 fw-semibold mb-0">check out</p>
                      <input placeholder="Add date" className="w-100 fs-6 border-0 text-muted"></input> 
                      </div>                   
                    </div>
                    </>
                     )}
                  </div>
                  <div className={`${scrolled ?"" : "col-4"} px-0 align-items-center py-2 row`}>
                    {scrolled ?(
                      <div className='col-8'><p className="fs-7 fw-semibold mb-0">Any guest</p></div>
                    ):(
                      <div className="col-10 px-3 text-start">
                      <p className="fs-7 fw-semibold mb-0">who</p>
                      <input placeholder="Add guests" className="fs-6 border-0 text-muted"></input>
                    </div>
                    )}
                   
                    <div className={`search_icon_nav ${scrolled ? "col-4" :"col-2"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Search