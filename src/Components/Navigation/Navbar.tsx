import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand" href="#"><img src={ Logo } alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                    <li className="nav-item active mr-5">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active mr-5">
                        <a className="nav-link" href="#">Projects <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                    </li>
                    
                    </ul>
                    <a className="nav-link temp" href="#">Contact us <span className="sr-only">(current)</span></a>
                    
                </div>
                </nav>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
    </div>
  )
}

export default Navbar
