import React from 'react'
import "./PhotoGallery.css";

const PhotoGallery = ({data}) => {
    console.log("data is : " + data);
    return(
        <>
            {data.map((ele) => (
                <div id= {ele.id} >
                    <img className="photo" src={ele.img_src} alt="" />
                </div>
            ) )}
        </>
    )
}

export default PhotoGallery