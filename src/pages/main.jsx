import React from 'react'; 

import About from './About'
import Timeline from './Timeline';
import Speakers from './Speakers';
import Sponsors from './Sponsors';

import Glimpse from './glimpses';
import Downloads from './Downloads';
import Banner from '../components/Banner';

//import '../components/glimpses.scss'; 
//import Contact from './Contact';
//main body of the website 


const Main = () => {
    return(
        <section> 
            <Banner/>
            <About/>
            <Sponsors/>
            <Timeline/>
            
            <Speakers/>
             
            
            <Glimpse/>

            <Downloads/>

            {/*  We dont need footer here we imported it in main file */}
            {/* <footer>
                <Contact/>
            </footer> */}
        </section>
        
)}; 

export default Main; 