import { Row, Col } from "react-bootstrap";
import { FaPhone } from 'react-icons/fa';
import { MdEmail, MdOutlineWysiwyg } from "react-icons/md";

function Contact() {

    return(
        <div className='hero-section' id="contact">
            <Row className="d-flex justify-content-center">
                <Col md={4} className='d-flex flex-column align-self-center'>
                    <h1 className="text-center mb-5">Contact Me!</h1>
                    <a className="contact-link" href="mailto:weeroyce@gmail.com"><MdEmail/> weeroyce@gmail.com</a>
                    <a className="contact-link" href=""><FaPhone/> 778-325-0325</a>
                    <a className="contact-link" href="https://drive.google.com/file/d/16Nlf7HWGnnYuCLxXwdwHfWqgCT3YbvOG/view?usp=sharing"><MdOutlineWysiwyg/> Get my resume</a>
                    <Col className="d-flex justify-content-around">
                        {/* <a className="contact-link" href="https://github.com/LizardButterfly"><FaGithub/></a>
                        <a className="contact-link" href="https://www.linkedin.com/in/royce-jacob-wee-a043611a2/"><FaLinkedin/></a> */}
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default Contact