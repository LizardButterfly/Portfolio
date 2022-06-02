import Article from '../components/Article';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function HomePage() {

  return(
    <div>
      <NavBar />
      <Hero />
      <Container>
      
        <Article />
      </Container>
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage;