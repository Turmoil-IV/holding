import { useState } from 'react'
import './App.css'
import Home from './home/index'
import About from './about-us/index'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer1 } from "./nav-footer/Footer1";
import { Navbar3 } from "./nav-footer/Navbar3";
import ScrollToTop from "./nav-footer/ScrollToTop.jsx";

import Portfolio from './portfolio';
import Partnerships from './partnerships';
import Project from './project';


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Router>
      <Navbar3/>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/project/tech-innovators" element={<Project/>} />
          <Route path="/project/green-energy" element={<Project/>} />


        </Routes>
      <Footer1/>
    </Router>


    </>

  )


}

export default App
