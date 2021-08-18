import React from 'react'; 
import Styled from 'styled-components'; 
 import NIT_R_Logo from '../assets/NITR_logo.png'; 
 import NIT_R_Jubli from '../assets/NITR_diamondjubilee_logo.png'; 
 
 import ICPCM from '../assets/Icpcm_logo.png'; 
  
 import Colors from '../assets/colors'
 
 import './glimpses.scss'

const BannerContainer = Styled.div`
    display:flex;
    width: 100%;
    height: calc(100vh - 70px); 
    // background-color: red;   
    flex-direction: column; 
    margin:0 ; 
    padding: 0; 
    background-color: ${Colors.secondary}; 
    // background-image: url('https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234203/redsea/landingpage/Image_2_ybw8d9.jpg'); 
     background-size: 100% 100%;
     background-repeat: no-repeat;
     background-attachment: fixed;

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
  width: 90vw; 
  text-align: center;
  margin-top: 50px;

  @media screen and (max-width: 740px) {
      width: 100vw; 
      text-align: center;
      //overflow-y: hidden;
  }
`;

const HeadH1 = Styled.div `
    color: #3a30ca;
    font-size: 3rem;
    margin: 10px;
    font-weight: bold;
    text-shadow: 0 0 3px #292727, 0 0 5px #bbbbd2;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #faffe578;  
    animation: 3s slideInMain ease-in; 

@media screen and (max-width: 700px) {
    font-size: 1.5rem;
    //-webkit-text-stroke: 0.7px black; 
}

`; 

const HeadingMain = Styled.div`
color: #071010;
    font-size: 4rem;
    text-shadow: 0 0 8px #ff0000, 0 0 5px #0000ff;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #f7c196;
    font-weight: 1000;
    margin: 10px;
    animation: 3s slideInMain ease-in;

@media screen and (max-width: 700px) {
    font-size: 2rem; 
    font-weight: bold; 
}

@keyframes slideInMain {
  20% { opacity: 0.4;
  transform: translateX(5px)}
  50% {opacity: 0.6}
  80% { transform: translateY(-5px)}
}




`; 


class Banner extends React.Component {
    constructor(props) {
      super(props);
      this.switchImage = this.switchImage.bind(this);
      this.state = {
        currentImage: 0,
        images: [
            "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629286158/redsea/landingpage/Combined_building_yooyvm.jpg",
            "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629285867/redsea/landingpage/Department_blured_ey3py1.jpg",
          ]
      };
    }
  
    switchImage() {
      if (this.state.currentImage < this.state.images.length - 1) {
        this.setState({
          currentImage: this.state.currentImage + 1
        });
      } else {
        this.setState({
          currentImage: 0
        });
      }
      return this.currentImage;
    }
  
    componentDidMount() {
      setInterval(this.switchImage, 10000);
    }
    render() {
        return (
            <BannerContainer className = "banner_landing_page" style = {
                {
                    backgroundImage: `url('${this.state.images[this.state.currentImage]}')`
                }
            }>
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
       
        <HeadH1 className="International_conference">3<sup>rd</sup> International Conference on</HeadH1>
        <h3 className="Banner_date">7<sup>th</sup>-8<sup>th</sup> December 2021</h3>
        
        <HeadingMain className="ProAndCha"> Processing and Characterizatoin of Materials</HeadingMain>
        <HeadH1 className="International_conference">(ICPCM-2021)</HeadH1>

        
        </div>
</TextBox> 
            </BannerContainer>
        )
    }
}
    
export default Banner; 
