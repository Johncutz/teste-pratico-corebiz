import React from "react";
import leftArrow from '../../assets/img/Left-Arrow.png';
import rightArrow from '../../assets/img/Right-Arrow.png';
import './Prateleira.css'

function Prateleira() {
    return (
        <section className="prateleira">
            <p className="prateleira__text">Mais Vendidos</p>
            <img className="prateleira__Arrow-left" src={leftArrow} />
            <img className="prateleira__Arrow-right" src={rightArrow} />
        </section>
    )
}
export default Prateleira;