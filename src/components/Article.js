import ReactMovieImage from '../images/reactmovieapp.png';
import VioSusImage from '../images/viosusResize.png';
import NewsArticleImage from '../images/newsarticleResize.png';
import { Row, Col } from "react-bootstrap";



function Article() {

    return(
        <><h3>Some Things I've Built</h3>
        <Row className="show-grid mt-4 mb-5">
            <Col lg={6}>
                <section className="article">
                    <article>
                        <figure><img src={NewsArticleImage} alt="NewsArticle" /></figure>
                        <div>
                            <h4>News Article</h4>
                            <p className='mt-3 mb-5'>A news website </p>
                            <a href="ProjPage#newsArticle">Read More</a>
                        </div>
                    </article>
                </section>
            </Col>
            <Col lg={6}>
                <section className="article">
                    <article>
                        <figure><img src={VioSusImage} alt="VioSustainability" /></figure>
                        <div>
                            <h4>Vio Sustainability</h4>
                            <p className='mt-3 mb-5'>An app that keeps track of waste disposal</p>
                            <a href="ProjPage#vioSus">Read More</a>
                        </div>
                    </article>
                </section>
            </Col>
            <Col lg={6}>
                <section className="article">
                    <article>
                        <figure><img src={NewsArticleImage} alt="myPortfolio" /></figure>
                        <div>
                            <h4>My Portfolio</h4>
                            <p className='mt-3 mb-5'>React Portfolio Website</p>
                            <a href="ProjPage#portfolio">Read More</a>
                        </div>
                    </article>
                </section>
            </Col>
            <Col lg={6}>
                <section className="article">
                    <article>
                        <figure><img src={ReactMovieImage} alt="MovieApp" /></figure>
                        <div>
                            <h4>React Movie App</h4>
                            <p className='mt-3 mb-5'>An app that lists movies by genre with their IMDb ratings</p>
                            <a href="ProjPage#reactMovie">Read More</a>
                        </div>
                    </article>
                </section>
            </Col>
            
            
        </Row></>
            
        
    )
}

export default Article