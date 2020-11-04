import Axios from 'axios';
import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import CovidChart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css';
import {fetchCountryData} from './api/index'


const  url = "https://covid19.mathdro.id/api";

class App extends Component {
  
  state={
    data: {},
    country: ''
  }

  async componentDidMount(){  
    const data= await Axios(url);
    this.setState({
      data
    })
    //  console.log(this.state.data.data)
  }

  handleCountryChange = async (selectedCountry) => {
    const data= await fetchCountryData(selectedCountry) ;
    this.setState({
      data,
      country: selectedCountry
    })
  } 


   render(){
      const data= this.state.data.data;
      const country= this.state.country;
    return (
      <div className={styles.App}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <CovidChart data={data} country={country} /> 
        
      </div>
    );
  }
 
}

export default App;
