import React from 'react'; 
import styled from 'styled-components';
import './glimpses.scss'

import Colors from '../assets/colors';






//----------------------------------

const Rourkela = ()=> {
    const BGImages = [
        "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629135553/redsea/Picture2_hgluyg.jpg",
         "https://res.cloudinary.com/manjeetdhayal/image/upload/v1629137257/redsea/RourTour1_kdvnnr.jpg",
     
        
     ] 

     function ChangeBG(){
        //const bg= BGImages[Math.floor(Math.random()*2)];   
        console.log("hello")
        let n= Math.floor(Math.random()*2)
        //setInterval(n, 100)
        console.log(n); 
        return BGImages[n]; 
        
    }
    
    setInterval(ChangeBG, 100); 

    return(
        <section id="Rourkela_section">
            <img src= { ()=> {
                let n = Math.floor(Math.random*2); 
                setInterval(n , 100); 
                console.log("this is manjeet" +n); 
                return BGImages
            }} id = "image_div" alt="not found"  setInterval>

            </img>

        </section>
    )
}

export default Rourkela; 