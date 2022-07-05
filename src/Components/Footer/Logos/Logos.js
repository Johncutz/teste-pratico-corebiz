import React from "react";
import './Logos.css'

import vtexIcon from '../../../assets/img/Vtex-icon.png';
import corebizIcon from '../../../assets/img/Corebiz-icon.png'

function Logos() {
    return(
        <div className="Logos">  
                <div className="Logos__grupo1">
                    <p className="Logos__text1">Powered by</p>
                    <img className="Logos__icon1" src={vtexIcon}/>
                </div>
                <div className="Logos__grupo2">
                    <p className="Logos__text2">Created by</p>
                    <img className="Logos__icon2" src={corebizIcon}/>
                </div>
        </div>
    )
}

export default Logos;