
import { useState } from 'react'



function WaetherForm({ newLocation }) {

    const [city, setCity] = useState('')


    /* create the function handleSubmit */
    const handleSubmit = (event) => {
        /* prevent to refresh the website */
        event.preventDefault();

        /* show as json */
        console.log({ city })

        /* if city is empty ... do nothing */
        if (city === '' || !city) return
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
                <div className='input-group mb-3 mx-auto'>
                    <input className='form-control' onChange={getCity} type="text" value={city} placeholder="city" />

                    {/*  <input type="submit" value="Search" className="btn btn-primary input-group-text" /> */}

                    <button type="submit" className="btn btn-primary input-group-text">
                        Search
                    </button>
                </div>

            </form>
        </div>
    )
}

export default WaetherForm