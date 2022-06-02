import Header from '../components/NavBar';
import Contact from '../components/Contact';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';


function HomePage() {

  return(
    <Container>
      <Header />
      <Contact />
      <Footer />
    </Container>
  )
}

export default HomePage;