
import Navbar from './components/Navbar'

import axios from 'axios';
/* import Form from './components/Form'
import WeatherCard from './components/WeatherCard'
import WeatherApi from './components/WeatherApi' */

import WeatherForm from './components/WeatherForm'

const url1 = 'https://api.openweathermap.org/data/2.5/weather?appid=eee79289eb4403839653d02ed4d3536a&lang=en&q='

let urlWeather = ''


/* get the city name from the WeatherForm component */
const getLocation = (cityName) => {
  // here we receive from component WeatherForm the city name 
  console.log('Selected City =', cityName)
  urlWeather = url1 + cityName
  console.log(urlWeather)
  getWeatherAndForecast(urlWeather)

}


/* get the wgeather and forecast from the API data */
const getWeatherAndForecast = async (urlWeather) => {
  try {
    const result = await axios.get(urlWeather);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

/* 
async function doSomethingAsynchronous(urlWeather) {

  try {
    const result = await axios.get(urlWeather);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
} */




function App() {


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

