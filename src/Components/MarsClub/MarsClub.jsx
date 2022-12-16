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
            console.log(response.data.photos);
            setData(response.data.photos);
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
        <div className='container' >
            {
                data && <PhotoGallery data = {data}/>
            }
        </div>
    )
}

export default MarsClub