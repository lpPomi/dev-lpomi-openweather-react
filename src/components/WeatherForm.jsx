
import { useState } from 'react'


import axios from 'axios';

function WaetherForm({ newLocation }) {

    const [city, setCity] = useState('')

    /*     const [formFilled, setFormFilled] = useState(false) */



    /*   function createCity() {
          setCity('London')
          setFormFilled(true)
          console.log('city  = ', city)
          console.log(formFilled)
      }
   */

    /* create the function handleSubmit */
    const handleSubmit = (event) => {
        /* prevent to refresh the website */
        event.preventDefault();
        //console.log(city)
        /* show as json */
        /* console.log({ city }) */
        /*  here the call the createCity function with the parameter city */
        /* createCity() */

        /* setCity('London')
        setFormFilled(true) */
        /*  Object.values(city); */
        /*  console.log('city  = ', city)
         console.log(formFilled) */
        /* if city is empty ... do nothing */
        /*     if (city === '' || !city) return */
        newLocation(city);

    }



    // to save the city into the city variable using setCity
    const getCity = (e) => {
        setCity(e.target.value)
        //console.log(e.target.value);
    };



    return (

        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div >
                    <input className='form-control' onChange={getCity} type="text" value={city} placeholder="city" />
                </div>
                <div className="clearfix"></div>
                <input type="submit" value="Search" className="btn btn-primary input-group-text" />
            </form>


            {/* <WeatherApi
                city={city}
                formFilled={formFilled}
            /> */}





            {/*      {console.log(city)} */}

            {/*  <WeatherApi loc={city} /> */}
            {/*    <WeatherApi city={city} />
 */}

        </div>
    )
}

export default WaetherForm