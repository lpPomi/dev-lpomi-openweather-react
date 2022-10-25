
import Navbar from './components/Navbar'

import axios from 'axios';

import { useState } from 'react'

import WeatherForm from './components/WeatherForm'




function App() {



  const url1 = 'https://api.openweathermap.org/data/2.5/weather?appid=eee79289eb4403839653d02ed4d3536a&lang=en&q='

  let urlWeather = ''

  const url2 = 'https://api.openweathermap.org/data/2.5/forecast?appid=eee79289eb4403839653d02ed4d3536a&lang=en&q='

  let urlForecast = ''

  const [weather, setWeather] = useState([]);


  /* get the city name from the WeatherForm component */
  const getLocation = async (cityName) => {



    /* to visualize the spinner */
    //setLoading(true);
    /* contains the city information */
    //setLocation(cityName);


    // here we receive from component WeatherForm the city name 
    /* console.log('Selected City =', cityName) */
    urlWeather = url1 + cityName
    console.log(urlWeather)
    /* getWeatherAndForecast(urlWeather) */

    await fetch(urlWeather).then((response) => {

      if (!response.ok) throw { response }
      return response.json();
    }).then((weatherData) => {
      console.log(weatherData);
      setWeather(weatherData);
    }).catch(error => {
      console.log(error);
      /* setLoading(false);
      setShow(false); */
    });

    /* fetch(urlWeather)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error)); */

  }






  /* get the weather and forecast from the API data */
  const getWeatherAndForecast = async (urlWeather) => {
    try {
      const result = await axios.get(urlWeather);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  /* 
  async function getWeatherAndForecast(urlWeather) {
  
    try {
      const result = await axios.get(urlWeather);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  } */

  // or with fetch
  /* 
  const getWeatherAndForecast = async (urlWeather) => {
    fetch(urlWeather)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  } */

  /* const getWeatherAndForecast = async (urlWeather) => {
    await fetch(urlWeather).then((response) => {
      if (!response.ok) throw { response }
      return response.json();
    }).then((weatherData) => {
      console.log(weatherData);
      setWeather(weatherData);
    }).catch(error => {
      console.log(error);
      setLoading(false);
      setShow(false);
    });
  } */



  /* define the useState hooks to get the variable content */

  /*   const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    // to use the spinner 
    const [loading, setLoading] = useState(false);
  
    //to show the weather cards 
    const [show, setShow] = useState(false);
    // to communicate with the form 
    const [location, setLocation] = useState("");
   */



  return (


    <div className="App">

      <Navbar />
      {/* 
      <button
        onClick={async (fetchData) => {
          // here comes the function
          try {
            const result = await axios.get(url1 + 'London');
            console.log(result.data);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        get data axios
      </button> */}

      <WeatherForm
        newLocation={getLocation}
      />

      {/*   <WeatherCard /> */}
    </div>

  )

}
export default App

