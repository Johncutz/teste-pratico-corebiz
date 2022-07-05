import React from "react";
import './Contato.css';

import emailIcon from '../../../assets/img/Email-Icon.png';
import phoneIcon from '../../../assets/img/Phone-icon.png';

function Contato() {
    return (
        <div className="Contato">
            <div className="Contato__grupo1">
                <button className="Contato-button1">ENTRE EM CONTATO</button>
                <img className="Contato__icon1" src={emailIcon} />
            </div>
            <div className="Contato__grupo2">
                <button className="Contato-button2">FALE COM O NOSSO CONSULTOR ONLINE</button>
                <img className="Contato__icon2" src={phoneIcon} />
            </div>
        </div>
    )
}

export default Contato;