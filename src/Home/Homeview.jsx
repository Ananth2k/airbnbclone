import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";

function Home() {
  // Automatically create an array of 19 image objects
  const cardsData = Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    image: `${index + 1}`, // or just index + 1 if you're using it as a number
  }));

  
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };



  return (
    <div className="home-body py-3 px-4">
      <div className="d-flex align-items-center">
        <h2 className="fs-4 text-start">Popular Homes</h2>
        <svg className="right-arrow mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
      </div>
      <div className="home-body-cards py-3">
        <Row>
          {cardsData.map((card) => (
            <Col key={card.id} lg={2} className="my-2 px-2 position-relative">
              <div className="fav-svg">
                 <svg   
                 onClick={() => toggleFavorite(card.id)}
                 fill={favorites[card.id] ? "#ff385c" : "rgba(0, 0, 0, 0.5)"}  
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
              
              </div>
              <img
                src={`/dummy-img${card.image}.png`}
                alt={`dummy-${card.id}`}
                className="home-card-img"
              />
             <Card />
            </Col>
            
          ))}
        </Row>
        <div className="grid-card">
          
          {cardsData.map((card) => (
            <div>
            <div key={card.id} lg={2} className="position-relative">
              <div className="fav-svg">
                 <svg   
                 onClick={() => toggleFavorite(card.id)}
                 fill={favorites[card.id] ? "#ff385c" : "rgba(0, 0, 0, 0.5)"}  
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
              
              </div>
              <img
                src={`/dummy-img${card.image}.png`}
                alt={`dummy-${card.id}`}
                className="home-card-img"
              />
             <Card />
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
