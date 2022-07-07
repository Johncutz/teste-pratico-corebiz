import React from "react";
import './Header.css';



import logo from '../../assets/img/Corebiz.png';
import lupa from '../../assets/img/Lupa.png';
import hamburger from '../../assets/img/Hamburger-icon.svg';
import user from '../../assets/img/User.png';

function Header() {
    
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo Corebiz" />
            <input className="header__input" type="text" placeholder="O que você está precisando?" />
            <img className="header__lupa" src={lupa} alt="Lupa" />
            <button className="header__conta" type="button">Minha Conta!</button>
            <img className="header__hamburger" src={hamburger}/>
            <img className="header__user" src={user} />
            <button className="header__carrinho" type="button"></button>
        </header>
    );
}

export default Header;