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
      var fetchedData = response.data;
      console.log(fetchedData + " => " + typeof(fetchedData));
      setData(fetchedData);
      localStorage.setItem("LandingPage_data" , fetchedData);
      localStorage.setItem("LandingPage_time" , Date.now());
    })
    .catch((err)=>{
      console.log(err);
    })

	};

  useEffect(() => {
    if(localStorage.getItem("LandingPage_data")){
      var data = localStorage.getItem("LandingPage_data");
      setData(data);
    }
    else{
      fetchData();
    }
    localStorage.clear();
},[]);
	return (
		<div>
      {data && <ImageModel data = {data} />}
		</div>
	);
}    

export default LandingPage