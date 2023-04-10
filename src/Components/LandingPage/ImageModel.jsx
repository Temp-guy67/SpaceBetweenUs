import React from 'react';
import "./LandingPage.css";

const ImageModel = ({ele}) => {
  return (
    <div className="imageContainer"   >
      <div className='imageSection'>
        <img src={ele.hdurl} alt='Internal errors ' />
      </div>
      <div className='textSection'>
        <div className='innerTextSection'  >
          <h1>{ele.title}</h1>
          <h3>Post Date : {ele.date}</h3>
          <p>{ele.explanation}</p>

        </div>

      </div>
    </div>
  )
}

export default ImageModel;