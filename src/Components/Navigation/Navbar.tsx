import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import Logo from '../../assets/logo.png';


  
const Navbar: React.FC = () => {
  return (
    <div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <Link className="navbar-brand" to="/#"><img src={ Logo } alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                    <li className="nav-item active mr-5">
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item active mr-5">
                        <Link to='/About' className='nav-link'>About</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to='/#section' className='nav-link'>Videos</Link>
                    </li>
                    
                    </ul>
                    
                    <Link to='/contact' className='nav-link' style={{color: '#000'}}>Contact us</Link>
                </div>
                </nav>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
    </div>
  )
}

export default Navbar
