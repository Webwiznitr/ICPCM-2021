import React from 'react'; 
import Styled from 'styled-components'; 
 import NIT_R_Logo from '../assets/NITR_logo.png'; 
 import NIT_R_Jubli from '../assets/NITR_diamondjubilee_logo.png'; 
 //import Icpcm from '../assets/icpcm_logo.png'
 import ICPCM from '../assets/Icpcm_logo.png'; 
 //import BG_banner from "../assets/backgorund_landing_page_with_wave.png"; 
import Colors from '../assets/colors';
const SmallBannerContainer = Styled.div`
    display:flex;
    width: 100%;
    height: 215px; 
    background-color: ${Colors.secondary};   
    flex-direction: column; 
    margin:0 ; 
    padding: 0; 
    // background-image: url('https://res.cloudinary.com/manjeetdhayal/image/upload/v1628791271/redsea/background_landing_page_with_waves_vuteej.png'); 
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 800px) {
        height: 230px;
    }

    @media screen and (max-width: 600px) {
        height: 260px;
    }
    @media screen and (max-width: 530px) {
        height: 300px;
    }
    
    `;

const SmallBannerLogoContainer = Styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;

`;

const LogoContainer = Styled.div`
    display: flex;
    
`;



function BannerSmall() {
    return (
        <SmallBannerContainer>
        <SmallBannerLogoContainer>
            <LogoContainer>
                <img className="banner_logo" src={ICPCM}  alt= "" />
            </LogoContainer>

            <div className="banner_small_text_container">
                    <h2 className="small_International_conference" style={{color:"white"}}>3rd International Conference </h2>
                     </div>
            <LogoContainer>
            <img className="banner_logo" src= {NIT_R_Logo} alt= "" />
            <img className ="banner_logo" src={NIT_R_Jubli} alt= "" />
        </LogoContainer>
    </SmallBannerLogoContainer>

    <div className = "banner_small_text_container">

    <h1 className="small_ProAndCha" style={{color:Colors.classic}}> PROCESSING AND CHARACTERIZATION OF MATERIALS</h1>
                    <h2 className="small_International_conference" style={{color:"white"}}>(ICPCM-2021)</h2>

                    <h3 className="small_Banner_date" style={{color:Colors.classic}}>7th-8th December 2021</h3>
    </div>
    
    </SmallBannerContainer>
    )
}

export default BannerSmall; 