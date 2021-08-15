import React from 'react'; 

// import About from './About'
import Timeline from './Timeline';
import Message from './message';



import Glimpse from './glimpses';
//import Downloads from './Downloads';
import Banner from '../components/Banner';
import Project from './SpeakersSection';


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
            <Banner/>
//             <About/>
            <Message/>

            {/* <Sponsors/> */}
            <Timeline/>
            <Project/>
            
            {/* <Speakers/> */}
             
            
            <Glimpse/>
            {/* <FooterSection/> */}

            {/* <Downloads/> */}
            

            {/*  We dont need footer here we imported it in main file */}
            {/* <footer>
                <Contact/>
            </footer> */}
        </section>
        
)}; 

export default Main; 
