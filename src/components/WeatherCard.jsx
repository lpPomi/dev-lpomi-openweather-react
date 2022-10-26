

import Spinner from './Spinner'

function WeatherCard({ showData, loadingData, weather, forecast }) {

    const cityImage = 'https://images.pexels.com/photos/36789/shanghai-oriental-pearl-tv-tower-night-view-people-s-republic-of-china.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    /*     console.log('in Card', loadingData) */

    if (loadingData) {
        return <Spinner />
    }

    return (


        <div className='container mt-5 bg-warning'>

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
                    <div className="card mx-auto ">



                        {/* create a grid with 12 columns */}
                        <div className="row g-0">

                            {/* take 4 columns from the grid */}
                            <div className="col-md-4 bg-info text-light">
                                <h2>here comes the image 4 columns</h2>
                            </div>

                            {/* take 8 columns from the grid */}
                            <div className="col-md-8 bg-info text-light">
                                <h2>here comes the text 8 columns</h2>
                            </div>

                        </div>



                    </div>
                ) : (



                    /* dont show card */
                    <h3 className="card mx-auto text-light bg-secondary">No Data</h3>
                )

            }
        </div>
    )
}

export default WeatherCard