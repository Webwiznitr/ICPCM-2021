import React from 'react'
import Slider from 'infinite-react-carousel'
import styled from "styled-components"; 
import SponsorImage from "./sponsors.jpg"; 
//Carousal of confirmed sponsors

const Item = styled.div`
width: 80vw; 
margin: 10px auto; 
}`;

const SponsorImageStyle = {
  padding: "10px", 
  margin: "10px",
}


const Sponsors = () => {
    return (
      <Item className = "sponsors-carousel" >
      <Slider  className = "carousel-initialised" style = { { margin: "10px", padding: " 10px"}} autoplay = {true}  slidesToShow = {3} arrows = { false} dots>
      
      <img src= {SponsorImage} alt= " not found" style = { SponsorImageStyle} />
      <img src= {SponsorImage} alt= "not found" style = { SponsorImageStyle} />
      <img src= {SponsorImage} alt= "not found" style = { SponsorImageStyle} />
      <img src= {SponsorImage} alt= " not found" style = { SponsorImageStyle} />
      <img src= {SponsorImage} alt= "not found" style = { SponsorImageStyle} />
      <img src= {SponsorImage} alt= " not found" style = { SponsorImageStyle} />
      <img src= {SponsorImage} alt= " not found" style = { SponsorImageStyle} />
      <img src= {SponsorImage} alt= "  not found" style = { SponsorImageStyle} />


    </Slider>
    </Item>

    );
}

export default Sponsors;





