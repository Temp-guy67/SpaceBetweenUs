import React from 'react';
import "./LandingPage.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import ImageModel from './ImageModel';

const LandingPage = () => {
	const [data, setData] = useState(null);
	const fetchData = async () => {	
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      console.log(response.data);
      setData(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })

	};

  useEffect(() => {
    setTimeout(() => {
        fetchData();
    },);
});
	return (
		<div>
      {data && <ImageModel data = {data} />}
		</div>
	);
}    

export default LandingPage