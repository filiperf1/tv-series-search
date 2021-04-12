import React, {Component} from 'react'
import './App.css';
import Intro from "./components/Intro";

//TUTORIAL PAUSE AT 22:36

class App extends Component {
  state = {
    series: []
  }

  componentDidMount (){
    const series = ["Vikings", "Game of thrones"];

    setTimeout(() => {
      this.setState({series: series});
    }, 2000);

  }

  render(){
    return (
    <div className="App">
      <header className="App-title">
        <h1>
          Search Tv Series
        </h1>
      </header>
      <Intro message="Here you can find all your most loved series"/>
      <p>The length of series array is - {this.state.series.length}</p>
    </div>
    );
  }
}

export default App;
