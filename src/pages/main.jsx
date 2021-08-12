import React from 'react'; 

import About from './About'
import Timeline from './Timeline';
import Speakers from './Speakers';
import Sponsors from './Sponsors';

import Glimpse from './glimpses';
import Downloads from './Downloads';
// import LandingPagePoster from '../LandingPageAssets/landingPagePoster.png'
// import Styled from "styled-components";

//import '../components/glimpses.scss'; 
//import Contact from './Contact';
//main body of the website 

// const LandingPoster = Styled.div`
//     width: 100%;
//     margin: 0px;
//     height: 85vh;
//     margin-bottom: 5rem;
// `;

const Main = () => {
    return(
        <section> 
            
            <About/>
            <Timeline/>
            
            <Speakers/>
             
            <Sponsors/>
            <Glimpse/>

            <Downloads/>

            {/*  We dont need footer here we imported it in main file */}
            {/* <footer>
                <Contact/>
            </footer> */}
        </section>
        
)}; 

export default Main; 