import React from 'react';
import "./LandingPage.css";

const ImageModel = ({data}) => {
  return (
    <div className="imageContainer"   >
        <h1 className="title" >{data.title}</h1>
        <img className="image"  src={data.hdurl} alt="" />
        <p className="para"   >{data.explanation}</p>
    </div>
  )
}

export default ImageModel