import React from "react";
import Helmet from "../../components/helmet/Helmet";
import { Link } from "react-router-dom";

const Type_Assurance = () => {
    return(    
        <Helmet>
            <header id="header" className="fixed-top m-0 p-0">
            <div className="container-fluid d-flex justify-content-between align-items-center p-2">
            <div className='logo'>
              <Link to='/home'><img src="assets/img/Assurance.png" typeof="button" width="100"  height='100%' alt="logo"/></Link>
            </div>
            </div>
            </header>
            <section id="sect-profite" className="sect-profite type-assurance">
                <div className="container d-flex flex-column align-items-center mb-5" data-aos="zoom-in" data-aos-delay="100">
                  <h1 className="title p-0 pt-3">Que souhaitez-vous <span>assurer ?</span></h1>
                  <p className="align-content-center">
                     Consultez nos tarifs <strong>rapidement</strong> et <strong>sans inscription</strong>
                  </p>
                </div>
                <div className="container pt-0" data-aos="fade-up">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
                      <div className="card py-5">
                        <img src="assets/img/house-icon.png" width="40%" alt=""/>
                        <div className="card-body pt-0">
                          <h3><strong><Link to='/devishabitation'  className="stretched-link">Habitation</Link></strong></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
                      <div className="card py-5">
                        <img src="assets/img/car-insurance.png" width="40%" alt=""/>
                        <div className="card-body pt-0">
                          <h3><strong><Link to='/devishabitation'  className="stretched-link">Automobile</Link></strong></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
                      <div className="card py-5">
                        <img src="assets/img/bike-icon.png" width="40%" alt=""/>
                        <div className="card-body pt-0">
                          <h3><Link to='/devishabitation'  className="stretched-link"><strong>Moto/Scooter</strong></Link></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
            <footer id="footer-devis" className="pb-0 footer">
            <div className="container">
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
            </footer>
        </Helmet>
    )
}
export default Type_Assurance;