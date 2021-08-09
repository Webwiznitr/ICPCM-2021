import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <NavLink className="navbarComponent" to='/'>Home</NavLink>
            <a href="#about">
                About
                <NavLink className="navbarsubcomp" to='./aboutinstitute'>About Institute</NavLink>
                <NavLink className="navbarsubcomp" to='./aboutdepartment'>About Department</NavLink>
            </a>
            <a href="#timeline">Timeline</a>
            <a href="#about">
                Paper
                <NavLink className="navbarsubcomp" to='./callforpaper'>Call for Paper</NavLink>
                <NavLink className="navbarsubcomp" to='./paperguidelines'>Paper Submission Guidelines</NavLink>
            </a>
            <a href="#registration">
                Registration
                <NavLink className="navbarsubcomp" to='./newregistration'>New Registration</NavLink>
                <NavLink className="navbarsubcomp" to='./userlogin'>User Login</NavLink>
            </a>
            <NavLink className="navbarComponent" to='./sponsorship'> Sponsorship </NavLink>
            <a href="#commitee">
                Commitee
                <NavLink className="navbarsubcomp" to='./intercommitee'>International Commitee</NavLink>
                <NavLink className="navbarsubcomp" to='./natcommitee'>National Commitee</NavLink>
                <NavLink className="navbarsubcomp" to='./internalcommitee'>Internal Commitee</NavLink>
            </a>
            <a href="#downloads">Downloads</a>
            <a href="#contact">Contact</a>
        </>
    );
};

export default Navbar;