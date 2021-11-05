import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from './pages/about'
import News from './pages/news'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NewsInside from './pages/news/newsInside'
import Bud from './pages/bud'
import SisterCare from './pages/sisterCare';
import HelpFamily from './pages/helpFamily';
import LiverTrans from './pages/liver-trans'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} exact />
        <Route path="/news" element={<News />} />
        <Route path="/news-inside/:id" element={<NewsInside />} />
        <Route path="/bud-page" element={<Bud />} />
        <Route path="/sister-care" element={<SisterCare />} />
        <Route path="/help-family" element={<HelpFamily />} />
        <Route path="/liver-trans" element={<LiverTrans />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
