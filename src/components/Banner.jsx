import React from 'react'; 
import Styled from 'styled-components'; 
 import NIT_R_Logo from '../assets/NITR_logo.png'; 
 import NIT_R_Jubli from '../assets/NITR_diamondjubilee_logo.png'; 
 //import Icpcm from '../assets/icpcm_logo.png'
 import ICPCM from '../assets/Icpcm_logo.png'; 
 //import BG_banner from "../assets/backgorund_landing_page_with_wave.png"; 
 import Colors from '../assets/colors'
 import Slider from 'infinite-react-carousel'

const BannerContainer = Styled.div`
    display:flex;
    width: 100%;
    height: 650px; 
    // background-color: red;   
    flex-direction: column; 
    margin:0 ; 
    padding: 0; 
    background-color: ${Colors.secondary}; 
    // background-image: url('https://res.cloudinary.com/manjeetdhayal/image/upload/v1629007237/redsea/blob-scatter-haikei_1_qstttc.png'); 
    // background-size: cover;
    // background-repeat: no-repeat;

    @media screen and (max-width: 740px) {
        height: 750px;
    }
    @media screen and (max-width: 740px) {
        height: 800px;
    }
    
    `;

const BannerLogoContainer = Styled.div`
    display: flex; 
    justify-content: space-between; 

`;

const LogoContainer = Styled.div`
    display: flex;
    
`; 

const BannerTextImage = Styled.div`
     width: 100vw; 
     height: fit-content; 
     display: flex;
     justify-content: space-evenly;
     margin-top: 30px; 
    

     @media screen and (max-width: 740px) {
         flex-direction: column; 
         justify-content: center;
         align-items: center;
        
     }

`; 

// const ImageBox = Styled.div`

//     width: 40px; 
//     width: 100px
//     height: fix-content;
//     background-image: url('https://res.cloudinary.com/manjeetdhayal/image/upload/v1628793101/redsea/icpcm_sand_logo_white_purple_bg_pqardf.png')
//     background-size: cover; 
    
//     `;

const TextBox = Styled.div`
  width: 50vw; 

  @media screen and (max-width: 740px) {
      width: 100vw; 
      text-align: center;
      overflow-y: hidden;
  }
`;

const HeadH1 = Styled.div `
color: white;
font-size: 2rem;
margin: 10px;
font-weight: bold;
//-webkit-text-stroke: 1px black;

@media screen and (max-width: 1040px) {
    font-size: 1.5rem;
    //-webkit-text-stroke: 0.7px black; 
}

`; 

const HeadingMain = Styled.div`
color: ${Colors.classic};
font-size: 3.5rem;
font-weight: 1000;
margin: 10px;

@media screen and (max-width: 1040px) {
    font-size: 2rem; 
    font-weight: bold; 
}




`; 


function Banner() {
    return (
        <BannerContainer>
            <BannerLogoContainer>
                <LogoContainer>
                    <img className="banner_logo" src={ICPCM} alt= "" />
                </LogoContainer>
                <LogoContainer>
                <img className="banner_logo" src= {NIT_R_Logo} alt = ""/>
                <img className ="banner_logo" src={NIT_R_Jubli} alt= "" />
            </LogoContainer>
            </BannerLogoContainer>

        <BannerTextImage>
<div className = "banner_image_holder">
{/* <img className="banner_image" src='https://res.cloudinary.com/manjeetdhayal/image/upload/v1628793101/redsea/icpcm_sand_logo_white_purple_bg_pqardf.png' alt= "" /> */}
<div className = "banner_image_container">
<Slider className="banner_image" arrows = {false} autoplay = {true} >
<img className = "banner_slider" src = 'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629058499/redsea/image_1.jpg' alt= '' />
<img className = "banner_slider" src = 'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629058596/redsea/Image_2.jpg' alt = ''/>
<img  className = "banner_slider" src = 'https://res.cloudinary.com/manjeetdhayal/image/upload/v1629058602/redsea/Image_3.jpg' alt = ''/>
</Slider>
</div>
</div>

<TextBox>
    <div className="banner_text_container">
       
        <HeadH1 className="International_conference">3<sup>rd</sup> International Conference on</HeadH1>
        <HeadingMain className="ProAndCha"> PROCESSING AND CHARACTERIZATION OF MATERIALS</HeadingMain>
        <HeadH1 className="International_conference">(ICPCM-2021)</HeadH1>

        
        <h3 className="Banner_date">7<sup>th</sup>-8<sup>th</sup> December 2021</h3>
        </div>
</TextBox>
            {/* <ImageBox/> */}
            
              </BannerTextImage>

        </BannerContainer>
    )
}

export default Banner; 