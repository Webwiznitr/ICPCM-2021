import React from "react"; 
import Slider from "infinite-react-carousel"; 
import Styled from 'styled-components'; 

import Mehta from '../assets/mehta.png'; 


// import { GlimpseImages } from "../components/glimpseImages";
// import { RequireObjectCoercible } from "es-abstract";
const GlimpseContainerMain = Styled.div`
    width: 100vw; 
    marign: 0 20px; 
    display: flex; 
    flex-direction: column;
    background-color: #949ACB;
    justify-content: center;
    text-align: center;
    align-items: center;
`;


const GlimpseContainer = Styled.div`
    width: 80vw; 
    margin : auto ; 
    
    padding-top: 10px;
    border-radius: 2px 5px;
    padding-bottom: 10px;

`;

const NameGlimpseSection = Styled.div`
        font-size: 3rem;
        font-weight: 500; 
        margin: 20px 0 ; 
        display: flex; 
        text-align: center;
        color: white;

`;




function Glimpse() {
    return (<GlimpseContainerMain>

<NameGlimpseSection> Glimpse of our conference </NameGlimpseSection>
        
        <GlimpseContainer>

       
        
        <Slider autoplay = {true}  adaptiveHeight = {true} slidesToShow = {3}  arrows = {true }>
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
        </Slider>
      

     

        <Slider autoplaySpeed = { 1500 } dots autoplay = {true}  adaptiveHeight = {true} slidesToShow = {3}  arrows = { true}>
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
        </Slider>

        </GlimpseContainer>
    </GlimpseContainerMain>)
}


export default Glimpse; 