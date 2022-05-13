import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Portofolio from "../pages/Portofolio";
import { AnimatePresence } from "framer-motion";


function AnimatedComponents() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portofolio" element={<Portofolio />} />
      </Switch>
    </AnimatePresence>
  );
}

export default AnimatedComponents;
