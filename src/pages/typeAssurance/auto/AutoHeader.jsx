import React from "react";
import '../../assets/css/style.css';


const AutoHeader = () => {
    return (
  <header id="header" className="fixed-top ps-5 pe-5">
    <div className="container-fluid d-flex justify-content-between align-items-center">

      <img src="assets/img/Assurance.png" width="100" alt=""/>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li className="dropdown active"><a href="#"><span>Assurance</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link  className="fas fa-car">&nbsp;&nbsp; Auto</Link></li>
              <li><Link  className="fas fa-home">&nbsp;&nbsp; Habitation</Link></li>
              <li><Link  className="fas fa-motorcycle">&nbsp;&nbsp; Moto</Link></li>
              <li><Link  className="fas fa-mobile">&nbsp;&nbsp;&nbsp; Smartphone</Link></li>
            </ul>
          </li>
          <li><Link to="/Login">Espace membre</Link></li>
              <Link to="/Login" className="btn-header">Obtenir un prix</Link>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div className="header-social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

    </div>

  </header>
    )
}
export default AutoHeader;