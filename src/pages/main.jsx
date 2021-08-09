import React from 'react'; 
import About from './About'
import Timeline from './Timeline';
//main body of the website 

const Speakers = () => {
    return(
        <>
            Speakers
        </>
    );
}

const Sponsors = () => {
    return (
        <>
            Sponsors
        </>
    );
}

const Downloads = () => {
    return (
        <>
            Downloads
        </>
    );
}

const Contact = () => {
    return (
        <>
            Contact
        </>
    );
}

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