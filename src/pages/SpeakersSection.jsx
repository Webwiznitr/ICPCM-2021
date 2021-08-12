import React from 'react'; 
import styled from 'styled-components';



const Section = styled.section`
 width: 100vw; 
 height: 100vh; 
 background-color: #8a4daf;; 
 margin: 0 auto; 
 margin-top: 300px;

`;

const Cardforproject = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-gap: 10px; 
    width: fit-content;
    margin: auto; 
    border: 2px solid red;

    @media screen and (max-width: 600px)
`;

const ProjectImageContainer = styled.div` 
    min-width: 500px; 
    max-width: 600px;
    min-height: 500px; 
    max-height: 600px;     
`;

const array = [ {

}, {

}, {

},{

}]

const Project = () => {
    return (
        <Section>
            <Cardforproject>

                {array.map(element => {

                    return <Projectcard>element </Projectcard>;

                })}
            </Cardforproject>
        </Section>


    )
}

export default Project;