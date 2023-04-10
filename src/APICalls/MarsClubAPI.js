import axios from 'axios';

const MarsClubAPI = async (page) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        const fetchedData = response.data.photos;
        return fetchedData;
    } catch (err) {
        console.log("Error found on MarsClubAPI",err);
        return null; // or throw an error
    }
}

export default MarsClubAPI;