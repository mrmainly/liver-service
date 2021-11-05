import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from './pages/about/index'
import Blog from './pages/blog/index'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BlogInside from './pages/blog/blogInside'
import Bud from './pages/bud'
import SisterCare from './pages/sisterCare';
import HelpFamily from './pages/helpFamily';
import LiverTrans from './pages/liver-trans'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} exact />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-inside/:id" element={<BlogInside />} />
        <Route path="/bud-page" element={<Bud />} />
        <Route path="/sister-care" element={<SisterCare />} />
        <Route path="/help-family" element={<HelpFamily />} />
        <Route path="/liver-trans" element={<LiverTrans />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
