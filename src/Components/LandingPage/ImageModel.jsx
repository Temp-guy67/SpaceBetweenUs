import React from 'react';
import "./LandingPage.css";

const ImageModel = ({ele}) => {
  return (
    <div className="imageContainer"   >
      <div className='imageSection'>
        <img src={ele.hdurl} alt="Image Not Genarated" />
      </div>
      <div className='textSection'>
        <h1>{ele.title}</h1>
        <p>{ele.explanation}</p>

      </div>
    </div>
  )
}

export default ImageModel