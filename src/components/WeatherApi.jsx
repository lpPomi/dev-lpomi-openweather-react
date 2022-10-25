
/* in this component we get the weather data from the API  */
import axios from 'axios';
import { useState, useEffect } from 'react'


/* API urls */
//const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
//const urlPosts = 'https://dummyjson.com/products'

/* const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=eee79289eb4403839653d02ed4d3536a' */


let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=eee79289eb4403839653d02ed4d3536a&lang=en&q=london'

let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=eee79289eb4403839653d02ed4d3536a&lang=en&q=london'


function WeatherApi({ loc, filled }) {

    /*  Attention .. you must get the array data to work with the map function */

    /* useState for the weather and forcast array.. init value is empty */
    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])


    /* if (typeof loc === 'undefined') {
        console.log('loc undefined ')
    } else if (Object.values(loc) === 'London') {
        console.log('loc = London')

        useEffect(() => {
            axios.get(urlWeather)
                .then(res => console.log(res.data))

                .catch((error) => console.error(error));
        }, [])

    } */


    function readApi() {
        console.log('in ReadApi!!! ##########')
        useEffect(() => {
            axios.get(urlWeather)
                .then(res => console.log(res.data))

                .catch((error) => console.error(error));
        }, [])

    }


    /*     console.log({ loc }) */


    /* when the component is loaded this hook read the APi data and store it  in the weather array with the command setWeather(res.data.weather) */



    /*  create the function getWeather to get the data from api 
        the parameter loc comes from the Form component.
    */


    /* 
        const getWeather = async () => {
     
            console.log('in getWeather')
            console.log(loc)
     
     
            urlWeather = urlWeather + loc
     
            console.log(urlWeather)
     
            // here comes the function
            try {
                const result = await axios.get(urlWeather);
                console.log(result.data);
                loc = ''
            } catch (error) {
                console.error(error);
            }
        } */







    return (

        <div>
            {/* 
            {filled &&
                <div>
                    <h2>HUUUUU</h2>
                    {readApi}
                </div>

            } */}

            {/*     <h1 className='text-light'  >Hi </h1> */}
            {/*  {
                <button onClick={getWeather}>
                    get weather
                </button>
            }
 */}




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

                {/* 
                {
                    // to read data from an array
                    Object.keys(weather).map((key, i) => (
                        <div key={i}>
                            <h4 className='bg-success text-light'> {weather[i].main}</h4>
                            <h4 className='bg-success text-light'> {weather[i].description}</h4>
                        </div>
                    ))
                } */}
            </div>




        </div>
    )
}

export default WeatherApi