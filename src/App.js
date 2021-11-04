import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from './pages/home/homePage'
import About from './pages/about/index'
import Team from './pages/team/index'
import Blog from './pages/blog/index'
import Interactions from './pages/interactions/index'
import Faq from './pages/faq/index'
import Auth from './pages/auth/index'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PrivacyPolicyPage from './pages/privacyPolicy/privacyPolicyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/application" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/interactions" element={<Interactions />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
