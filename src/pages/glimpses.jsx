import React from "react"; 
import Slider from "infinite-react-carousel"; 
import Styled from 'styled-components'; 
import "../components/glimpses.scss"
import Colors from "../assets/colors";


// import { GlimpseImages } from "../components/glimpseImages";
// import { RequireObjectCoercible } from "es-abstract";
const GlimpseContainerMain = Styled.div`
    width: 100vw; 
    marign: 0 20px; 
    display: flex; 
    flex-direction: column;
    background-color: ${Colors.classic};
    justify-content: center;
    text-align: center;
    align-items: center;
    padding-top: 40px;
    // margin-top: 100px;
    padding-bottom: 40px; 
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

<NameGlimpseSection style={{color:Colors.primary}}> Glimpse of our conference </NameGlimpseSection>
        
        <GlimpseContainer>

       
        
        <Slider autoplay = {true}  adaptiveHeight = {true} slidesToShow = {3}  arrows = { false }>
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628861228/redsea/gli1_koterq.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628861225/redsea/gli3_egxlrs.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628861224/redsea/gli2_qvmfy6.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628806290/redsea/glimpses_img_ie0bmj.jpg" alt="img not found" />
            {/* <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628806290/redsea/glimpses_img_ie0bmj.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628806290/redsea/glimpses_img_ie0bmj.jpg" alt="img not found" /> */}
        </Slider>
      
{/* 
     

        <Slider autoplaySpeed = { 1500 }  autoplay = {true}  adaptiveHeight = {true} slidesToShow = {3}  arrows = { true}>
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
            <img src = { Mehta} alt="img not found" />
        </Slider> */}

        </GlimpseContainer>
    </GlimpseContainerMain>)
}


export default Glimpse; 