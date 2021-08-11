import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'
import Styled from 'styled-components';

const Header = Styled.header`
    margin: 0 ; 
    padding: 0; 
    width: 100vw;
    display: flex; 
    justify-content: space-between;
    background-color: #CACDE5;
    `;

const DropDown = Styled.div`
    background-color: red; 
    border-radius: 2px 1px;
    padding: 2px;
    width: 275px;

`;


const DropDownListValue = Styled.span`
    width: fit-content;
    background-color: white; 
    `;

const Navbar = () => {
    return (
        <Header>

      <div className = "horizontal-list text-center nav-menu" 
       style = { { marginLeft: "2vw", 
                    padding: " 20px 10px"
                    
                    }}> 
                     <NavLink className="navbarComponent" to='/'>
               <li>
                    <a className='navbar' href="#home">
                    Home
                    
                    </a>
                </li>
         </NavLink> </div>

            <ul class="horizontal-list text-center nav-menu" 
            style={
                {
                    padding: " 20px 10px",
                    margin: "0 auto"
                    
                }
            }
            >

                <li>
                    <a href="#about" className='navbar'>
                        About
                        <DropDown className='dropdown' >
                            <NavLink className="navbarsubcomp" to='./aboutinstitute'><DropDownListValue > Institute </DropDownListValue></NavLink>
                            <NavLink className="navbarsubcomp" to='./aboutdepartment'><DropDownListValue> Department </DropDownListValue></NavLink>
                        </DropDown>
                    </a>
                </li>
                <li>
                    <a href="#timeline" className='navbar'>Timeline</a>
                </li>
                <li>
                    <a href="#about" className='navbar'>
                        Paper
                        <DropDown className='dropdown'>
                            <NavLink className="navbarsubcomp" to='./callforpaper'> <DropDownListValue>Call for Paper </DropDownListValue> </NavLink>
                            <NavLink className="navbarsubcomp" to='./paperguidelines'><DropDownListValue>Paper Submission Guidelines</DropDownListValue> </NavLink>
                        </DropDown>
                    </a>
                </li>
                <li>
                    <a href="#registration" className='navbar'>
                        Registration
                        <DropDown className='dropdown'>
                            <NavLink className="navbarsubcomp" to='./newregistration'> <DropDownListValue> New Registration</DropDownListValue></NavLink>
                            <NavLink className="navbarsubcomp" to='./userlogin'><DropDownListValue>User Login</DropDownListValue></NavLink>
                        </DropDown>
                    </a>

                </li>
                <li>
                    <NavLink className="navbarComponent" to='./sponsorship'> Sponsorship </NavLink>
                </li>
                <li>
                    <a href="#commitee" className='navbar'>
                        Commitee
                        <DropDown className='dropdown'>
                            <NavLink className="navbarsubcomp" to='./intercommitee'><DropDownListValue>International Commitee</DropDownListValue></NavLink>
                            <NavLink className="navbarsubcomp" to='./natcommitee'><DropDownListValue>National Commitee</DropDownListValue></NavLink>
                            <NavLink className="navbarsubcomp" to='./internalcommitee'><DropDownListValue>Internal Commitee</DropDownListValue></NavLink>
                        </DropDown>
                    </a>
                </li>
                <li>

                    <a href="#downloads" className='navbarC'>Downloads</a>
                </li>
                <li>
                    <a href="#contact" className='navbar'>Contact</a>

                </li>
            </ul>

        </Header>
    );
};

export default Navbar;










