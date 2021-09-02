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

        @media screen and (max-width: 1000px) {
            font-size: 2.5rem;
            margin: 10px 0;
        }

        @media screen and (max-width: 600px) {
            font-size: 1.3rem;
            margin: 5px 0;
        }

`;




function Glimpse() {
    return (<GlimpseContainerMain>

<NameGlimpseSection style={{color:Colors.primary}}> Glimpse of our previous conference </NameGlimpseSection>
        
        <GlimpseContainer>

       
        
        <Slider autoplay = {true}  adaptiveHeight = {true} slidesToShow = {3}  arrows = { false } autoplaySpeed = {3000}>
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628861228/redsea/gli1_koterq.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628861225/redsea/gli3_egxlrs.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628861224/redsea/gli2_qvmfy6.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628806290/redsea/glimpses_img_ie0bmj.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1629134947/redsea/gli_im2_a93ndh.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1629134951/redsea/gly_im3_r03xmx.jpg" alt="img not found" />
            <img src ="https://res.cloudinary.com/manjeetdhayal/image/upload/v1629134954/redsea/gly_im4_n4jhpv.jpg" alt="img not found" />
            <img src = "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629134970/redsea/gly_im8_jnf3pi.jpg" alt="img not found" />
            <img src = "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629134977/redsea/gly_im9_r1peh1.jpg" alt="img not found" />
            <img src = "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629134982/redsea/gly_im10_lw9det.jpg" alt="img not found" />
            <img src = "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629134966/redsea/gly_im7_gqv2sg.jpg" alt="img not found" />
           
          </Slider>
      

        </GlimpseContainer>
    </GlimpseContainerMain>)
}


export default Glimpse; 