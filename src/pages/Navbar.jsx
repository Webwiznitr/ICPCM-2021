import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'


const Navbar = () => {

    
    return (
        <>
            <ul class="horizontal-list text-center nav-menu">
                <li>
                    <NavLink className="navbarComponent" to='/'>Home</NavLink>
                </li>
                <li>
                    <a href="#about" className='navbar'>
                        About
                        <div className='dropdown'>
                            <NavLink className="navbarsubcomp" to='./aboutinstitute'>About Institute</NavLink>
                            <NavLink className="navbarsubcomp" to='./aboutdepartment'>About Department</NavLink>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#timeline" className='navbar'>Timeline</a>
                </li>
                <li>
                    <a href="#about" className='navbar'>
                        Paper
                        <div className='dropdown'>
                            <NavLink className="navbarsubcomp" to='./callforpaper'>Call for Paper</NavLink>
                            <NavLink className="navbarsubcomp" to='./paperguidelines'>Paper Submission Guidelines</NavLink>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#registration" className='navbar'>
                        Registration
                        <div className='dropdown'>
                            <NavLink className="navbarsubcomp" to='./newregistration'>New Registration</NavLink>
                            <NavLink className="navbarsubcomp" to='./userlogin'>User Login</NavLink>
                        </div>
                    </a>

                </li>
                <li>
                    <NavLink className="navbarComponent" to='./sponsorship'> Sponsorship </NavLink>
                </li>
                <li>
                    <a href="#commitee" className='navbar'>
                        Commitee
                        <div className='dropdown'>
                            <NavLink className="navbarsubcomp" to='./intercommitee'>International Commitee</NavLink>
                            <NavLink className="navbarsubcomp" to='./natcommitee'>National Commitee</NavLink>
                            <NavLink className="navbarsubcomp" to='./internalcommitee'>Internal Commitee</NavLink>
                        </div>
                    </a>
                </li>
                <li>

                    <a href="#downloads" className='navbarC'>Downloads</a>
                </li>
                <li>
                    <a href="#contact" className='navbar'>Contact</a>

                </li>
            </ul>
            <div className='menu-btn'> 
                <div className='menu-btn_burger'></div>
            </div>
        </>
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










