import React from 'react';
import "./LandingPage.css";
import { useState, useEffect } from 'react';
import ImageModel from './ImageModel';
import FirebaseHandler from '../../FirebaseConfig/Firebasehandler';
import fetchDataFromAPI from '../../APICalls/LandingPageAPI'

const LandingPage = () => {
  const [data, setData] = useState([]);

  // to get data to fill the feed
  const  getDataFromFirebase= async ()=> {
    let objArray = []
    objArray = await FirebaseHandler("read","");
    setData(objArray);
    if(objArray) {
      localStorage.setItem("feedData", JSON.stringify(objArray))
    }
  }


  useEffect(() => {
    const dateObj = new Date();
    const today = dateObj.getDate();
    var lastDBUpdateTime = localStorage.getItem("lastDBUpdateTime");

    // eslint-disable-next-line
    if (today != lastDBUpdateTime)
    {
      fetchDataFromAPI();
      getDataFromFirebase();
      localStorage.setItem("lastDBUpdateTime", today);
    }
    else {
      const cacheData = localStorage.getItem("feedData");
      const data =  JSON.parse(cacheData);
      const rev = data.reverse();
      setData(rev);
    }
    // getDataFromFirebase();
    // localStorage.clear();  
  }, [])
  
	return (
		<div className='landingPageContainer'>
      <div className='mainContent'  > 
        <div >
          {
          data.map((ele , index) => {
            return (<ImageModel key = {index} ele = {ele} />)
          })}
        </div>
      </div>
		</div>
	);
}    

export default LandingPage;