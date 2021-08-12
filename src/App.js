import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import AboutInsti from './pages/AboutInsti';
import AboutDepart from './pages/AboutDepart';
import CallforPaper from './pages/Paper';
import PaperGuidelines from './pages/PaperGuidelines';
import NewRegistration from './pages/Registration';
import UserLogin from './pages/UserLogin';
import Sponsorship from './pages/Sponsorship';
import Navbar from './pages/Navbar';
import InterCommitee from './pages/Commitee';
import NatCommitee from './pages/NatCommitee';
import IntrnalCommitee from './pages/InternlCommitee';
import NotFound from './pages/Notfound';

// IMPORTANT POINTS 

// ADD HEADER COMPONENT IN FUNCTION APP() 
// ADD FOOTER COMPONENT IN FUNCTION APP() 

//ALL OHTER SECTIONS/ COMPONENTS IN Main component in "./pages/main.jsx" 
// Reusable components in COMPONENT folder 
// All pages in PAGES folder 


function App() {
  return (
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
            <Route path="/aboutdepartment" exact component = {AboutDepart} />
            <Route path="/callforpaper" exact component = {CallforPaper} />
            <Route path="/paperguidelines" exact component = {PaperGuidelines} />
            <Route path="/newregistration" exact component = {NewRegistration} />
            <Route path="/userlogin" exact component = {UserLogin} />
            <Route path="/sponsorship" exact component = {Sponsorship} />
            <Route path="/intercommitee" exact component = {InterCommitee} />
            <Route path="/natCommitee" exact component = {NatCommitee} />
            <Route path="/internalcommitee" exact component = {IntrnalCommitee} />
            <Route component = {NotFound} />

          </Switch>
        </main>


        {/* FOOTER */}

      </div>

    </Router>
    </>
  );
}

export default App;
