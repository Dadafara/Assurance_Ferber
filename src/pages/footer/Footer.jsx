import React from 'react';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (  
    <footer id="footer" className="footer">
    <div className="footer-top p-5 pb-1">
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm-12">
            <img className="mb-4" src="assets/img/Assurance.png" width="100" alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Assurance</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i><Link to="">Assurance auto</Link></li>
              <li><i className="bx bx-chevron-right"></i><Link to="">Assurance habitation</Link></li>
              <li><i className="bx bx-chevron-right"></i><Link to="">Assurance moto</Link></li>
              <li><i className="bx bx-chevron-right"></i><Link to="">Assurance smartphone</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Aide</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i><Link to="">FAQ</Link></li>
              <li><i className="bx bx-chevron-right"></i><Link to="">Blog</Link></li>
              <li><i className="bx bx-chevron-right"></i><Link to="">Espace client</Link></li>
              <li><i className="bx bx-chevron-right"></i><Link to="">Comment contacter Leocare ?</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>À propos</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i><Link to="">Devenez Partenaire Leocare</Link></li>
              <li><i className="bx bx-chevron-right"></i><Link to="">Rejoignez-nous !</Link></li>
              <li><i className="bx bx-chevron-right"></i><Link to="">Bug Bounty</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Reseaux sociaux</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="social-links mt-3">
              <Link to="" className="facebook"><i className="fab fa-facebook-f"/></Link>
              <Link to="" className="twitter"><i className="fab fa-twitter"/></Link>
              <Link to="" className="linkedin"><i className="fab fa-linkedin-in"/></Link>
              <Link to="" className="instagram"><i className="fab fa-instagram"/></Link>
            </div>
          </div>

        </div>
        <div className="credits-top">
          <ul>
            <li><Link to="">Mentions legales</Link></li>
            <li><Link to="">Conditions générales d'utilisation</Link></li>
            <li><Link to="">Politiques de confidentialité</Link></li>
            <li><Link to="">Politique cookies</Link></li>
            <li><Link to="">Parametrer les cookies</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>2023</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <span>Ferber Enterprises</span>
      </div>
    </div>
  </footer>
    
  )
}

export default Footer;