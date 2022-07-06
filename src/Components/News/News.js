import React, { Component } from "react";
import axios from "axios";
import './News.css'

class News extends Component {

    state = {
        name: '',
        email: ''
      }

      handleChangeName = event => {
        this.setState({ name: event.target.value });
      }

      handleChangeEmail = event => {
        this.setState({ email: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name,
          email: this.state.email,
        };
        
        axios.post(`https://corebiz-test.herokuapp.com/api/v1/newsletter`,  user )
          .then(res => {
            console.log(res);
            console.log(res.data);
            alert('Cadastrado com Sucesso!');
          })
      }

    render() {
        return (
            <section className="News">
                <p className="News__text">Participe de nossas news com promoções e novidades!</p>
                <form onSubmit={this.handleSubmit}>
                        <input className="News__input-name" type="text" placeholder="Digite seu nome" onChange={this.handleChangeName} />
                        <input className="News__input-email" type="text" placeholder="Digite seu email" onChange={this.handleChangeEmail} />
                    <button className="News__input-submit" type="submit">Eu quero!</button>
                </form>
            </section>
        )
    }
}

export default News;