import axios from 'axios';

const SearchBoxAPI = async (desc) => {
    try {
        const response = await axios.get(`https://images-api.nasa.gov/search?description=${desc}&media_type=image`);
        const fetchedData = response.data.collection.items;
        return fetchedData;
    } catch (err) {
        console.log("Error found on SearchBoxAPI",err);
        return null; // or throw an error
    }
}

export default SearchBoxAPI