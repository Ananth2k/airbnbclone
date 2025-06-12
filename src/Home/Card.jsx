import React, { useState } from "react";
function Card(){
 
    return(
        <>

        <div className="custom-card">
            <div className="my-2 text-start"> 
                <h3 className="home-title my-0">Homes in Madurai</h3> 
                <div className="d-flex align-items-center home-deatiles text-muted">
                <p className="my-0">$120 for 2 nights </p>
                <div className="d-flex align-items-center mx-2 text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" className="star-svg mx-1"><path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg> 
                    <p className="my-0">4.9</p>
                </div>                    
                </div>               
            </div>
        </div>              
        
        </>
    )
}
export default Card;