import image from '../images/royce-wee-cropped.jpg';
import { Row, Col } from "react-bootstrap";


function Hero() {


    return(
        <div className='hero-section' id='homeHero'>
            <Row>
                <Col md={4} className='text-center'>
                    <figure className='imageContainer'>
                        <img className='hero-image' src={image} alt="Royce Wee"/>
                    </figure>
                </Col>
                <Col md={8} className='d-flex flex-column align-self-center'>
                    <h1>Royce-Jacob Wee</h1>
                    <h2>I build things for the web.</h2>
                    <p className='mt-3'>I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered apps.</p>
                    {/* <a className='heroBtn' href="project">Read More</a> */}
                </Col>
            </Row>
        </div>
    )
}

export default Hero