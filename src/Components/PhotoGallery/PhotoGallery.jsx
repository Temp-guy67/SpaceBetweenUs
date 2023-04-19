import React from 'react'
import "./PhotoGallery.css";

const PhotoGallery = ({data}) => {
    
    return(
        <>
            <div className='container'>
                {
                    data.map((ele) => (
                        <div key={ele.id} className='card' >
                            <div className='cardContainer'>

                                <img src={ele.img_src} alt="" />
                                <div className="card-content">
                                    <h2 className="card-title">Rover : {ele.rover.name} ({ele.camera.name})</h2>
                                    <div className='description'>
                                        <p className="card-date">Earth Date : {ele.earth_date}</p>
                                        <p className="card-date">Status : {ele.rover.status}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default PhotoGallery