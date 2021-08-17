
import React  from 'react';

import Styled from 'styled-components'
import Colors from '../assets/colors';

const FooterContainer = Styled.div`
    display: flex; 
    justify-content: center;
    width: 100vw; 
    padding: 2vw;
    color:white;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: center; 
        align-items: center;
                
    }
    `;

const InfoFooter = Styled.div`
    display: flex;
    margin: 10px; 
    flex-direction: column; 
    text-align: center;
    align:content: center;
    justify-content: center;
    width: 250px; 
    height: 250px;
    font-size: 20px;
    padding: 10px;
    background-color: ${Colors.secondary};
    border-radius: 5%;
    box-shadow: 5px 5px 0 0 gray;

    @media screen and (max-width: 800px) {
        margin: 20px;
        width: 340px; 
                
    }

    `;
    

function FooterSection() {
    return (
        <section style={{backgroundColor:Colors.light}}>
        <FooterContainer>
            <InfoFooter>
            <p className="markicon_footer">📌</p>
                  <h4>Address</h4>

                  <p>National Institute of</p>
                  <p>Technology Rourkela</p>
                  <p>Odisha,India,769008</p>
            </InfoFooter>

            <InfoFooter>
            <p className="markicon_footer">☎️</p>
            <h3>Phone Number</h3>

<li>+91 661242558</li>
<li>+91 9439445250</li>
            </InfoFooter>

            <InfoFooter>
            <p className="markicon_footer">📫 </p>
            <h3>Email Address</h3>
             <a className= "mail_id" style={{color:"white"}} href = "mailto: icpcm2021@gmail.com">icpcm2021@gmail.com</a>
            </InfoFooter>

            <InfoFooter>
            <iframe title = "myframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.645060170525!2d84.89963771543978!3d22.253541950212988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1629228752000!5m2!1sen!2sin"  style = { { 
                    width:"600", height:"450" , border: 0 
    }
}
 allowfullscreen="" loading="lazy"></iframe>
            </InfoFooter>


        </FooterContainer>


        <div className="footer-bottom" style={{backgroundColor:Colors.primary ,color: "white"}}>
              <p className="text-xs-center">
                ICPCM &copy;{new Date().getFullYear()} - All Rights Reserved
              </p>
           
                <p className="end" style= { { textAlign: "center"}}>
                  Designed and Developed by Team WEBWIZ with ❤️
                </p>
            </div>



        </section>
    )
}


export default FooterSection;