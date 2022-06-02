import Calculator from '../images/calculator.png';

function Project3() {

    return(
        <div className='hero-section' id='portfolio'>
            <h1>React Movie App</h1>

            <figure><img src={Calculator} alt="Article" /></figure>

            <div>
                <h3>Overview</h3>
                <p>A movie app that displays a list of new movies currently showing in theates. Movies can be filtered by genre and each movie has their own page to display its overview and rating provided by The Movie Database. The database is aquired by using The Movie Database API which updates its information every 24 hours.</p>
                
                <h3>Skills</h3>
                <p>React, Node.js, Express, HTML, CSS</p>

                

            </div>
        </div>
    )
}

export default Project3