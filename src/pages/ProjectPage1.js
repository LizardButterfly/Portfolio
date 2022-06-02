import Header from '../components/NavBar';
import Project1 from '../components/ProjPortfolio';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';


function HomePage() {

  return(
    <Container>
      <Header />
      <Project1 />
      <Footer />
    </Container>
  )
}

export default HomePage;