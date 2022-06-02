import NavBar from '../components/NavBar';
import ProjectHeader from '../components/ProjectHeader';
import ProjNewsArticle from '../components/ProjNewsArticle';
import ProjVioSus from '../components/ProjVioSus';
import ProjPortfolio from '../components/ProjPortfolio';
import ProjMovieApp from '../components/ProjMovieApp';
import { Container } from 'react-bootstrap';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function HomePage() {

  return(
    <div>
      <NavBar />
      <ProjectHeader />
      <Container>
       <ProjNewsArticle />
       <ProjVioSus />
       <ProjPortfolio />
       <ProjMovieApp />
      </Container>
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage;