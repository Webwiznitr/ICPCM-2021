import { NavLink } from 'react-router-dom';
import './navbar.scss'




const NavLinks = (props) => {
    return (


        <div className="topnav">

    
                <NavLink className="navbar" to="/" onClick= { ()=> props.isMobile && props.closeMobileMenu()}>
                   <span>Home</span>
                </NavLink>

                

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn"> <span>About </span>  </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./about' onClick= { ()=> props.isMobile && props.closeMobileMenu()}> Conference </NavLink>
                 <NavLink className="navbarsubcomp" to='./aboutinstitute' onClick= { ()=> props.isMobile && props.closeMobileMenu()}> Institute </NavLink>
                <NavLink className="navbarsubcomp" to='./aboutdepartment' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> Department</NavLink>
                </div>
                               
                </div>

                <NavLink to="/#timeline_section" className='navbar' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> <span>Timeline</span></NavLink>

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn" onClick= { ()=> props.isMobile && props.closeMobileMenu() }>  <span>Publication </span> </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./callforpaper' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> Call for  paper </NavLink>
                <NavLink className="navbarsubcomp" to='./paperguidelines' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> Paper Submission Guidelines</NavLink>
                </div>
                               
                </div>

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn"  onClick= { ()=> props.isMobile && props.closeMobileMenu() }> <span>Registration </span> </a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./newregistration' onClick= { ()=> props.isMobile && props.closeMobileMenu() }> New Registration </NavLink>
                </div>
                               
                </div>

                
                <NavLink className="navbar" to="./sponsorship" onClick= { ()=> props.isMobile && props.closeMobileMenu() }>
                <span> Sponsorship </span>
                </NavLink>

                <div className='dropdown' >
                <a href = "#about" className = "dropbtn" onClick= { ()=> props.isMobile && props.closeMobileMenu() }> <span>Committee  </span></a>

                <div className= "dropdown-content">
                 <NavLink className="navbarsubcomp" to='./advisory' onClick= { ()=> props.isMobile && props.closeMobileMenu() }>Advisory Committee </NavLink>
                <NavLink className="navbarsubcomp" to='./organising' onClick= { ()=> props.isMobile && props.closeMobileMenu() }>Organising Committee</NavLink>

                </div>
                               
                </div>

                <NavLink to='./downloads' className='navbar' onClick= { ()=> props.isMobile && props.closeMobileMenu() }><span>Downloads </span></NavLink>
                <NavLink to="./contact" className='navbar' onClick= { ()=> props.isMobile && props.closeMobileMenu() }><span>Contact </span></NavLink>






        </div>

    )
}


export default NavLinks;