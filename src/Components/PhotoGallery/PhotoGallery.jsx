import React from 'react'
import "./PhotoGallery.css";

const PhotoGallery = ({data}) => {
    // console.log(" photo gallery data is : " + data.photos + " type==========> " +  typeof(data.photos));
    
    return(
        <>
            {/* { data.forEach(function(obj1) { console.log(obj1.id); })} */}
            <div className='container'>
                {
                    data.map((ele) => (
                        <div key={ele.id} className='gallery' >
                            <img src={ele.img_src} className='singlePhoto' alt="" />
                        </div>
                    ) )
                }
            </div>
        </>
                // <div key= {ele.id} >
                //     <img className="photo" src={ele.img_src} alt="" />
                // </div>
    )
}

export default PhotoGallery