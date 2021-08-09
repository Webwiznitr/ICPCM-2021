import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import {AboutInsti, AboutDepart} from './pages/About';
import CallforPaper, {PaperGuidelines} from './pages/Paper';
import NewRegistration, {UserLogin} from './pages/Registration';
import Sponsorship from './pages/Sponsorship';
import Navbar from './Navbar';
import InterCommitee, {NatCommitee, IntrnalCommitee} from './pages/Commitee';
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
    <Navbar/>

      <div className="App">

        {/* HEADER */}

        {/* MAIN COMPONENT IF NOT FOUND 404 ERROR*/}
        <main className="main-component">
          <Switch>
            <Route path="/" exact component = {Main} />
            <Route path="/aboutinstitute" exact component = {AboutInsti} />
            <Route path="/aboutdepartment" exact component = {AboutDepart} />
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
