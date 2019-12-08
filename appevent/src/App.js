import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  token = 'WFW7GL5D3YXHTNOZDN2C&locale'

  getCategories = async () => {
    await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token}=es_ES`)
    .then((response) => {
      console.log('response', response)
      
      return response.json()
    })
    .then((res) => {
      this.setState({ categories: res.categories })
    })
  }
  componentDidMount() {
    this.getCategories()
  }
  render () {
    const { categories } = this.state
    console.log(categories);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
