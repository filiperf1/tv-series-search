import React, {Component} from "react";
import  Intro  from "../../components/Intro";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";


class Series extends Component{
    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }
      
      onSeriesInputChange = input => {   
        this.setState({seriesName: input.target.value, isFetching: true});
        fetch(`https://api.tvmaze.com/search/shows?q=${input.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({series: json, isFetching: false}))
      }


      render(){
          const { series, seriesName, isFetching} = this.state;
          return(
              <div>
                  <div>
                     <Intro message="Here you can find all your most loved series"/>
                      <input 
                      value={seriesName} 
                      type="text" 
                      onChange={this.onSeriesInputChange}/>
                  </div>
                  {
                  !isFetching && series.length === 0 && seriesName.trim() === ''
                  &&
                   <p>Please enter a series name!</p>
                  }
                  {
                      !isFetching && series.length === 0 && seriesName.trim() !== ''
                      &&
                      <p>No tv series found!</p>
                  }
                  {
                      isFetching && <Loader/>
                  }
                  {
                      !isFetching && <SeriesList list={this.state.series}/>
                  }
                  
              </div>
          )
      }

}

export default Series;