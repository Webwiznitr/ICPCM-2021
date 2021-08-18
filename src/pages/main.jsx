import React from 'react'; 
import Glimpse from './glimpses';
import ConferenceThemes from '../components/ConferenceThemes';

import Banner from '../components/Banner';
import Project from './SpeakersSection';
import Rourkela from '../components/Rourkela';
import Message from '../components/Message';


const Main = () => {
    return(
        <section> 
            <Banner/>
            <ConferenceThemes/>
            <Message/>
            <Rourkela/>
            <Project/>
            <Glimpse/>

        </section>
        
)}; 

export default Main; 
