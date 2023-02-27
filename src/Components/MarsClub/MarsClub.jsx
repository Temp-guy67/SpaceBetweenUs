/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import "./MarsClub.css";
import axios from 'axios';
import { useState,useEffect } from 'react';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

const MarsClub = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    // const interval = 10 * 60 * 1000;
	const fetchData = async () => {	
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then((response) => {
            var fethcedData = response.data.photos;
            setData(fethcedData);
        })
        .catch((err)=>{
            console.log(err);
        })

	};
    useEffect(() => {
        fetchData();
    },[page]);
    
    const handleNextPage = () => {
        setPage(page+1);
        // console.log("WORKING");
        alert("WORKING");
    }

    const handlePrevPage = () => {
        if(page > 1){
            setPage(page+1);
        }
        else{
            alert("KUTTAR BACCHA!!!!! VALO HYE JA");
        }
        
    }

    return (
        <>
            <div className='containerMarsClub' >
                <div className='photogallery'>
                    {
                        data && <PhotoGallery data = {data}/>
                    }
                </div>

                <div className='button'>
                    <div >
                        <button onClick={handlePrevPage}  > PREV</button>
                    </div>
                    <div>
                        <button onClick={handleNextPage}  >NEXT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarsClub