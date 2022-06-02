import Header from '../components/NavBar';
import ProjNewsArticle from '../components/ProjNewsArticle';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';


function HomePage() {

  return(
    <Container>
      <Header />
      <ProjNewsArticle />
      <Footer />
    </Container>
  )
}

export default HomePage;