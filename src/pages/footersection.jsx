
import React from 'react'; 
import Styled from 'styled-components'
import Colors from '../assets/colors';

const FooterContainer = Styled.div`
    display: flex; 
    justify-content: space-evenly;
    width: 100vw; 
    padding: 2vw;
    color:white;
    @media screen and (max-width: 700px) {
        flex-direction: column;
        justify-content: center; 
        align-items: center;
                
    }
    `;

const InfoFooter = Styled.div`
    display: flex; 
    flex-direction: column; 
    text-align: center;
    align:content: center;
    justify-content: center;
    width: 250px; 
    height: 200px;
    font-size: 20px;
    padding: 10px;
    background-color: ${Colors.secondary};
    border-radius: 5%;
    box-shadow: 5px 5px 0 0 gray;

    @media screen and (max-width: 700px) {
        margin: 20px;
                
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

<li>+91 62XXXXXXXX</li>
<li>+91 62XXXXXXXX</li>
            </InfoFooter>

            <InfoFooter>
            <p className="markicon_footer">📫 </p>
            <h3>Email Address</h3>
             <a className= "mail_id" style={{color:"white"}} href = "mailto: icpcm2021@gmail.com">icpcm2021@gmail.com</a>
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