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
color: white;
font-size: 3rem;
margin: 10px;
font-weight: bold;
//-webkit-text-stroke: 1px black;

@media screen and (max-width: 700px) {
    font-size: 1.5rem;
    //-webkit-text-stroke: 0.7px black; 
}

`; 

const HeadingMain = Styled.div`
color: ${Colors.classic};
font-size: 4rem;
font-weight: 1000;
margin: 10px;

@media screen and (max-width: 700px) {
    font-size: 2rem; 
    font-weight: bold; 
}




`; 


class Banner extends React.Component {
    constructor(props) {
      super(props);
      this.switchImage = this.switchImage.bind(this);
      this.state = {
        currentImage: 0,
        images: [
            "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234203/redsea/landingpage/Image_2_ybw8d9.jpg",
            "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629234284/redsea/landingpage/image_1_dtwyrf.jpg",
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
      setInterval(this.switchImage, 2000);
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
        <HeadingMain className="ProAndCha"> PROCESSING AND CHARACTERIZATION OF MATERIALS</HeadingMain>
        <HeadH1 className="International_conference">(ICPCM-2021)</HeadH1>

        
        <h3 className="Banner_date">7<sup>th</sup>-8<sup>th</sup> December 2021</h3>
        </div>
</TextBox> 
            </BannerContainer>
        )
    }
}
    
export default Banner; 
