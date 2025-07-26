import React from 'react'

function Location({isLocation,onToggleLocation}) {

const cities = ['Madurai', 'Chennai', 'Bangalore', 'Delhi', 'Mumbai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur'];

  return (
    <>
     {
        isLocation?(
            <div className='bg-white p-2 rounded-4 search-location'>
       
        <div className='p-4 scroll'>
             <p >Suggested destinations</p>
<ul className='ps-0 py-3 '>
            {
                cities.map((city, index)=>(
                    <li className="mb-3" key={index}>
                <div className='d-flex align-items-center gap-3'>
                    <img className='location-img' src={`/location-dropdown/location-${index}.webp`} alt={`${city} location`} />
                    <div>
                        <h5>{city}</h5>
                        <p>Poppular Places in {city}</p>
                    </div>
                </div>
            </li>

                ))
            }
            
        </ul>
        </div>
        
        
    </div>

        ):(
            null
        )
    }
    

    </>
   
  )
}

export default Location