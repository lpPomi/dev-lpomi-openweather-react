

import Spinner from './Spinner'

function WeatherCard({ showData, loadingData, weather, forecast }) {

    /* const cityImage = 'https://images.pexels.com/photos/36789/shanghai-oriental-pearl-tv-tower-night-view-people-s-republic-of-china.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' */

    const cityImage = 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1600'


    /*     console.log('in Card', loadingData) */
    console.log('in Card', forecast)

    /* calculate the date from today */
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    /* to get the weather icon from openweathermap.org */
    var url = "";
    var iconUrl = "";

    /* to get the forecast in hours icon from openweathermap.org */
    var iconUrl3H = "";
    var iconUrl6H = "";
    var iconUrl9H = "";


    /* to get the forecast dates in hours icon from openweathermap.org */
    var forecastDate3H = "";
    var forecastDate6H = "";
    var forecastDate9H = "";


    /*   to show the spinner */
    if (loadingData) {
        return <Spinner />
    }


    if (showData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        console.log('****************')
        console.log(iconUrl)



        console.log('#############')
        console.log(iconUrl3H)

        iconUrl3H = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6H = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9H = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3H = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6H = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9H = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
    }




    return (

        <div className='container mt-5 '>

            {/*    create a ternary operator with the boolean showData
        (condition ? exprIfTrue : exprIfFalse)
        (person ? person.name : "stranger")  
        
        here:
         showData === true ? () : ()

 <div className="card mx-auto text-light bg-secondary">


        */}

            {
                showData === true ? (

                    /* show card */


                    <div className="card mx-auto bg-dark text-light ">

                        {/* create a grid with 12 columns */}
                        <div className="row g-0">

                            {/* take 4 columns from the grid */}
                            <div className="col-md-4">
                                {/*    <p>image 4 cols</p> */}
                                <h5 className="card-city"> {weather.name} </h5>
                                <p className="card-date">{date}</p>
                                <h2 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)} ºC</h2>
                                <p className="card-desc"><img src={iconUrl} alt="icon" />{weather.weather[0].description}</p>
                                <img src={cityImage} className="img-fluid rounded-start imgWidth" alt=".." />
                            </div>

                            {/* take 8 columns from the grid */}
                            <div className="col-md-8 ">
                                {/*    <p>text 8 cols</p> */}
                                <div className="card-body text-start mt-2">
                                    <h5 className="card-text">Temp max: {(weather.main.temp_max - 273.15).toFixed(1)} ºC</h5>
                                    <h5 className="card-text">Temp min: {(weather.main.temp_min - 273.15).toFixed(1)} ºC</h5>
                                    <h5 className="card-text">feels like: {(weather.main.feels_like - 273.15).toFixed(1)} ºC</h5>
                                    <h5 className="card-text">Humidity: {weather.main.humidity}%</h5>
                                    <h5 className="card-text">Wind speed: {weather.wind.speed} m/s</h5>
                                </div>
                                <hr />
                                {/* create one row with 3 columns and same size  */}
                                <div className="row mt-4">
                                    <div className="col">
                                        <p>{forecastDate3H}h</p>
                                        <p className="description"><img src={iconUrl3H} alt="icon" />{forecast.list[1].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate6H}h</p>
                                        <p className="description"><img src={iconUrl6H} alt="icon" />{forecast.list[2].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate9H}h</p>
                                        <p className="description"><img src={iconUrl9H} alt="icon" />{forecast.list[3].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                    </div>


                                </div>







                            </div>

                        </div>

                    </div>

                ) : (



                    /* dont show card */
                    <h3 className="card mx-auto text-light bg-danger">No Data</h3>
                )

            }
        </div>
    )
}

export default WeatherCard