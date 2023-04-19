import React from 'react';
import "./LandingPage.css";

const ImageModel = ({ele}) => {
  // console.log(" URL LENGTH : ", ele.url);
  const test = (ele.url === undefined) ? ele.hdurl : ele.url;  
  return (
    <div className="imageContainer"   >
      <div className='imageSection'>
        <img src={test} alt='Internal errors ' />
      </div>
      <div className='textSection'>
        <div className='innerTextSection'  >
          <h1>{ele.title}</h1>
          <h3>Post Date : {ele.date}</h3>
          <p>{ele.explanation}</p>
          <div className="button-container">
            <button><a href={ele.hdurl} rel="noreferrer" target='_blank' >View HD</a></button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ImageModel;