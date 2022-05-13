import React from 'react';

import './App.css';
import { Route, Switch, useLocation } from "react-router-dom";
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
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/portofolio" component={Portofolio} />
   
        </Switch>
        </AnimatePresence>
  

    </main>
    </div>
  );
}




export default App
