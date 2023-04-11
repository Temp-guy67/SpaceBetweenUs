/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import "./MarsClub.css";
import { useState,useEffect } from 'react';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import MarsClubAPI from '../../APICalls/MarsClubAPI';

const MarsClub = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const prev = "<";
    const next = ">";

	const fetchData = async () => {	
        const fetchedData = await MarsClubAPI(page);
        setData(fetchedData);
        localStorage.setItem(("MarsPage" + page) , JSON.stringify(fetchedData));
	};

    useEffect(() => {
        if(localStorage.getItem("MarsPage" + page)){
            const cacheData = localStorage.getItem("MarsPage" + page);
            const data =  JSON.parse(cacheData);
            setData(data);
        }
        else{
            fetchData();
        }
    },[page]);
    
    const handleNextPage = () => {
        setPage(page => page + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handlePrevPage = () => {
        if(page > 1){
            setPage(page => page - 1 );
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else{
            alert("KUTTAR BACCHA!!!!! VALO HYE JA");
        }
        
    }

    return (
        <>
            <div className='containerMarsClub' >
                <div className='photogallery'>
                    <PhotoGallery data = {data}/>
                </div>

                

                <div className='button'>
                    <div >
                        <button onClick={handlePrevPage}> <p>{prev}</p></button>
                    </div>
                    <div >
                        <button ><p>{page}</p></button>
                    </div>
                    <div>
                        <button onClick={handleNextPage}  ><p>{next}</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarsClub