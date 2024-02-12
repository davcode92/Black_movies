import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { AdsMovie } from '../redux/reducer';

const AdsComp = () => {
  return (
    <div>
      <Carousel 
        slide={true}
        fade={true}
        indicators={false}
        controls={false}
        interval={1000}
      
      
      
      >
      {AdsMovie.map((el) => (
         <Carousel.Item key={el.id}>
         <img src={el.movieImg} alt="photoz" />
         <Carousel.Caption>
           <h3>{el.movieName}</h3>
           
         </Carousel.Caption>
       </Carousel.Item>
        
        ))}
    </Carousel>  
    </div>
  );
};

export default AdsComp