import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import NotFound from './pages/Notfound';

// IMPORTANT POINTS 

// ADD HEADER COMPONENT IN FUNCTION APP() 
// ADD FOOTER COMPONENT IN FUNCTION APP() 

//ALL OHTER SECTIONS/ COMPONENTS IN Main component in "./pages/main.jsx" 
// Reusable components in COMPONENT folder 
// All pages in PAGES folder 


function App() {
  return (

    // adding router to catch error if main not found 
    <Router>

      <div className="App">

        {/* HEADER */}

        {/* MAIN COMPONENT IF NOT FOUND 404 ERROR*/}
        <main className="main-component">
          <Switch>
            <Route path="/" exact component = {Main} />
            <Route component = {NotFound} />

          </Switch>
        </main>


        {/* FOOTER */}

      </div>

    </Router>
  );
}

export default App;
