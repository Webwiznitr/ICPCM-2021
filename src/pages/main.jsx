import React from 'react'; 
import About from './About'
import Timeline from './Timeline';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Downloads from './Downloads';
import Contact from './Contact';
//main body of the website 


const Main = () => {
    return(
        <section> 
            main is working 
            <About/>
            <Timeline/>
            <Speakers/>
            <Sponsors/>
            <Downloads/>
            <footer>
                <Contact/>
            </footer>
        </section>
    )
}; 

export default Main; 