import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchDropDown from "./searchDropDown/SearchDropDown";
function Tab(){
  const [activeTab, setActiveTab] = useState("Homes");
  const [scrolled, setScrolled] = useState(false);
  const [scrollBottom, setScrollBottom] = useState(false);
  const [location, setLocation] = useState(false);

  const handleLocation = () =>{
    setLocation(prev=>!prev)
  }

  useEffect(()=>{

const handleScroll =()=>{
  const scrollTop = window.scrollY;
    if (scrollTop > 10){
    setScrolled(true);
    }
    else{
    setScrolled(false)
    }
  }
  const scrollUp = window.scrollY;
  if (scrollUp > -10){
    setScrollBottom(true);
  }
  else{
    setScrollBottom(false)
  }
window.addEventListener("scroll",handleScroll);

    return ()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[]);

    return(
      <div  className={`d-none d-lg-block tabs-section pb-3`}>
        <div className={`justify-content-center ${scrolled ? "scrolled slide-top" : "slide-bottom"} tabs fs-6 gap-4 align-items-center`}>
          {["Homes","Experiences","Services"].map((tab) => (
            <div 
            key={tab}
            className={`d-flex align-items-center tab pointer py-2 fw-semibold ${activeTab === tab ? "activetab" : "text-muted"}`}
            onClick={()=>setActiveTab(tab)} >
              <img src={`/${tab}${activeTab === tab ? "active" : ""}.png`} />                         
              <span className="mx-1">{tab}</span>
            </div>
          ))}
        </div>
        <div className="position-relative">
          <SearchBar isLocation={location} onToggleLocation={handleLocation} scrolled={scrolled}/>
          {scrolled ?(
            null
          ):(
<SearchDropDown isLocation={location} onToggleLocation={handleLocation}/> 
          )
          
        }
        </div>
        
</div>

    )
}
export default Tab;