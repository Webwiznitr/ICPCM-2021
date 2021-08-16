import React from 'react'; 
import Colors from '../assets/colors';
import styled from 'styled-components';


const ThemeContainer = styled.div`
display:flex; 
flex-direction: column;
margin: 50px auto; 
`; 
const ConferenceThemeHeading = styled.h1`
width: 100vw; 
font-color: ${Colors.primary}; 
font-size: 3rem; 
text-align: center;

@media screen and (max-width: 600px) {
    font-size: 2rem;
}
`
; 

const ConferenceList = styled.ol`
font-size: 1.5rem; 
color: ${Colors.light}; 
margin-left: 10vw;
list-style-type: square;
line-spacing: 3px;`; 

const ConferenceThemes = ()=> {
    return (
        <section style = { { backgroundColor: `${Colors.classic}`}}>
            <ThemeContainer className= "theme_container">
                <ConferenceThemeHeading>Conference Themes</ConferenceThemeHeading>
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
        </section>
    )
}

export default ConferenceThemes; 