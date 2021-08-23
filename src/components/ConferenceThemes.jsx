import React from 'react'; 
import Colors from '../assets/colors';
import styled from 'styled-components';
import './glimpses.scss'
import Timeline from '../pages/Timeline';
import Download from './downloadMain';



const ThemeContainer = styled.div`
display:flex; 
max-width: fit-content;
flex-direction: column;
background-color: #57b7bf; 
//margin: 50px auto; 
border-radius: 5px;
margin: 20px;
padding: 10px;
border-left: solid 5px rgb(34, 32, 32);

@media screen and (max-width: 900px) {
    min-width: 70vw;
    width: 70vw;
}


`; 
const ConferenceThemeHeading = styled.h1`
//width: 100vw; 
font-color: ${Colors.primary}; 
font-size: 1.5rem; 
text-align: center;

@media screen and (max-width: 600px) {
    font-size: 1.35rem;
}
`
; 

const ConferenceList = styled.ol`
font-size: 1.1rem; 
font-weight: bold;
color: #3A4750; 
margin-left: 1vw;
list-style-type: square;
list-style-position: inside;
line-spacing: 3px;`; 

const ConferenceThemes = ()=> {
    return (
        <section className = "conference_theme_container" style = { { 
            backgroundColor: `${Colors.classic}`, 
            padding: "50px 0"
        }}>
            <ThemeContainer className= "theme_container">
                <ConferenceThemeHeading>Conference Themes</ConferenceThemeHeading>
                <hr/>
                <ConferenceList className="conference_theme_list">
                    <li>
                        Materials processing
                    </li>
                    <li>
                        Mineral concentration, Metal extraction and Refining
                    </li>
                    <li>
                        Surface Engineering, thin films and Coatings
                    </li>
                    <li>
                        Materials for nuclear, avitation and defence applications
                    </li>
                    <li>
                        Materials characterization
                    </li>
                    <li>
                        Advanced and smart materials
                    </li>
                    <li>
                        Modelling and simulation
                    </li>

                    <li>
                        Materials for energy applications
                    </li>
                    <li>
                        Corrosion and environmental degradation
                    </li>
                </ConferenceList>

            </ThemeContainer>

            <Timeline/>
            <Download/>

        </section>
    )
}

export default ConferenceThemes; 