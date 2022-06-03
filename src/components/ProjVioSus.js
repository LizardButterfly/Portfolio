import VioSusImage from '../images/viosus.png';

function Project2() {

    return(
        <div className='hero-section' id='vioSus'>
            <h1>Vio Sustainability</h1>

            <figure><img src={VioSusImage} alt="VioSustainability" /></figure>

            <div>
                <h3>Overview</h3>
                <p>This project involves creating a dashboard that would allow clients to cater their company profile with materials of interest to track, have analytics generated through materials collected over time, and add visibility options to their own clients by allowing linking of accounts to see their associated analytics.</p>            
                <h3>Skills</h3>
                <p>React, Node.js, Express, HTML, CSS, PostgreSQL</p>
            </div>            
        </div>
    )
}

export default Project2