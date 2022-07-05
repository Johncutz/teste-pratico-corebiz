import React from "react";
import './News.css'

function News() {
    return (
        <section className="News">
            <p className="News__text">Participe de nossas news com promoções e novidades!</p>
            <input className="News__input-name" type="text" placeholder="Digite seu nome" />
            <input className="News__input-email" type="text" placeholder="Digite seu email" />
            <input className="News__input-submit" type="submit" value="Eu quero!" />
        </section>
    )
}

export default News;