import React from 'react';
import { useState,useEffect } from 'react';
import "./Search.css";
import SearchBoxAPI from '../../APICalls/SearchBoxAPI';


const Search = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [desc, setDesc] = useState("");

  const fetchData = async () => {	
    var fethcedData = await SearchBoxAPI(desc);   
    setData(fethcedData);
  };
    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[desc]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearch = () => {
    var mod = searchInput.replace(" ","%");
    setDesc(mod);
  
  }


    return (
      <div className='containerSearchPage' >
        <h1>Search Box</h1>
        <div className='search-box'  >
          <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
          <button type='submit'  onClick={handleSearch}   className="searchBut"  >Submit</button>

        </div>
        <div className='gallery'>
          {
            data.map((ele) => (
                <div key={ele.data[0].nasa_id} className='gallery-item'>
                    <img src={ele.links[0].href} className='singlePhotoSRC' alt="Issue in loading pHotos" />
                    <div className='overlay'  >
                      <div className='text'  >
                        {ele.data[0].title}
                      </div> 
                      <div className='text2'  >
                        {ele.data[0].date_created.slice(0, 10)}
                      </div>
                      <div className='text3'>
                        {ele.data[0].description}
                      </div> 
                    </div>
                </div>
            ) )
          }
        </div>
      </div>
    )
  }

export default Search