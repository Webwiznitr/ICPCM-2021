import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import About from './pages/About';
import AboutInsti from './pages/AboutInsti';
import AboutDepart from './pages/AboutDepart';
import CallforPaper from './pages/Paper';
import PaperGuidelines from './pages/PaperGuidelines';
import NewRegistration from './pages/Registration';
import Advisory from './pages/Advisory';
import Organising from './pages/Organising';
import Sponsorship from './pages/Sponsorship';
import Navbar from './pages/Navbar';

import Downloads from './pages/Downloads'
import NotFound from './pages/Notfound';
import './pages/Footer.css'
import FooterSection from './pages/footersection';
import Contact from './pages/Contact';

import Loader from './components/preloader';
import { useState, useEffect } from "react";


// IMPORTANT POINTS 

// ADD HEADER COMPONENT IN FUNCTION APP() 
// ADD FOOTER COMPONENT IN FUNCTION APP() 

//ALL OHTER SECTIONS/ COMPONENTS IN Main component in "./pages/main.jsx" 
// Reusable components in COMPONENT folder 
// All pages in PAGES folder 


function App() {

  const [loading, setLoading] = useState(false); 

  useEffect(()=> {
    setLoading(true); 
    setTimeout(
      ()=>{
        setLoading(false); 
      },2000 
    ); 
  }, []); 

  return loading ? ( <Loader/>) : (
    <>
    {/* // adding router to catch error if main not found  */}
    <Router>
   

      <div className="App" >

        {/* HEADER */}  <Navbar/>

        {/* MAIN COMPONENT IF NOT FOUND 404 ERROR*/}
        <main className="main-component">
          <Switch>
            <Route path="/" exact component = {Main} />
            <Route path="/aboutinstitute" exact component = {AboutInsti} />
            <Route path="/about" exact component = {About} />
            <Route path="/aboutdepartment" exact component = {AboutDepart} />
            <Route path="/callforpaper" exact component = {CallforPaper} />
            <Route path="/paperguidelines" exact component = {PaperGuidelines} />
            <Route path="/newregistration" exact component = {NewRegistration} />
            <Route path="/downloads" exact component = {Downloads} />
            <Route path="/sponsorship" exact component = {Sponsorship} />
            <Route path="/organising" exact component = {Organising} />
            <Route path="/advisory" exact component = {Advisory} />
            <Route path="/contact" exact component = {Contact}/>
            <Route component = {NotFound} />

            




          </Switch>
        </main>


        <FooterSection/>

      </div>

    </Router>
    </>
  );
}

export default App;
