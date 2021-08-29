import React from 'react'; 
import Styled from 'styled-components'; 
 import NIT_R_Logo from '../assets/NITR_logo.png'; 
 import NIT_R_Jubli from '../assets/NITR_diamondjubilee_logo.png'; 
 
 import ICPCM from '../assets/Icpcm_logo.png'; 
 import BannerJPEG from '../assets/Banner.jpeg';
 
 
 import './glimpses.scss'

const BannerContainer = Styled.div`
    display:flex;
    width: 100%;
    height: calc(100vh - 70px);
    min-height: 700px;  
    flex-direction: column; 
    margin:0 ; 
    padding: 0; 
    background-image: url(${BannerJPEG});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    
    @media screen and (max-width: 740px) {
        height: calc(70vh);
    }
    
    `;

const BannerLogoContainer = Styled.div`
    display: flex; 
    justify-content: space-between; 

`;

const LogoContainer = Styled.div`
    display: flex;
    
`; 

const TextBox = Styled.div`
  width: 100vw; 
  text-align: center;
  margin-top: 50px;
  display: flex; 
  justify-content: center;

  @media screen and (max-width: 740px) {
      width: 100vw; 
      text-align: center;
      //overflow-y: hidden;
  }
`;

const HeadH1 = Styled.div `
    color: white;
    font-size: 3rem;
    margin: 10px;
    font-weight: bold;
    animation: 1.5s slideInMain ease-in; 

@media screen and (max-width: 700px) {
    font-size: 1.5rem;
}

`; 

const HeadingMain = Styled.div`
    color: red;
    font-size: 3.5rem;
    font-weight: 1000;
    margin: 10px;
    animation: 1.5s slideInMain ease-in;

    @media screen and (max-width: 1000px) {
        font-size: 2.3rem; 
        font-weight: bold; 
    }

@media screen and (max-width: 700px) {
    font-size: 2rem; 
    font-weight: bold; 
}

@keyframes slideInMain {
  0% { opacity: 0; transform:translateY(10px); }  
  50% {opacity: 0.6}
  100% {opacity: 1; }
}

`; 


class Banner extends React.Component {
    render() {
        return (
            <BannerContainer className = "banner_landing_page" >
                <BannerLogoContainer>
                <LogoContainer>
                    <img className="banner_logo" src={ICPCM} alt= "" />
                </LogoContainer>
                <LogoContainer>
                <img className="banner_logo" src= {NIT_R_Logo} alt = ""/>
                <img className ="banner_logo" src={NIT_R_Jubli} alt= "" />
            </LogoContainer>
             </BannerLogoContainer>

             <TextBox>
    <div className="banner_text_container">
    <h3 className="Banner_date">7<sup>th</sup>-8<sup>th</sup> December 2021</h3>
        <HeadH1 className="International_conference">3<sup>rd</sup> International Conference on</HeadH1>
        
        
        <HeadingMain className="ProAndCha"> Processing and Characterizatoin of Materials</HeadingMain>
        <HeadH1 className="International_conference">(ICPCM-2021)</HeadH1>

        
        </div>
</TextBox> 
<div className = "banner_button_container">
    <button className = "banner_button" 
    style = {
        {
            margin: "0px 20px"
        }
    }>Registration</button>
    <button className = "banner_button">Abstract</button>
</div>
            </BannerContainer>
        )
    }
}
    
export default Banner; 
