import React from 'react'; 

import About from './About'
import Timeline from './Timeline';
import Speakers from './Speakers';
import Sponsors from './Sponsors';

import Glimpse from './glimpses';
import Downloads from './Downloads';

//import '../components/glimpses.scss'; 
//import Contact from './Contact';
//main body of the website 


const Main = () => {
    return(
        <section> 
            
            <About/>
            <Timeline/>
            <a href="https:google.com.">learn react</a>
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