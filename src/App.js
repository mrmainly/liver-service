import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MediaAboutUs from './pages/about/mediaAboutUs'
import News from './pages/news'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NewsInside from './pages/news/newsInside'
import Bud from './pages/bud'
import HelpFamily from './pages/helpFamily';
import LiverTrans from './pages/liver-trans'
import Blog from './pages/blog'
import Help from './pages/help'
import Valunteers from './pages/volunteers'
import OurProjects from './pages/ourProjects';

import DocumentsPage from './pages/about/documentsPage.js'
import Vacancy from './pages/about/vacancy'
import Contacts from './pages/about/contacts'
import Reports from './pages/about/reports'
import Team from './pages/about/team'

import ProjectInTouch from './pages/palliative/projectInTouch'
import ProjectNews from './pages/palliative/projectNews'
import SisterCare from './pages/palliative/sisterCare';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MediaAboutUs />} exact />
        <Route path="/news" element={<News />} />
        <Route path="/news-inside/:id" element={<NewsInside />} />
        <Route path="/bud-page" element={<Bud />} />
        <Route path="/help-family" element={<HelpFamily />} />
        <Route path="/liver-trans" element={<LiverTrans />} />
        <Route path="/valunteers" element={<Valunteers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/our-projects" element={<OurProjects />} />

        <Route path="/documents-page" element={<DocumentsPage />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/team" element={<Team />} />

        <Route path="/project-in-touch" element={<ProjectInTouch />} />
        <Route path="/project-news" element={<ProjectNews />} />
        <Route path="/sister-care" element={<SisterCare />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
