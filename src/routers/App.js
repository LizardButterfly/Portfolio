import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
// import Contact from '../pages/ContactPage';
import ProjPageNewsArticle from '../pages/ProjPageNewsArticle';
import ProjPageVioSus from '../pages/ProjPageVioSus';
import Project1 from '../pages/ProjectPage1';
import ProjPage from '../pages/ProjPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="ProjPage" element={<ProjPage/>} />
          {/* <Route path="ProjPageNewsArticle" element={<ProjPageNewsArticle/>} />
          <Route path="ProjPageVioSus" element={<ProjPageVioSus/>} />
          <Route path="project1" element={<Project1/>} />
          <Route path="ProjPage" element={<ProjPage/>} /> */}
          {/* <Route path="contact" element={<Contact/>} /> */}
        </Routes>

      </div>
    </BrowserRouter>
    )
}

export default AppRouter;
