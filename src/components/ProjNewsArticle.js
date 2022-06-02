import newsArticleImage from '../images/newsarticle.png';

function Project1() {

    return(
        <div className='hero-section' id='newsArticle'>
            <h1>News Article</h1>

            <figure><img src={newsArticleImage} alt="Article" /></figure>

            <div>
                <h3>Overview</h3>
                <p>This Web App was built using React. It displays a collection of news articles which sources it's data from a JSON object to simulate calling from a news API. The project goal was to create a mockup of a news article website.</p>

                <h3>Skills</h3>
                <p>HTML, CSS, SCSS, ReactJS</p>
            </div>            
        </div>
    )
}

export default Project1