import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessPage from "./components/pages/BusinessPage";
import CulturePage from "./components/pages/CulturePage";
import SciencePage from "./components/pages/SciencePage";
import MusicPage from "./components/pages/MusicPage";
import MyBlogsPage from "./components/pages/MyBlogsPage";
import HomePage from "./components/pages/HomePage";
import BusinessDetailsPage from "./components/pages/BusinessDetailsPage";
import CultureDetailsPage from "./components/pages/CultureDetailsPage";
import ScienceDetailsPage from "./components/pages/ScienceDetailsPage";
import MusicDetailsPage from "./components/pages/MusicDetailsPage";
import MyBlogsDetailsPage from "./components/pages/MyBlogsDetailsPage";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/businessarticle:id" element={<BusinessDetailsPage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/culturearticle:id" element={<CultureDetailsPage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/sciencearticle:id" element={<ScienceDetailsPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/musicarticle:id" element={<MusicDetailsPage />} />
        <Route path="/myblogs" element={<MyBlogsPage />} />
        <Route path="/myblogsarticle:id" element={<MyBlogsDetailsPage />} />
        <Route path="/createyourblog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
