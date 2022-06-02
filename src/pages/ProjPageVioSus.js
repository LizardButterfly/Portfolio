import Header from '../components/NavBar';
import VioSus from '../components/ProjVioSus';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';


function HomePage() {

  return(
    <Container>
      <Header />
      <VioSus />
      <Footer />
    </Container>
  )
}

export default HomePage;