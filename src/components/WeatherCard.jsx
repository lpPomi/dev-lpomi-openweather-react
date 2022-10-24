

function WeatherCard() {
    return (

        <div className="container  bg-warning">
            {/* define the card */}
            <div className="card mx-auto  text-light">

                {/* create a grid with 12 columns */}
                <div className="row g-0">
                    {/* take 4 columns from the grid */}
                    <div className="col-md-4 bg-info">
                        <h2>4 clolumns</h2>
                        {/* <img src="https://robohash.org/SW1.png?set=set1" className="imgWidth" alt="image" /> */}
                        <img src="https://images.pexels.com/photos/36789/shanghai-oriental-pearl-tv-tower-night-view-people-s-republic-of-china.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rouded-start" alt="..." />
                    </div>
                    {/* take 8 columns from the grid */}
                    <div className="col-md-8 bg-info">
                        <h2>8 clolumns</h2>

                        <div className="card-body text-start mt-2">
                            <h5 className="card-title">Weather from City</h5>
                            <p className="card-text">Some text</p>

                        </div>
                    </div>
                </div>



            </div>
        </div >
    )
}

export default WeatherCard