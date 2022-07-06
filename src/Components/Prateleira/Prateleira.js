import React from "react";
import './Prateleira.css';

import rightArrow from '../../assets/img/Right-Arrow.png';
import leftArrow from '../../assets/img/Left-Arrow.png';
import flag from '../../assets/img/Flag.png';
import star1 from '../../assets/img/1star.png';
import star2 from '../../assets/img/2stars.png';
import star3 from '../../assets/img/3stars.png';
import star4 from '../../assets/img/4stars.png';
import star5 from '../../assets/img/5stars.png';

const Prateleira = (props) => {


    return (
        <section className="prateleira">
            <p className="prateleira__text">Mais Vendidos</p>
                    <img className="prateleira__Arrow-left" src={leftArrow} />
                    <img className="prateleira__Arrow-right" src={rightArrow} />
            {props.store.map((store, index) => (
                <div className="prateleira__itens" key={store.productId}>
                    <img className={ store.productId  == 2 || 3 ? 'show' : 'hidden'} src={flag} />
                    <img className="prateleira__img" src={store.imageUrl} />
                    <p className="prateleira__name">{store.productName}</p>
                   
                    <img id={store.star} />
                    <p className="prateleira__price">por R$ {store.price}</p>
                    <button className="prateleira__button" type="button">COMPRAR</button>
                </div>
            ))}
        </section>
    )
}
export default Prateleira;