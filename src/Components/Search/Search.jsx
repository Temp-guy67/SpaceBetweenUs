import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "./Search.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [desc, setDesc] = useState("");

  const fetchData = async () => {	
        axios.get(`https://images-api.nasa.gov/search?description=${desc}&media_type=image`)
        .then((response) => {
            var fethcedData = response.data.collection.items;
            // console.log("fetched data is : " + fethcedData);
            setData(fethcedData);
        })
        .catch((err)=>{
            console.log(err);
        })

  };
    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[desc]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearch = () => {
    // console.log(" searchInput : " + searchInput);
    var mod = searchInput.replace(" ","%");
    // console.log(" mod is : " + mod);
    setDesc(mod);
    // console.log(" desc is : " + desc);
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
            // console.log(data)
                          
            data.map((ele) => (
                <div key={ele.data[0].nasa_id} className='gallery-item' >
                    <img src={ele.links[0].href} className='singlePhotoSRC' alt="Issue in loading pHotos" />
                    <div className='overlay'  >
                      <div className='text'  >
                        {ele.data[0].title}
                      </div> 
                      <div className='text2'  >
                        {ele.data[0].date_created}
                      </div> 
                      {/* <div className='text'  >
                        {ele.data[0].description}
                      </div> */}


                    </div>
                </div>
            ) )
            }
        </div>
      </div>
    )
  }

export default Search