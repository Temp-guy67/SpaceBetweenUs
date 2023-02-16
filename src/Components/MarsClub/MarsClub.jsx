import React from 'react';
import "./MarsClub.css";
import axios from 'axios';
import { useState,useEffect } from 'react';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

const MarsClub = () => {
    const [data, setData] = useState([]);
    // const interval = 10 * 60 * 1000;
	const fetchData = async () => {	
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY}&page=1`)
        .then((response) => {
            var fethcedData = JSON.stringify(response.data.photos);
            // console.log("fethced data is " + fethcedData + " => " + typeof(fetchedData));
            setData(fethcedData);
            localStorage.setItem("MarsClub1", fethcedData);
        })
        .catch((err)=>{
            console.log(err);
        })

	};
    useEffect(() => {
        if(localStorage.getItem("MarsClub1")){
            var data = localStorage.getItem("MarsClub1");
            // console.log(" local fethced data is " + data + " => " + typeof(data));
            localStorage.setItem("MarsClub1",data);
            setData(data);
        }
        else{
            fetchData();
        }
        // localStorage.clear(); 
    },[]);
    

    return (
        <div className='container' >
            {
                data && <PhotoGallery data = {data}/>
            }
        </div>
    )
}

export default MarsClub