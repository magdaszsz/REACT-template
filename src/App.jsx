import React from 'react';

import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Portofolio from "./pages/Portofolio";
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';



function App() {

const location = useLocation();
  return (
    <div className="page-container">
    <aside>
      <Navigation />
      </aside>
    <main>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portofolio" element={<Portofolio/>} />
   
        </Routes>
        </AnimatePresence>
  

    </main>
    </div>
  );
}




export default App
