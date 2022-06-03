import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
          <div className="container d-flex justify-content-between">
            <p>
              &copy; 2022 Royce Wee
              
            </p>
            <div className='footer-icons d-flex justify-content-between'>
              <a className="contact-link" href="https://github.com/Royce-Wee" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
              <a className="contact-link" href="https://www.linkedin.com/in/royce-jacob-wee-a043611a2/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
        </footer>
      )
  }
  
  export default Footer;