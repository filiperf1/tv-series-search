import React, {Component} from 'react'
import './App.css';
import Main from "../Main"
import 'whatwg-fetch';
//TUTORIAL PAUSE AT 22:36

class App extends Component {
  

  render(){
    return (
    <div className="App">
      <header className="App-title">
        <h1>
          Search Tv Series
        </h1>
      </header>
      <Main/>
    </div>
    );
  }
}

export default App;
