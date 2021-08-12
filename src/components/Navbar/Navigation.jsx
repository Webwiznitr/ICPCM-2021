import NavLinks from './NavLinks';
import React from 'react';
import styled from 'styled-components';

const NavigationView = styled.div`

    // display: flex; 
    // align-items: center;
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const Navigation =()=> {
    return (
        <NavigationView>
        <NavLinks/>
        </NavigationView>
    )
}

export default Navigation; 