import React  from "react";
import "../index.css";

const ImageDisplay = ({images}:{images:string[]}) => {
    
    return (
        <>
            {images.map((item , index) => {
            return <img className='images' key={item} src={item} alt='' />
            })}
        </>
    )
}

export default ImageDisplay