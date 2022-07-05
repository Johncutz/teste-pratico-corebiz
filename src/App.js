import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Prateleira from "./Components/Prateleira/Prateleira";
import News from "./Components/News/News";
import Footer from "./Components/Footer/Footer";
import api from "./services/api";

import './App.css'

class App extends Component {

  state = {
    store: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({store: response.data})
  }

  render() {

    const {store} = this.state;

    console.log(store)

    return (
      <div>
        <Header />
        <Banner />
        <Prateleira />
        <News />
        <Footer />
      </div>
    );
  }
  }

export default App;