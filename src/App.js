import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import HomeAbout from "./components/HomeAbout";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import CopyrightFooter from "./components/CopyrightFooter";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<HomeAbout />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
        <Footer/>
        <CopyrightFooter/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
