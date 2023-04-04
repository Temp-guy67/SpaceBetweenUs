import axios from 'axios';
import FirebaseHandler from "../FirebaseConfig/Firebasehandler.js"


const fetchDataFromAPI = async () => {	
  console.log(" in fetchDataFromAPI ");
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      var fetchedData = response.data;
      FirebaseHandler("add",fetchedData);
    })
    .catch((err)=>{
      console.log("Error in fetchDataFromAPI ",err);
    })
};

export default fetchDataFromAPI;