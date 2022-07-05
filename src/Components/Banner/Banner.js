import React from "react";
import './Banner.css';

import bgBlack from '../../assets/img/Banner.png';
import image from '../../assets/img/Banner-image.png'
import slider from '../../assets/img/Slider.png'

function Banner() {
    return (
        <section className="Banner">
            <img className="Banner__img" src={image} alt="sla"/>
            <img className="Banner__bg" src={bgBlack} />
            <img className="Banner__slider" src={slider} />
            <p className="Banner__text">Olá, o que você está buscando?<br/><span className="Banner__text-Bigger">Criar ou migrar seu e-commerce?</span></p>
        </section>
    )
}

export default Banner;