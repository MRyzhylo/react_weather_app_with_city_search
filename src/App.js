import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { fetchWeather } from './actions/fetchWeather';

function App() {

  const[city, setCity] = useState('');

  const weatherSelector = useSelector(state => state);
  const dispatch = useDispatch();
  const getWeatherInfoAction = city => dispatch(fetchWeather(city));
  
  useEffect(()=>{
    getWeatherInfoAction();
  },{});

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if(city === '') {
      console.log('Enter city name');
    } else {
      getWeatherInfoAction(city);
    }
  }

  
  let details = '';
  
    if(weatherSelector.weatherinfo && weatherSelector.weatherinfo.sys) {
      let iconUrl =`http://openweathermap.org/img/wn/${weatherSelector.weatherinfo.weather[0].icon}@2x.png`
      details = 
      <div>
        <h4>Weather Details</h4>
        <p> {weatherSelector.weatherinfo.name}, <span> {weatherSelector.weatherinfo.sys.country} </span> </p>
        <p> {parseInt(weatherSelector.weatherinfo.main.temp)} &deg;C </p>
        <img src={iconUrl} alt="weather-icon" />
        <p> {weatherSelector.weatherinfo.weather[0].main} </p>
      </div>
    } else {
      details =
    <p> You need to tape city name or this city doesn`t exist </p>
    }


  return (
    <React.Fragment>
    <div className="App">
      <h1>React-redux weather app</h1>
    
    <form onSubmit={getWeatherInfo}>
      <div className='control'>
        <input type='text' name='name' placeholder='Enter city name' onChange={(e)=>setCity(e.target.value)}/>
      </div>
        <input type='submit' value='Check Weather' />
    </form>
    {details}
    </div>  
    </React.Fragment>
  );
}

export default App;
