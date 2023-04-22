import React from "react";
import '../../assets/css/style.css';
import { Link } from "react-router-dom";

const SectionSinistre = () =>{
    return(
        <section id="sect-sinistre" className="sect-sinistre p-5">
    <div className="container-fluid" data-aos="zoom-in" data-aos-delay="100">
      <div className="row">
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <div className="row">
            <h1>Déclarer un <span>Sinistre,</span><br></br> c'est aussi simple que ça</h1>
            <p><span>97%</span> de nos clients restent chez Assurance après une gestion de sinistres</p>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-box">
                <i>1</i>
                <span data-purecounter-duration="1">Que s'est-il passé?</span>
                <p>Envoyez-nous vos photos et vos documents sur l'appli.</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mt-md-0">
              <div className="count-box">
                <i>2</i>
                <span data-purecounter-duration="1">Un expert vous contacte</span>
                <p>Pour évaluer le montant des dommages.</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mt-lg-0">
              <div className="count-box">
                <i>3</i>
                <span data-purecounter-duration="1">Vous êtes indemnisé!</span>
                <p>Après réception de la facture</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <img src="assets/img/sinistre.png" className="img-fluid" alt=""/>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="" className="btn-sinistre">Obtenir un prix</Link>
      </div>
      <div className="row mt-5 sinistre-pub">
        <div className="col-lg-5 order-1 order-lg-1 p-0">
          <img src="assets/img/sinistre.png" className="img-fluid" width="80%" alt=""/>
        </div>
        <div className="col-lg-7 order-2 order-lg-2 content pub-sinistre">
          <h3 className="pb-5 mb-0">Vos questions, nos réponses</h3>
          <p>Nos Leoconseillers sont à votre écoute!</p>
          <p>Contactez-nous par chat, mail, téléphone ou sur les réseaux sociaux.</p>
          <p>L'équipe Assurance est basée à 100% en France et bénéficie du label "Service France Garantie".</p>
          <div className="row pt-4">
            <div className="col-lg-5 col-md-12 mt-3">
            <Link to=""><strong>Comment nous contacter ? &nbsp;<i className="fas fa-circle-chevron-right"></i></strong></Link>
            </div>
            <div className="col-lg-5 col-md-12 mt-3">
            <Link to=""><strong>Consulter notre FAQ &nbsp;<i className="fas fa-circle-chevron-right"></i></strong></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
export default SectionSinistre;
