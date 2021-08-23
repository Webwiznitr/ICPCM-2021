import NavLinks from './NavLinks';
import React from 'react';
import {CgMenuRound} from "react-icons/cg";
import {CgCloseO} from "react-icons/cg";
import Styled from 'styled-components';
import { useState } from 'react';

const NavigationMobileHeader = Styled.div`
    display: none; 

    @media screen and (max-width: 900px ) {
        display: flex; 
        //margin-right: 10%;
    }
`;


const NavigationMobile =()=> {

        const [open , setOpen] = useState(false); 

        const HamburgerIcon = <CgMenuRound className = "hamburger" 
        
        size = "40px"

        onClick = {
            ()=> { setOpen(!open)}
        }
    />

    const CloseIcon = <CgCloseO className = "hamburger" 
   
    size = "40px"

    onClick = {
        ()=> { setOpen(!open)}
    }
/>

 const closeMobileMenu = () => setOpen(false) ; 
 

    return (
        <NavigationMobileHeader>
       

        {/* <MenuRoundedIcon/> */}

        {open? CloseIcon : HamburgerIcon}

   { open &&  <NavLinks isMobile={ true} closeMobileMenu = {closeMobileMenu} /> } 

    </NavigationMobileHeader>
    )
}

export default NavigationMobile; 