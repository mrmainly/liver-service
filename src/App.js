import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import News from './pages/news'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import NewsInside from './pages/news/newsInside'
import Bud from './pages/bud'
import HelpFamily from './pages/helpFamily'
import LiverTrans from './pages/liver-trans'
import Help from './pages/help'
import Valunteers from './pages/volunteers'
import HomeCareSchool from './pages/projects/homeCareSchool'

import Home from './pages/home'
import DocumentsPage from './pages/aboutDropdown/documentsPage'
import Vacancy from './pages/aboutDropdown/vacancy'
import Contacts from './pages/aboutDropdown/contacts'
import Reports from './pages/aboutDropdown/reports'
import Team from './pages/aboutDropdown/team'
import About from './pages/aboutDropdown/about'

import ProjectInTouch from './pages/projects/projectInTouch'
import SisterCare from './pages/projects/sisterCare'
import Palliative from './pages/projects/palliative'

import Stroke from './pages/ourProjects/HomeCareSchool/stroke'
import Dementia from './pages/ourProjects/HomeCareSchool/dementia'
import Rehabilitation from './pages/ourProjects/HomeCareSchool/rehabilitation'
import Pain from './pages/ourProjects/HomeCareSchool/pain'
import Hygiene from './pages/ourProjects/HomeCareSchool/hygiene'
import Feeding from './pages/ourProjects/HomeCareSchool/feeding'
import PreventionOfFalls from './pages/ourProjects/HomeCareSchool/preventionOfFalls'
import OrganizationLife from './pages/ourProjects/HomeCareSchool/organizationLife'
import Complication from './pages/ourProjects/HomeCareSchool/complication'
import FeaturesOfCare from './pages/ourProjects/HomeCareSchool/featuresOfCare'
import PsychologicalAspects from './pages/ourProjects/HomeCareSchool/psychologicalAspects'
import HelpPalliative from './pages/ourProjects/helpPalliative'
import DementiaNo from './pages/ourProjects/dementiaNo'
import SeriouslyIllFamily from './pages/ourProjects/seriouslyIllFamily'

import Donation from './pages/projects/donation'
import ProjectNews from './pages/palliativeDropdown/projectNews';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/news" element={<News />} />
        <Route path="/news-inside/:id" element={<NewsInside />} />
        <Route path="/bud-page" element={<Bud />} />
        <Route path="/help-family" element={<HelpFamily />} />
        <Route path="/liver-trans" element={<LiverTrans />} />
        <Route path="/valunteers" element={<Valunteers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/home-care-school" element={<HomeCareSchool />} />

        <Route path="/documents-page" element={<DocumentsPage />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />

        <Route path="/project-in-touch" element={<ProjectInTouch />} />
        <Route path="/sister-care" element={<SisterCare />} />
        <Route path="/palliative" element={<Palliative />} />
        <Route path="/project-news" element={<ProjectNews />} />

        <Route path="/school/stroke" element={<Stroke />} />
        <Route path="/school/dementia" element={<Dementia />} />
        <Route path="/school/rehabilitation" element={<Rehabilitation />} />
        <Route path="/school/pain" element={<Pain />} />
        <Route path="/school/hygiene" element={<Hygiene />} />
        <Route path="/school/feeding" element={<Feeding />} />
        <Route path="/school/preventionOfFalls" element={<PreventionOfFalls />} />
        <Route path="/school/organizationLife" element={<OrganizationLife />} />
        <Route path="/school/complication" element={<Complication />} />
        <Route path="/school/featuresOfCare" element={<FeaturesOfCare />} />
        <Route path="/school/psychologicalAspects" element={<PsychologicalAspects />} />

        <Route path="/helpPalliative" element={<HelpPalliative />} />
        <Route path="/dementiaNo" element={<DementiaNo />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/seriouslyIllFamily" element={<SeriouslyIllFamily />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
