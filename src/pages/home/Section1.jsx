import React from 'react';
import '../../assets/css/style.css';
import {Link} from 'react-router-dom';


import Checklist from "../../assets/img/checklist.png";
import Start from "../../assets/img/star.png";
import Car from "../../assets/img/car-insurance.png"

const Section1 = () => {
  return (  
    
    <section id="sect-2" className="sect-2 p-5">
    <div className="container-fluid pt-0" data-aos="fade-up">
      <div className="pt-0 d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
        <h1>Vos assurances à portée de pouce</h1>
        <ul className="list-inline">
          <li className="list-inline-item"><img src={Checklist} width="25px" alt="AboutImg" /> 100% mobile et flexible</li>
          <li className="list-inline-item"><img src={Checklist} width="25px" alt="AboutImg" /> 0% prise de tête</li>
          <li className="list-inline-item"><img src={Checklist} width="25px" alt="AboutImg" /> au juste prix</li>
        </ul>
        <p>L’application d’assurance <strong>la mieux notée</strong></p>
        <h5>
          <strong>4,5</strong>&nbsp; <img src={Start} className="rating" alt=''/>
          <img src={Start} className="rating"  alt="StartImg"/>
          <img src={Start} className="rating"  alt="StartImg"/>
          <img src={Start} className="rating"  alt="StartImg"/>
          <img src={Start} className="rating"  alt="StartImg"/>
          &nbsp;<span><i className="bi bi-apple"></i></span>
          &nbsp;<span><i className="bi bi-google-play"></i></span>
        </h5>
        <Link to="" className="btn-about">Obtenir un prix</Link>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="card">
            <img src={Car} width="20%" alt=""/>
            <div className="card-body pt-0">
              <h5>Auto</h5>
              <p>
                Dès <strong className="prix">6,63€</strong> /mois
              </p>
              <h6 className="mt-1">
                <strong><Link to="" className="stretched-link">Obtenir un prix</Link></strong>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="card">
            <img src="assets/img/house.png" width="20%" alt=""/>
            <div className="card-body pt-0">
              <h5>Habitation</h5>
              <p>
                Dès <strong className="prix">4,48€</strong> /mois
              </p>
              <h6 className="mt-1">
                <strong><Link to="" className="stretched-link">Obtenir un prix</Link></strong>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="card">
            <img src="assets/img/motorcycle.png" width="20%" alt=""/>
            <div className="card-body pt-0">
              <h5>Moto</h5>
              <p>
                Dès <strong className="prix">11,25€</strong> /mois
              </p>
              <h6 className="mt-1">
                <strong><Link to="" className="stretched-link">Obtenir un prix</Link></strong>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="card">
            <img src="../assets/img/smartphone.png" width="20%" alt=""/>
            <div className="card-body pt-0">
              <h5>Smartphone</h5>
              <p>
                Dès <strong className="prix">1,30€</strong> /mois
              </p>
              <h6 className="mt-1">
                <strong><Link to="" className="stretched-link">Decouvrir</Link></strong>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  )
}

export default Section1;