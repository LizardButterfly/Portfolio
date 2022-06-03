import PortfolioImage from '../images/portfolio.png';

function Project3() {

    return(
        <div className='hero-section' id='portfolio'>
            <h1>My Portfolio</h1>

            <figure><img src={PortfolioImage} alt="myPortfolio" /></figure>

            <div>
                <h3>Overview</h3>
                <p>A portfolio website using React that was designed and developed as a platform to showcase the skills required for different projects as a Web Developer. The website is hosted through Vercel.</p>
                
                <h3>Skills</h3>
                <p>React, HTML, SCSS, Bootstrap</p>

                

            </div>
        </div>
    )
}

export default Project3