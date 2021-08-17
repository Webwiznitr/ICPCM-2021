import React from 'react';
import BannerSmall from "../components/BannerSmall"
import styled from 'styled-components';
import Colors from '../assets/colors';

const Publication = styled.div`
width: 100vw; 
background-color: ${Colors.classic}
color: ${Colors.light} ; 
font-size: 1.5rem; 
font-weight: bold; 
padding: 2vw 10vw; 
text-align: left; 
`
; 

const ImageContainerPublication = styled.div`
 width: 100vw; 
 padding: 0 10vw; 
 display: flex; 
 flex-wrap: wrap;
 justify-content: center; 
 align-items: center; 
`; 

const PrevImages = [
    {
        images:"https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180658/redsea/NCPCM_2011_wiihwo.png"
    },
    {
        images:"https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180652/redsea/NCPCM_2012_enrtd8.png"
    },
    {
        images:"https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180659/redsea/NCPCM_2013_lxi2ld.png"
    },
    {
        images:"https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180651/redsea/NCPCM_2014_gate7a.png"
    },
    {
        images:"https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180652/redsea/NCPCM_2015_u4jial.png"
    },
    {
        images:"https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180649/redsea/NCPCM_2016_mouhl1.png"
    },
    {
        images:"https://res.cloudinary.com/manjeetdhayal/image/upload/v1629180651/redsea/NCPCM_2017_dqylem.png"
    },

]

const CallforPaper = () => {
    return(
        <section>
<BannerSmall/>

<Publication>
You are invited to submit abstracts and contribute to the conference. ISBN publication will be produced for all the accepted abstracts and full papers. Our previous publication partners:
</Publication>

<ImageContainerPublication>
    {
        PrevImages.map(element => {
            return <img style = { { 
                margin: "10px", 
            }} src = { element.images} alt= "not found"/>
        })
    }

</ImageContainerPublication>
           
        </section>
    );
}






export default CallforPaper;
