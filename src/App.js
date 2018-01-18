import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let url = "https://blab.veb.co.nz/_designs/nested_assets/new-dcc-design-nested-assets/dcc-v7-refresh-nested-assets/content-via-ajax/road-cond-temp-json"
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson.results })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dunedin Weather</h1>
        </header>
        <ul>
        {this.state.data.map((value, key) => {
          //console.log(value.attributes)
          return <li key={key}>{value.attributes.Location} is {value.attributes.Air_Temp}°</li>
        })}
        </ul>
      </div>
    );
  }
}

export default App;
