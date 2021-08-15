import React from 'react';
import BannerSmall from "../components/BannerSmall"
import Styled from 'styled-components';
import Colors from '../assets/colors';
import { Advdata } from './OrganiserDate';
//International Committee not needed rn: info to be found later

const Header = Styled.div`
    background-color:${Colors.classic};
    font-size: 50px;
    color:${Colors.light};
    justify-content:center;
    text-align:center;
`;
const Body = Styled.div`
    background-color:${Colors.classic};
    color:${Colors.light}
    // display:inline-block;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-gap: 10px; 
    justify-content:center;
    // text-align:center;
    padding:5px 10%;
    font-size:20px;
`;

const Advisory = () => {
    return(
        <>
            <BannerSmall/>
            <Header>Advisory Board:</Header>
            <Body>
            <ol>
            {Advdata.map(function ncards(val){
                return(
                    <li>{val.name}</li>
                );
            })}
            </ol>
            </Body>
        </>
    );
}



export default Advisory;
