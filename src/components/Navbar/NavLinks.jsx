import { NavLink } from 'react-router-dom';
import './navbar.scss'




const NavLinks = () => {
    return (


        <div className="topnav">

            
              <a href="#home" className="active" >
                <NavLink className="navbar_active" to="/" >
                    Home
                </NavLink> </a>

                

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn">  About  </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./aboutinstitute'> Institute </NavLink>
                <NavLink className="navbarsubcomp" to='./aboutdepartment'> Department</NavLink>
                </div>
                               
                </div>

                <a href="#timeline" className='navbar'>Timeline</a>

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn">  Paper  </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./callforpaper'> Call for  paper </NavLink>
                <NavLink className="navbarsubcomp" to='./paperguidelines'> Paper Submission Guidelines</NavLink>
                </div>
                               
                </div>

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn"> Registration  </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./newregistration'> New Registration </NavLink>
                <NavLink className="navbarsubcomp" to='./userlogin'> User Login</NavLink>
                </div>
                               
                </div>

                <a href="#" className="active" >
                <NavLink className="navbar_active" to="./sponsorship" >
                Sponsorship 
                </NavLink> </a>

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn"> Commitee  </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./intercommitee'>International Commitee </NavLink>
                <NavLink className="navbarsubcomp" to='./natcommitee'>National Commitee</NavLink>
                <NavLink className="navbarsubcomp" to='./internalcommitee'>Internal Commitee</NavLink>
                </div>
                               
                </div>

                <a href="#downloads" className='navbar'>Downloads</a>
                <a href="#contact" className='navbar'>Contact</a>






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