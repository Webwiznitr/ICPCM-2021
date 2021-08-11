import React from "react"; 
import Slider from "infinite-react-carousel"; 
import Styled from 'styled-components'; 

import Mehta from '../assets/mehta.png'; 


// import { GlimpseImages } from "../components/glimpseImages";
// import { RequireObjectCoercible } from "es-abstract";

const GlimpseContainer = Styled.div`
    width: 80vw; 
    margin : auto ; 
    background-color: #949ACB;
    padding-top: 10px;
    border-radius: 2px 5px;
    padding-bottom: 10px;

`;




function Glimpse() {
    return (<GlimpseContainer>
      
        <Slider autoplay = {true}  adaptiveHeight = {true} slidesToShow = {3}  arrows = { false}>
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
        </Slider>
      

     

        <Slider autoplaySpeed = { 2500 } dots autoplay = {true}  adaptiveHeight = {true} slidesToShow = {3}  arrows = { false}>
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
        </Slider>
    </GlimpseContainer>)
}


export default Glimpse; 