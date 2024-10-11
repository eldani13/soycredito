import React from "react";
import Banner from '../../img/Banner.png'

function Slider() {
    return(
        <div className=""> 
            <img src={Banner} alt="Banner" className="w-full h-96 object-cover" />
        </div>
    )
}

export default Slider;