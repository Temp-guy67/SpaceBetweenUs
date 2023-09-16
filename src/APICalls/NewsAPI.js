import axios from 'axios';

const NewsAPI = async (page) => {
    try {
        
        const response = await axios.get(`https://newsapi.org/v2/everything?q=space&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}`);
        const fetchedData = response.data.articles;
        console.log(" API CALLED " + JSON.stringify(fetchedData));
        return fetchedData;
    } catch (err) {
        console.log("Error found on NewsAPI",err);
        return null; // or throw an error
    }
}

export default NewsAPI;