import React from 'react'; 
import styled from 'styled-components';
import "../components/glimpses.scss"
import Orgdata from './OrganiserDate';
import Colors from '../assets/colors';
import BannerSmall from '../components/BannerSmall';


const Section = styled.section`
 width: 100vw; 
 height: fit-content; 
 background-color: ${Colors.classic};; 
 margin: 0 auto; 
 //margin-top: 300px;
 background-size: cover;
 background-repeat: no-repeat;

`;

const Cardforproject = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr ; 
    grid-gap: 10px; 
    width:fit-content;
    margin: auto;
    padding-bottom:20px; 
    //border: 2px solid red;

    @media screen and (max-width: 950px)
    {
        grid-template-columns: 1fr 1fr;
        height: fit-content;
    }

    @media screen and (max-width: 640px)
    {
        grid-template-columns: 1fr;
        height: fit-content;
    }
`;

const Projectcard = styled.div`
  width: 300px; 
  height: 340px; 
  display: flex; 
  //border: solid 2px red; 
  flex-direction: column ;
  justify-content: center; 
  text-align: center; 
  align-items: center;
  
  
`; 

    

const SpekName = styled.h1`
    cursor: default;
    font-size: 1.5rem; 
    color: ${Colors.primary}; 
    font-weight: bold;
    margin-top:  5px;
    overflow-y: hidden; 
`;

const Desc = styled.h2`
    cursor: default;
    font-size: 1rem; 
    color: ${Colors.light}; 
    //color: #2B2F50;
    overflow-y: hidden;
    `; 

const Organising = () => {
    return (
        <Section>
            <BannerSmall/>
         <h1 className="speakers" style={{color:Colors.light}}>Organising Committee</h1>
            <Cardforproject>

                {Orgdata.map(element => {

                    return <Projectcard >
                        <img className = "speakers_image" src = {element.imgsrc} alt=""/> 
                        <SpekName> {element.name}</SpekName>
                        <Desc> {element.pos} </Desc>
                        <Desc> {element.desc} </Desc>
                        <Desc> {element.dept} </Desc>
                        <Desc><a href="# " style={{color:Colors.light, textDecoration:"none"}}> {element.email} </a></Desc>
                        <Desc> {element.phone} </Desc>
                        </Projectcard>;
                        

                })}
            </Cardforproject>

        </Section>


    )
}

export default Organising;
