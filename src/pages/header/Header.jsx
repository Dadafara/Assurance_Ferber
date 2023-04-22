import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return ( 
    <header id="header" className="fixed-top ps-5 pe-5">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className='logo'>
          <Link to='/home'><img src="assets/img/Assurance.png" width="100"  height='100%' alt="logo"/></Link>
        </div>
        
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li className="dropdown active"><Link to=""><span>Assurance</span><i className="bi bi-chevron-down"></i></Link>
              <ul>
                <li><Link to="/auto" className="fas fa-car">&nbsp;&nbsp; Auto</Link></li>
                <li><Link to="/assuranceHabitation" className="fas fa-home">&nbsp;&nbsp; Habitation</Link></li>
                <li><Link to="/assuranceHabitation" className="fas fa-motorcycle">&nbsp;&nbsp; Moto</Link></li>
                <li><Link to="/assuranceHabitation" className="fas fa-mobile">&nbsp;&nbsp;&nbsp; Smartphone</Link></li>
              </ul>
            </li>
            <li><Link to="/Login">Espace membre</Link></li>
            <Link to="/Login" className="btn-header">Obtenir un prix</Link>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
  
        <div className="header-social-links"></div>
  
      </div>
  
    </header>
  )
}

export default Header;