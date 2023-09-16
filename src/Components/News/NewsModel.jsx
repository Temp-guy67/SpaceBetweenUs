import React from 'react';
import "./News.css";

const NewsModel = ({data}) => {
  console.log(" URL LENGTH : ", data.length);
  return (
    <div >
      NEWSMODEL
      {
        data.map((ele) => (
          <div key={ele.id} >
              <div  className='newscard'>
                  <img src={ele.urlToImage} alt="" />
                  <div className="card-content">
                      <h2 className="card-title">{ele.title}</h2>
                      <p className="card-date">Status : {ele.publishedAt}</p>
                      <div className='description'>
                          <p className="card-date">{ele.description}</p>
                      </div>
                  </div>
              </div>
          </div>
      ))
      }
    </div>
  )
}

export default NewsModel;