import { NavLink } from 'react-router-dom';
import './navbar.scss'




const NavLinks = (props) => {
    return (


        <div className="topnav">

            
              <a href="#home" className="active" onClick= { ()=> props.isMobile && props.closeMobileMenu()} >
                <NavLink className="navbar_active" to="/" >
                    Home
                </NavLink> </a>

                

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn">  About  </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./about' onClick= { ()=> props.isMobile && props.closeMobileMenu()}> Conference </NavLink>
                 <NavLink className="navbarsubcomp" to='./aboutinstitute' onClick= { ()=> props.isMobile && props.closeMobileMenu()}> Institute </NavLink>
                <NavLink className="navbarsubcomp" to='./aboutdepartment' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> Department</NavLink>
                </div>
                               
                </div>

                <a href="#timeline_section" className='navbar' onClick= { ()=> props.isMobile && props.closeMobileMenu() }>Timeline</a>

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn" onClick= { ()=> props.isMobile && props.closeMobileMenu() }>  Publication  </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./callforpaper' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> Call for  paper </NavLink>
                <NavLink className="navbarsubcomp" to='./paperguidelines' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> Paper Submission Guidelines</NavLink>
                </div>
                               
                </div>

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn"  onClick= { ()=> props.isMobile && props.closeMobileMenu() }> Registration  </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./newregistration' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> New Registration </NavLink>
                <NavLink className="navbarsubcomp" to='./userlogin' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> User Login</NavLink>
                </div>
                               
                </div>

                <a href="#Sponsorship" className="active" >
                <NavLink className="navbar_active" to="./sponsorship" onClick= { ()=> props.isMobile && props.closeMobileMenu() }>
                Sponsorship 
                </NavLink> </a>

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn" onClick= { ()=> props.isMobile && props.closeMobileMenu() }> Committee  </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./advisory' onClick= { ()=> props.isMobile && props.closeMobileMenu() }>Advisory Committee </NavLink>
                <NavLink className="navbarsubcomp" to='./organising' onClick= { ()=> props.isMobile && props.closeMobileMenu() }>Organising Committee</NavLink>

                </div>
                               
                </div>

                <NavLink to='./downloads' className='navbar' onClick= { ()=> props.isMobile && props.closeMobileMenu() }>Downloads</NavLink>
                <NavLink to="./contact" className='navbar' onClick= { ()=> props.isMobile && props.closeMobileMenu() }>Contact</NavLink>






        </div>





        //     <ul className="horizontal-list" 
        //         style={
        //             {
        //                 padding: " 20px 10px",
        //                 margin: "0 auto"

        //             }
        //         }
        //         >   <NavLink className="navbarComponent" to='/'>
        //         <li>
        //              <a className='navbar' href="#home">
        //              Home

        //              </a>
        //          </li>
        //   </NavLink>

        //             <li>
        //                 <a href="#about" className='navbar'>
        //                     About
        //                     <DropDown className='dropdown' >
        //                         <NavLink className="navbarsubcomp" to='./aboutinstitute'><DropDownListValue > Institute </DropDownListValue></NavLink>
        //                         <NavLink className="navbarsubcomp" to='./aboutdepartment'><DropDownListValue> Department </DropDownListValue></NavLink>
        //                     </DropDown>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#timeline" className='navbar'>Timeline</a>
        //             </li>
        //             <li>
        //                 <a href="#about" className='navbar'>
        //                     Paper
        //                     <DropDown className='dropdown'>
        //                         <NavLink className="navbarsubcomp" to='./callforpaper'> <DropDownListValue>Call for Paper </DropDownListValue> </NavLink>
        //                         <NavLink className="navbarsubcomp" to='./paperguidelines'><DropDownListValue>Paper Submission Guidelines</DropDownListValue> </NavLink>
        //                     </DropDown>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#registration" className='navbar'>
        //                     Registration
        //                     <DropDown className='dropdown'>
        //                         <NavLink className="navbarsubcomp" to='./newregistration'> <DropDownListValue> New Registration</DropDownListValue></NavLink>
        //                         <NavLink className="navbarsubcomp" to='./userlogin'><DropDownListValue>User Login</DropDownListValue></NavLink>
        //                     </DropDown>
        //                 </a>

        //             </li>
        //             <li>
        //                 <NavLink className="navbarComponent" to='./sponsorship'> Sponsorship </NavLink>
        //             </li>
        //             <li>
        //                 <a href="#commitee" className='navbar'>
        //                     Commitee
        //                     <DropDown className='dropdown'>
        //                         <NavLink className="navbarsubcomp" to='./intercommitee'><DropDownListValue>International Commitee</DropDownListValue></NavLink>
        //                         <NavLink className="navbarsubcomp" to='./natcommitee'><DropDownListValue>National Commitee</DropDownListValue></NavLink>
        //                         <NavLink className="navbarsubcomp" to='./internalcommitee'><DropDownListValue>Internal Commitee</DropDownListValue></NavLink>
        //                     </DropDown>
        //                 </a>
        //             </li>
        //             <li>

        //                 <a href="#downloads" className='navbarC'>Downloads</a>
        //             </li>
        //             <li>
        //                 <a href="#contact" className='navbar'>Contact</a>

        //             </li>
        //         </ul>

        // <div class="topnav" id="top-navbar">
        //     <a href="#home" class="active">Home</a>
        //     <a href="#news">News</a>
        //     <a href="#contact">Contact</a>
        //     <div class="dropdown">
        //         <button class="dropbtn">Dropdown
        //             <i class="fa fa-caret-down"></i>
        //         </button>
        //         <div class="dropdown-content">
        //             <a href="#">Link 1</a>
        //             <a href="#">Link 2</a>
        //             <a href="#">Link 3</a>
        //         </div>
        //     </div>
        //     <a href="#about">About</a>

        // </div>

    





    )
}


export default NavLinks;