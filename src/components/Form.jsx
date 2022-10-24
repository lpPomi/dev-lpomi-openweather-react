

import { useState } from 'react'


function Form() {

    const [city, setCity] = useState('')



    /* create the function handleSubmit */
    const handleSubmit = (event) => {
        /* prevent to refresh the website */
        event.preventDefault();
        //console.log(city)
        /* show as json */
        console.log({ city })

        /* if city is empty ... do nothing */
        /*     if (city === '' || !city) return */

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
                    {/*   <label htmlFor="city">City</label> */}
                    <input className='form-control' onChange={getCity} type="text" value={city} placeholder="city" />
                    {/* <input type="submit" value="Search" className="btn btn-primary input-group-text" /> */}
                    <button className="btn btn-primary input-group-text" type="submit">
                        Search
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Form