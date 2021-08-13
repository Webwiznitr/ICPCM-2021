import React from 'react';
import './about.css';


import Styled from "styled-components"; 

// const AboutImage = Styled.div`

//   width: 400px; 
//   height: 400px; 
//   min-width: 400px; 
//   max-width: 400px;
//   `;

const ContainerBox = Styled.div`
    width: 90%; 
    background-color: #CACDE5;
    padding: 20px; 
    font-size: 1.2rem; 
    color: white;
    text-align: center;

    @media screen and (max-width: 1300px) {
      width: 80%
    }
`;

const AboutHeading = Styled.h1`  
  
    font-size: 4rem; 
    color: #505896; 
    margin-bottom: 15px; 
    text-align: center;
  
`; 


const Card = Styled.section`
    background-color: #CACDE5;

    display: flex; 
    width: 100vw; 
    height: fit-content; 
    margin: auto; 
    border-radius: 5px;
    justify-content: center;
      align-items: center; 


    @media screen and (max-width: 1300px) {
      flex-direction: column ; 
      justify-content: center;
      align-items: center; 
    }
     `; 





const About = () => {
    return(
       

        <Card>


          <ContainerBox  className= " para_content" >  <AboutHeading> ABOUT THE CONFERENCE </AboutHeading>

       <p  className = "about_content" style = { { color: "black", fontWeight: "500px"}}>
       The Department of Metallurgical and Materials Engineering, National
                     Institute of Technology Rourkela is going to organize the 3rd
                     International Conference on Processing and Characterization of
                     Materials (ICPCM–2021) and 11th National Conference on Processing
                     and Characterization of Materials (NCPCM–2021) during 7th-8th
                     December 2021 after successful completion of earlier conferences in
                     this series. “Processing and Characterization of Materials” is a
                     foremost topic of interest for most of the researchers in the
                     scientific community. Advanced processing and characterization
                     techniques make it possible to develop many novel materials for
                     different applications including nuclear reactor, aerospace, defense
                      and other structural sectors. Technological advancement urges novel
                     design of fabrication strategy, comprehension of structure-property
                     relationship for the sustainability in application of the
                    components. The objective of the conference is to highlight all the
                     technological advancement in the area of processing and
                     characterization of materials. The conference is expected to attract
                     the researchers, scientists, practicing engineers from various R & D
                    organizations, academic institutions, and industries at a single
                    platform. The interdisciplinary approach of the conference may allow
                    the participants to look beyond their areas of research and
                    expertize. The organizers of the conference contacted distinguished
                     researchers to deliver keynote and invited lectures on processing
                     and characterization of materials. The conference is expected to be
                   a platform for young researchers of the globe to share their
                    research, network with eminent peers of diversified fields,
                   industry-institute collaboration. Senior practicing engineers,
                    established researchers, and faculty members will also get an
                    opportunity to share their knowledge and information.
                            
       </p></ContainerBox>

         
        </Card>
    );
}




export default About;
