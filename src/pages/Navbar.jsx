import React from 'react'

import Styled from 'styled-components';
import Navigation from '../components/Navbar/Navigation';
import NavigationMobile from '../components/Navbar/NavigationMobile';

//import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


const Header = Styled.header`
    margin: 0 ; 
    padding: 15px; 
    width: 100vw;
    display: flex; 
    justify-content: center;
    background-color: #222831;
    height: fit-content; 
    overflow: hidden;


    @media screen and (max-width : 900px ){

        justify-content: flex-start; 

    }
    `;


const Navbar = () => {

    
    return (
        <Header>

            {/* Home component */}

      <div className = "horizontal-list" 
       style = { { marginLeft: "2vw", 
                    padding: " 20px 10px"
                    
                    }}> 
                     </div>

        {/* Navigation component */}

        <Navigation/>
        <NavigationMobile/> 

            

        </Header>
    );
};


const menuBtn = document.querySelector('.menu_btn');
let menuOpen=false;


 if(menuBtn) {

    console.log("harbu not found")
    

    menuBtn.addEventListener('onClick', () => {

        if(!menuOpen){
            menuBtn.className = "open";
            
            console.log('nkfe');
            menuOpen = true;
        } else {
            menuBtn.className = 'o';
            menuOpen = false;
        }
    }, false );
    

}


export default Navbar;










