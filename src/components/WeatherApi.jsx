
/* in this component we get the weather data from the API  */
import axios from 'axios';
import { useState, useEffect } from 'react'


/* API urls */
//const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
//const urlPosts = 'https://dummyjson.com/products'

const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=eee79289eb4403839653d02ed4d3536a'

function WeatherApi() {

    /*  Attention .. you must get the array data to work with the map function */

    /* useState for the weather and forcast array.. init value is empty */
    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])



    /* when the component is loaded this hook read the APi data and store it
        in array weather with the command setweather(res.data.weather) */
    useEffect(() => {
        axios.get(urlWeather)
            /*   .then(res => console.log(res.data)) */
            /*   .then(res => console.log(res.data.weather)) */
            .then(res => setWeather(res.data.weather))
    }, [])



    return (

        <div>
            {/* here get the weather from array and show it in the WeatherApi page 
            
            search for:
               weather.main
               weather.description
            */}
            {/* <div>
                <ul>
                    {weather.map((weatherRes, i) => {
                        //console.log(weatherRes)
                        return (
                            <div key={i}>
                                <li className='bg-success text-light'>
                                    <h4>
                                        {weatherRes.main}
                                    </h4>
                                </li>
                                <li className='bg-success text-light'>
                                    <h4>
                                        {weatherRes.description}
                                    </h4>
                                </li>
                            </div>
                        )
                    })}

                </ul>
            </div> */}

            <div>


                {
                    // to read data from an array
                    Object.keys(weather).map((key, i) => (
                        <div key={i}>
                            <h4 className='bg-success text-light'> {weather[i].main}</h4>
                            <h4 className='bg-success text-light'> {weather[i].description}</h4>
                        </div>
                    ))
                }
            </div>




        </div>
    )
}

export default WeatherApi