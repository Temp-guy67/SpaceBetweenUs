/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState,useEffect } from 'react';
import NewsAPI from '../../APICalls/NewsAPI';
import NewsModel from './NewsModel';
import "./News.css";

const News = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const prev = "<";
    const next = ">";

	const fetchData = async () => {	
        const fetchedData = await NewsAPI(page);
        setData(fetchedData);
        localStorage.setItem(("NewsPage" + page) , JSON.stringify(fetchedData));
	};

    useEffect(() => {
        console.log(" DATA IN USEEFFECT");
        if(localStorage.getItem("NewsPage" + page)){
            const cacheData = localStorage.getItem("NewsPage" + page);
            const data =  JSON.parse(cacheData);
            setData(data);
        }
        else{
            fetchData();
        }
        // localStorage.clear();
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
            <div className='newsPageContainer' >
                Working test
                <div>
                    <NewsModel data = {data}/>
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

export default News;