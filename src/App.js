import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from './pages/home/homePage'
import About from './pages/about/index'
import Team from './pages/team/index'
import Blog from './pages/blog/index'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PrivacyPolicyPage from './pages/privacyPolicy/privacyPolicyPage';
import BlogInside from './pages/blog/blogInside'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} exact />
        <Route path="/application" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/blog-inside/:id" element={<BlogInside />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
