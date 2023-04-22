import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from "../../../components/helmet/Helmet";
import '../../../assets/css/style.css';


const assuranceHabitation = () => {
  return (
    <Helmet>
        <header id="header" className="fixed-top ps-5 pe-5">
        <div className="container-fluid d-flex justify-content-between align-items-center">
    
          <img src="assets/img/Assurance.png" width="100" alt=""/>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li className="dropdown active"><Link to="/home"><span>Assurance</span><i className="bi bi-chevron-down"></i></Link>
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
            <Link className="twitter"><i className="bi bi-twitter"></i></Link>
            <Link className="facebook"><i className="bi bi-facebook"></i></Link>
            <Link className="instagram"><i className="bi bi-instagram"></i></Link>
            <Link className="linkedin"><i className="bi bi-linkedin"></i></Link>
          </div>
        </div>
        </header>
        <section id="sect-banner-habitation" className="sect-banner">
    <div className="container" data-aos="zoom-in">
      <div data-aos="fade-up" data-aos-delay="100">
        <div className="banner-item">
          <h1 className="pt-5 mb-0">
            Votre assurance habitation à partir de <br/>
            <span>4,57€</span> par mois
          </h1>
        </div>
        <div className="text-center">
          <Link to ="" className="btn-sinistre">Obtenir un devis gratuitement</Link>
        </div>
      </div>
    </div>
  </section>
  <section id="contenair-comment" className="contenair-comment p-5">
    <div className="container-fluid" data-aos="zoom-in" data-aos-delay="100">
      <div className="row mt-0 justify-content-between card-comment p-4">
        <div className="col-md-5 mb-5 mb-md-0 title-comment">
          <h2 className="fw-bold">Nos meilleurs <br></br>
          ambassadeurs, c’est vous !</h2>
        </div>
        <div className="col-md-3 mb-5 mb-md-0 m-2 ms-0 me-0 card-profil">
          <div className="row mt-3 mb-2">
            <div className="col-xxl-4 col-xl-4 col-md-12 col-sm-4 col-xs-4 text-xl-center text-md-center text-sm-center text-xs-start">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="rounded-circle shadow-1-strong" width="70" height="70" alt=''/>
            </div>
            <div className="col-xxl-8 col-xl-8 col-md-12 col-sm-8 col-xs-8 text-xl-start text-md-center text-sm-start text-xs-start">
              <h5 className="mt-2 mb-1 fw-bold">Lily M.</h5>
              <h6 className="text-primary mb-0">Assurée Leocare depuis 10 mois</h6>
              <ul className="list-unstyled d-flex mb-2 justify-content-xl-start justify-content-md-center justify-content-xs-start">
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
              </ul>
            </div>
          </div>
          <p className="mb-2 text-xl-start text-md-center text-xs-start">
            “Rapide et simple. J’ai souscrit une assurance habitation à l’occasion de mon dernier déménagement en 5 minutes chrono un dimanche ! Et j’ai tout de suite eu accès à mon attestation d’assurance.”
          </p>
        </div>
        <div className="col-md-3 mb-5 mb-md-0 m-2 ms-0 me-0 card-profil">
          <div className="row mt-3 mb-2">
            <div className="col-xxl-4 col-xl-4 col-md-12 col-sm-4 col-xs-4 text-xl-center text-md-center text-sm-center text-xs-start">
              <img src="assets/img/portfolio/portfolio-2.jpg"
              className="rounded-circle shadow-1-strong" width="70" height="70" alt=''/>
            </div>
            <div className="col-xxl-8 col-xl-8 col-md-12 col-sm-8 col-xs-8 text-xl-start text-md-center text-sm-start text-xs-start">
              <h5 className="mt-2 mb-1 fw-bold">Thomas C.</h5>
              <h6 className="text-primary mb-0">Assurée Leocare depuis 6 mois</h6>
              <ul className="list-unstyled d-flex mb-2 justify-content-xl-start justify-content-md-center justify-content-xs-start">
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
                <li>
                  <img src="assets/img/star.png" className="rating-comment" alt=''/>
                </li>
              </ul>
            </div>
          </div>
          <p className="mb-2 text-xl-start text-md-center text-xs-start">
            “Service client réactif. J’ai eu un dégât des eaux et Leocare m’a facilité la vie. Des conseillers top et tous les documents administratifs à portée de main depuis l’application !”
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="sect-card-list" className="sect-card-list p-5 mt-3">
    <div className="container-fluid" data-aos="zoom-in" data-aos-delay="100">
      <div className="row">
        <h1>Pourquoi l’assurance habitation <span>chez Leocare ?</span></h1>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="count-box">
            <img src="assets/img/maison-icon.png" alt=""/>
            <h5>Une seule assurance <span>pour toute votre famille</span></h5>
            <p>Conjoint, enfants mais aussi coloc : ajoutez ceux qui partagent votre vie gratuitement et simplement !</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mt-md-0">
          <div className="count-box">
            <img src="assets/img/tv-icon.png" alt=""/>
            <h5><span>Valeur à neuf</span> de l’électroménager</h5>
            <p>
              Vous venez de vous faire plaisir en achetant un nouveau pc ? Ajoutez la valeur à neuf pour vos appareils électroménager et high-tech !
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mt-lg-0">
          <div className="count-box">
            <img src="assets/img/people-icon.png" alt=""/>
            <h5>L’assurance <span>scolaire</span></h5>
            <p>
              Cantine, voyage scolaire, stage ? Leocare s’occupe aussi des plus petits de la famille avec une assurance scolaire.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mt-lg-0">
          <div className="count-box">
            <img src="assets/img/bouee-icon.png" alt=""/>
            <h5>Une même <span>assistance pour tous !</span></h5>
            <p>
              Aide à domicile, serrurier, hébergement, carte neige.. Tout est compris quelle que soit votre formule.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="sect-table" className="sect-table p-5 mt-5">
    <div className="container-fluid" data-aos="zoom-in" data-aos-delay="100">
      <div className="row">
        <h1>Des garanties <span>au top</span></h1>
        <p className="mt-4">
          <strong>Côté habitation, vous avez besoin d’être un peu, beaucoup ou super (r)assuré ?</strong><br></br>
          Avant ou après avoir souscrit chez nous, ajustez votre contrat selon vos besoins.
        </p>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div className="count-box">
            <h4 className="py-4">Formule <span>Eco</span></h4>
            <p className="pb-4 m-0">
              A partir de <strong><span>4,57</span> €/mois</strong>
            </p>
            <Link>En savoir plus &nbsp;<i className="fa-solid fa-circle-chevron-right"></i></Link>
            <div className="accordion accordion-flush mt-4" id="accordionEcho">
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-0">
                  <div className="accordion-button collapsed .no-collapsable" data-bs-toggle="collapse" data-bs-target="#echo-0" aria-expanded="false" aria-controls="echo-0">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Incendie & Evènements climatiques</strong>
                  </div>
                </div>
                <div id="echo-0" className="accordion-collapse collapse" aria-labelledby="flush-echo-0" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Vous êtes couvert pour les dommages matériels sur votre habitation causés en cas d’incendie, explosion, chute de foudre ou d'événements climatiques (tempête, grêle). 
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-1">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-1" aria-expanded="false" aria-controls="echo-1">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Dégâts des Eaux</strong>
                  </div>
                </div>
                <div id="echo-1" className="accordion-collapse collapse" aria-labelledby="flush-echo-1" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Vous êtes couvert pour les dommages subis en cas de fuites, infiltrations (liés aux toitures, etc) et nous prenons en charge les frais de recherche de fuite et les mesures de sauvetage et interventions des secours suite à un dégâts des eaux.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-2">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-2" aria-expanded="false" aria-controls="echo-2">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Responsabilité civile</strong>
                  </div>
                </div>
                <div id="echo-2" className="accordion-collapse collapse" aria-labelledby="flush-echo-2" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Vous êtes assuré pour les dommages (corporels et matériels) que vous pourriez causer à une autre personne.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-3">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-3" aria-expanded="false" aria-controls="echo-3">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Catastrophes naturelles</strong>
                  </div>
                </div>
                <div id="echo-3" className="accordion-collapse collapse" aria-labelledby="flush-echo-3" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Votre véhicule est dépanné/remorqué dès 0km en France et à l'Etranger. Vous pouvez avoir un prêt de véhicule et accéder à de nombreux services.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-4">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-4" aria-expanded="false" aria-controls="echo-4">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Attentats</strong>
                  </div>
                </div>
                <div id="echo-4" className="accordion-collapse collapse" aria-labelledby="flush-echo-4" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Garantit les dommages suite à un attentat ou actes de terrorisme.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-5">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-5" aria-expanded="false" aria-controls="echo-5">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Catastrophes technologiques</strong>
                  </div>
                </div>
                <div id="echo-5" className="accordion-collapse collapse" aria-labelledby="flush-echo-5" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Votre habitation est couverte contre les dégâts matériels causés par une catastrophe technologique (stockage souterrain de produits dangereux, ...).
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-6">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-6" aria-expanded="false" aria-controls="echo-6">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Frais et pertes</strong>
                  </div>
                </div>
                <div id="echo-6" className="accordion-collapse collapse" aria-labelledby="flush-echo-6" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Garantie qui couvre les frais et pertes causés suite à un sinistre (relogement, décontamination, gardiennage).
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-7">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-7" aria-expanded="false" aria-controls="echo-7">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Séjour-voyages</strong>
                  </div>
                </div>
                <div id="echo-7" className="accordion-collapse collapse" aria-labelledby="flush-echo-7" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Garantie qui couvre les dommages causés aux objets mobiliers importés en voyage.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-8">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-8" aria-expanded="false" aria-controls="echo-8">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Capital mobilier</strong>
                  </div>
                </div>
                <div id="echo-8" className="accordion-collapse collapse" aria-labelledby="flush-echo-8" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Garantie qui couvre votre mobilier en cas de sinistre dans votre habitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-9">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-9" aria-expanded="false" aria-controls="echo-9">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Capital objet de valeur</strong>
                  </div>
                </div>
                <div id="echo-9" className="accordion-collapse collapse" aria-labelledby="flush-echo-9" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Garantie qui couvre vos objets de valeurs (bijoux, métaux, tableaux) dans l’habitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-1-0">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-1-0" aria-expanded="false" aria-controls="echo-1-0">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Assistance</strong>
                  </div>
                </div>
                <div id="echo-1-0" className="accordion-collapse collapse" aria-labelledby="flush-echo-1-0" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Serrurier, carte neige, aide ménagère, garde des animaux de compagnie en cas de sinistre et de nombreux autres services…
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-1-1">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-1-1" aria-expanded="false" aria-controls="echo-1-1">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Vol et actes<br></br>de vandalisme <span>en option</span></strong>
                  </div>
                </div>
                <div id="echo-1-1" className="accordion-collapse collapse" aria-labelledby="flush-echo-1-1" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Garantie qui couvre le vol, les détériorations et les destructions des biens assurés dans le cas d’une effraction, de clefs volées ou de fausses clefs.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-1-2">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-1-2" aria-expanded="false" aria-controls="echo-1-2">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Bris de glace <span>en option</span></strong>
                  </div>
                </div>
                <div id="echo-1-2" className="accordion-collapse collapse" aria-labelledby="flush-echo-1-2" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Vous êtes assuré sur les dommages causés à la suite d’un bris accidentel de verres et de glace dans l’habitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-1-3">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-1-3" aria-expanded="false" aria-controls="echo-1-3">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Défense pénale et recours suite à un accident</strong>
                  </div>
                </div>
                <div id="echo-1-3" className="accordion-collapse collapse" aria-labelledby="flush-echo-1-3" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Garantie qui défend vos droits en cas de litige avec quelqu’un suite à un sinistre.
                  </div>
                </div>
              </div>
              <div className="accordion-item disabled">
                <div className="accordion-header" id="flush-tiers-1-4">
                  <div className="accordion-button collapsed">
                    <span className="fas fa-times-circle"></span>
                    &nbsp;&nbsp;&nbsp;<span>Dommages électriques</span>
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-1-5">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-1-5" aria-expanded="false" aria-controls="echo-1-5">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Valeur à neuf <br></br> Electroménager, high-tech, informatique (3 ans) <span>en option</span></strong>
                  </div>
                </div>
                <div id="echo-1-5" className="accordion-collapse collapse" aria-labelledby="flush-echo-1-5" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Indemnisation du montant des réparations de vos appareils électroménagers et high-tech à hauteur de son prix d'acquisition en cas de sinistre.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-1-6">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-1-6" aria-expanded="false" aria-controls="echo-1-6">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Assurance scolaire <span>en option</span></strong>
                  </div>
                </div>
                <div id="echo-1-6" className="accordion-collapse collapse" aria-labelledby="flush-echo-1-6" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Vos enfants sont couverts durant toute l’année scolaire et ils sont assurés s’ils blessent un camarade.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-echo-1-7">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#echo-1-7" aria-expanded="false" aria-controls="echo-1-7">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Bris des glaces aux vérandas (maisons uniquement) <span>en option</span></strong>
                  </div>
                </div>
                <div id="echo-1-7" className="accordion-collapse collapse" aria-labelledby="flush-echo-1-7" data-bs-parent="#accordionEcho">
                  <div className="accordion-body">
                    Vous êtes assuré sur les dommages causés à la suite d’un bris accidentel de verres et de glace aux vérandas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-xl-0 mt-lg-0 mt-md-4 mt-sm-4">
          <div className="count-box">
            <h4 className="py-4">Formule <span>Medium</span></h4>
            <p className="pb-4 m-0">
              A partir de <strong><span>7,67</span> €/mois</strong>
            </p>
            <Link>En savoir plus &nbsp;<i className="fa-solid fa-circle-chevron-right"></i></Link>
            <div className="accordion accordion-flush mt-4" id="accordionMedium">
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-0">
                  <div className="accordion-button collapsed .no-collapsable" data-bs-toggle="collapse" data-bs-target="#medium-0" aria-expanded="false" aria-controls="medium-0">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Incendie & Evènements climatiques</strong>
                  </div>
                </div>
                <div id="medium-0" className="accordion-collapse collapse" aria-labelledby="flush-medium-0" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Vous êtes couvert pour les dommages matériels sur votre habitation causés en cas d’incendie, explosion, chute de foudre ou d'événements climatiques (tempête, grêle). 
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-1">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-1" aria-expanded="false" aria-controls="medium-1">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Dégâts des Eaux</strong>
                  </div>
                </div>
                <div id="medium-1" className="accordion-collapse collapse" aria-labelledby="flush-medium-1" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Vous êtes couvert pour les dommages subis en cas de fuites, infiltrations (liés aux toitures, etc) et nous prenons en charge les frais de recherche de fuite et les mesures de sauvetage et interventions des secours suite à un dégâts des eaux.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-2">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-2" aria-expanded="false" aria-controls="medium-2">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Responsabilité civile</strong>
                  </div>
                </div>
                <div id="medium-2" className="accordion-collapse collapse" aria-labelledby="flush-medium-2" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Vous êtes assuré pour les dommages (corporels et matériels) que vous pourriez causer à une autre personne.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-3">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-3" aria-expanded="false" aria-controls="medium-3">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Catastrophes naturelles</strong>
                  </div>
                </div>
                <div id="medium-3" className="accordion-collapse collapse" aria-labelledby="flush-medium-3" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Votre véhicule est dépanné/remorqué dès 0km en France et à l'Etranger. Vous pouvez avoir un prêt de véhicule et accéder à de nombreux services.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-4">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-4" aria-expanded="false" aria-controls="medium-4">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Attentats</strong>
                  </div>
                </div>
                <div id="medium-4" className="accordion-collapse collapse" aria-labelledby="flush-medium-4" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Garantit les dommages suite à un attentat ou actes de terrorisme.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-5">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-5" aria-expanded="false" aria-controls="medium-5">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Catastrophes technologiques</strong>
                  </div>
                </div>
                <div id="medium-5" className="accordion-collapse collapse" aria-labelledby="flush-medium-5" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Votre habitation est couverte contre les dégâts matériels causés par une catastrophe technologique (stockage souterrain de produits dangereux, ...).
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-6">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-6" aria-expanded="false" aria-controls="medium-6">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Frais et pertes</strong>
                  </div>
                </div>
                <div id="medium-6" className="accordion-collapse collapse" aria-labelledby="flush-medium-6" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Garantie qui couvre les frais et pertes causés suite à un sinistre (relogement, décontamination, gardiennage).
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-7">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-7" aria-expanded="false" aria-controls="medium-7">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Séjour-voyages</strong>
                  </div>
                </div>
                <div id="medium-7" className="accordion-collapse collapse" aria-labelledby="flush-medium-7" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Garantie qui couvre les dommages causés aux objets mobiliers importés en voyage.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-8">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-8" aria-expanded="false" aria-controls="medium-8">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Capital mobilier</strong>
                  </div>
                </div>
                <div id="medium-8" className="accordion-collapse collapse" aria-labelledby="flush-medium-8" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Garantie qui couvre votre mobilier en cas de sinistre dans votre habitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-9">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-9" aria-expanded="false" aria-controls="medium-9">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Capital objet de valeur</strong>
                  </div>
                </div>
                <div id="medium-9" className="accordion-collapse collapse" aria-labelledby="flush-medium-9" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Garantie qui couvre vos objets de valeurs (bijoux, métaux, tableaux) dans l’habitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-1-0">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-1-0" aria-expanded="false" aria-controls="medium-1-0">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Assistance</strong>
                  </div>
                </div>
                <div id="medium-1-0" className="accordion-collapse collapse" aria-labelledby="flush-medium-1-0" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Serrurier, carte neige, aide ménagère, garde des animaux de compagnie en cas de sinistre et de nombreux autres services…
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-1-1">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-1-1" aria-expanded="false" aria-controls="medium-1-1">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Vol et actes<br></br>de vandalisme <span>en option</span></strong>
                  </div>
                </div>
                <div id="medium-1-1" className="accordion-collapse collapse" aria-labelledby="flush-medium-1-1" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Garantie qui couvre le vol, les détériorations et les destructions des biens assurés dans le cas d’une effraction, de clefs volées ou de fausses clefs.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-1-2">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-1-2" aria-expanded="false" aria-controls="medium-1-2">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Bris de glace <span>en option</span></strong>
                  </div>
                </div>
                <div id="medium-1-2" className="accordion-collapse collapse" aria-labelledby="flush-medium-1-2" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Vous êtes assuré sur les dommages causés à la suite d’un bris accidentel de verres et de glace dans l’habitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-1-3">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-1-3" aria-expanded="false" aria-controls="medium-1-3">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Défense pénale et recours suite à un accident</strong>
                  </div>
                </div>
                <div id="medium-1-3" className="accordion-collapse collapse" aria-labelledby="flush-medium-1-3" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Garantie qui défend vos droits en cas de litige avec quelqu’un suite à un sinistre.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-1-4">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-1-4" aria-expanded="false" aria-controls="medium-1-4">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Dommages électriques</strong>
                  </div>
                </div>
                <div id="medium-1-4" className="accordion-collapse collapse" aria-labelledby="flush-medium-1-4" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Garantie qui couvre vos appareils électriques branchés à l’habitation (électroménagers, high-tech, installations électriques).
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-1-5">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-1-5" aria-expanded="false" aria-controls="medium-1-5">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Valeur à neuf <br></br>Electroménager, high-tech, informatique (3 ans) <span>en option</span></strong>
                  </div>
                </div>
                <div id="medium-1-5" className="accordion-collapse collapse" aria-labelledby="flush-medium-1-5" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Indemnisation du montant des réparations de vos appareils électroménagers et high-tech à hauteur de son prix d'acquisition en cas de sinistre.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-1-6">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-1-6" aria-expanded="false" aria-controls="medium-1-6">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Assurance scolaire <span>en option</span></strong>
                  </div>
                </div>
                <div id="medium-1-6" className="accordion-collapse collapse" aria-labelledby="flush-medium-1-6" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Vos enfants sont couverts durant toute l’année scolaire et ils sont assurés s’ils blessent un camarade.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-medium-1-7">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#medium-1-7" aria-expanded="false" aria-controls="medium-1-7">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Bris des glaces aux vérandas (maisons uniquement) <span>en option</span></strong>
                  </div>
                </div>
                <div id="medium-1-7" className="accordion-collapse collapse" aria-labelledby="flush-medium-1-7" data-bs-parent="#accordionMedium">
                  <div className="accordion-body">
                    Vous êtes assuré sur les dommages causés à la suite d’un bris accidentel de verres et de glace aux vérandas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-xl-0 mt-lg-0 mt-md-4 mt-sm-4">
          <div className="count-box">
            <h4 className="py-4">Formule <span>Premium</span></h4>
            <p className="pb-4 m-0">
              A partir de <strong><span>8,84</span> €/mois</strong>
            </p>
            <Link>En savoir plus &nbsp;<i className="fa-solid fa-circle-chevron-right"></i></Link>
            <div className="accordion accordion-flush mt-4" id="accordionPremium">
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-0">
                  <div className="accordion-button collapsed .no-collapsable" data-bs-toggle="collapse" data-bs-target="#premium-0" aria-expanded="false" aria-controls="premium-0">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Incendie & Evènements climatiques</strong>
                  </div>
                </div>
                <div id="premium-0" className="accordion-collapse collapse" aria-labelledby="flush-premium-0" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Vous êtes couvert pour les dommages matériels sur votre habitation causés en cas d’incendie, explosion, chute de foudre ou d'événements climatiques (tempête, grêle). 
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-1">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-1" aria-expanded="false" aria-controls="premium-1">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Dégâts des Eaux</strong>
                  </div>
                </div>
                <div id="premium-1" className="accordion-collapse collapse" aria-labelledby="flush-premium-1" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Vous êtes couvert pour les dommages subis en cas de fuites, infiltrations (liés aux toitures, etc) et nous prenons en charge les frais de recherche de fuite et les mesures de sauvetage et interventions des secours suite à un dégâts des eaux.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-2">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-2" aria-expanded="false" aria-controls="premium-2">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Responsabilité civile</strong>
                  </div>
                </div>
                <div id="premium-2" className="accordion-collapse collapse" aria-labelledby="flush-premium-2" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Vous êtes assuré pour les dommages (corporels et matériels) que vous pourriez causer à une autre personne.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-3">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-3" aria-expanded="false" aria-controls="premium-3">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Catastrophes naturelles</strong>
                  </div>
                </div>
                <div id="premium-3" className="accordion-collapse collapse" aria-labelledby="flush-premium-3" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Votre véhicule est dépanné/remorqué dès 0km en France et à l'Etranger. Vous pouvez avoir un prêt de véhicule et accéder à de nombreux services.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-4">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-4" aria-expanded="false" aria-controls="premium-4">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Attentats</strong>
                  </div>
                </div>
                <div id="premium-4" className="accordion-collapse collapse" aria-labelledby="flush-premium-4" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Garantit les dommages suite à un attentat ou actes de terrorisme.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-5">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-5" aria-expanded="false" aria-controls="premium-5">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Catastrophes technologiques</strong>
                  </div>
                </div>
                <div id="premium-5" className="accordion-collapse collapse" aria-labelledby="flush-premium-5" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Votre habitation est couverte contre les dégâts matériels causés par une catastrophe technologique (stockage souterrain de produits dangereux, ...).
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-6">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-6" aria-expanded="false" aria-controls="premium-6">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Frais et pertes</strong>
                  </div>
                </div>
                <div id="premium-6" className="accordion-collapse collapse" aria-labelledby="flush-premium-6" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Garantie qui couvre les frais et pertes causés suite à un sinistre (relogement, décontamination, gardiennage).
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-7">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-7" aria-expanded="false" aria-controls="premium-7">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Séjour-voyages</strong>
                  </div>
                </div>
                <div id="premium-7" className="accordion-collapse collapse" aria-labelledby="flush-premium-7" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Garantie qui couvre les dommages causés aux objets mobiliers importés en voyage.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-8">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-8" aria-expanded="false" aria-controls="premium-8">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Capital mobilier</strong>
                  </div>
                </div>
                <div id="premium-8" className="accordion-collapse collapse" aria-labelledby="flush-premium-8" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Garantie qui couvre votre mobilier en cas de sinistre dans votre habitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-9">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-9" aria-expanded="false" aria-controls="premium-9">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Capital objet de valeur</strong>
                  </div>
                </div>
                <div id="premium-9" className="accordion-collapse collapse" aria-labelledby="flush-premium-9" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Garantie qui couvre vos objets de valeurs (bijoux, métaux, tableaux) dans l’habitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-1-0">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-1-0" aria-expanded="false" aria-controls="premium-1-0">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Assistance</strong>
                  </div>
                </div>
                <div id="premium-1-0" className="accordion-collapse collapse" aria-labelledby="flush-premium-1-0" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Serrurier, carte neige, aide ménagère, garde des animaux de compagnie en cas de sinistre et de nombreux autres services…
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-1-1">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-1-1" aria-expanded="false" aria-controls="premium-1-1">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Vol et actes<br></br>de vandalisme <span>en option</span></strong>
                  </div>
                </div>
                <div id="premium-1-1" className="accordion-collapse collapse" aria-labelledby="flush-premium-1-1" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Garantie qui couvre le vol, les détériorations et les destructions des biens assurés dans le cas d’une effraction, de clefs volées ou de fausses clefs.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-1-2">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-1-2" aria-expanded="false" aria-controls="premium-1-2">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Bris de glace <span>en option</span></strong>
                  </div>
                </div>
                <div id="premium-1-2" className="accordion-collapse collapse" aria-labelledby="flush-premium-1-2" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Vous êtes assuré sur les dommages causés à la suite d’un bris accidentel de verres et de glace dans l’habitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-1-3">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-1-3" aria-expanded="false" aria-controls="premium-1-3">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Défense pénale et recours suite à un accident</strong>
                  </div>
                </div>
                <div id="premium-1-3" className="accordion-collapse collapse" aria-labelledby="flush-premium-1-3" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Garantie qui défend vos droits en cas de litige avec quelqu’un suite à un sinistre.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-1-4">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-1-4" aria-expanded="false" aria-controls="premium-1-4">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Dommages électriques</strong>
                  </div>
                </div>
                <div id="premium-1-4" className="accordion-collapse collapse" aria-labelledby="flush-premium-1-4" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Garantie qui couvre vos appareils électriques branchés à l’habitation (électroménagers, high-tech, installations électriques).
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-1-5">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-1-5" aria-expanded="false" aria-controls="premium-1-5">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Valeur à neuf <br></br>Electroménager, high-tech, informatique (3 ans)</strong>
                  </div>
                </div>
                <div id="premium-1-5" className="accordion-collapse collapse" aria-labelledby="flush-premium-1-5" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Indemnisation du montant des réparations de vos appareils électroménagers et high-tech à hauteur de son prix d'acquisition en cas de sinistre.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-1-6">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-1-6" aria-expanded="false" aria-controls="premium-1-6">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Assurance scolaire <span>en option</span></strong>
                  </div>
                </div>
                <div id="premium-1-6" className="accordion-collapse collapse" aria-labelledby="flush-premium-1-6" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Vos enfants sont couverts durant toute l’année scolaire et ils sont assurés s’ils blessent un camarade.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-premium-1-7">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#premium-1-7" aria-expanded="false" aria-controls="premium-1-7">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Bris des glaces aux vérandas (maisons uniquement) <span>en option</span></strong>
                  </div>
                </div>
                <div id="premium-1-7" className="accordion-collapse collapse" aria-labelledby="flush-premium-1-7" data-bs-parent="#accordionPremium">
                  <div className="accordion-body">
                    Vous êtes assuré sur les dommages causés à la suite d’un bris accidentel de verres et de glace aux vérandas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-xl-0 mt-lg-4 mt-md-4 mt-sm-4">
          <div className="count-box">
            <h4 className="py-4">Formule <span>PNO</span></h4>
            <p className="pb-4 m-0">
              A partir de <strong><span>3,23</span> €/mois</strong>
            </p>
            <Link>En savoir plus &nbsp;<i className="fa-solid fa-circle-chevron-right"></i></Link>
            <div className="accordion accordion-flush mt-4" id="accordionPNO">
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-0">
                  <div className="accordion-button collapsed .no-collapsable" data-bs-toggle="collapse" data-bs-target="#pno-0" aria-expanded="false" aria-controls="pno-0">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Incendie & Evènements climatiques</strong>
                  </div>
                </div>
                <div id="pno-0" className="accordion-collapse collapse" aria-labelledby="flush-pno-0" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Vous êtes couvert pour les dommages matériels sur votre habitation causés en cas d’incendie, explosion, chute de foudre ou d'événements climatiques (tempête, grêle). 
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-1">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pno-1" aria-expanded="false" aria-controls="pno-1">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Dégâts des Eaux</strong>
                  </div>
                </div>
                <div id="pno-1" className="accordion-collapse collapse" aria-labelledby="flush-pno-1" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Vous êtes couvert pour les dommages subis en cas de fuites, infiltrations (liés aux toitures, etc) et nous prenons en charge les frais de recherche de fuite et les mesures de sauvetage et interventions des secours suite à un dégâts des eaux.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-2">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pno-2" aria-expanded="false" aria-controls="pno-2">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Responsabilité civile</strong>
                  </div>
                </div>
                <div id="pno-2" className="accordion-collapse collapse" aria-labelledby="flush-pno-2" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Vous êtes assuré pour les dommages (corporels et matériels) que vous pourriez causer à une autre personne.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-3">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pno-3" aria-expanded="false" aria-controls="pno-3">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Catastrophes naturelles</strong>
                  </div>
                </div>
                <div id="pno-3" className="accordion-collapse collapse" aria-labelledby="flush-pno-3" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Votre véhicule est dépanné/remorqué dès 0km en France et à l'Etranger. Vous pouvez avoir un prêt de véhicule et accéder à de nombreux services.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-4">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pno-4" aria-expanded="false" aria-controls="pno-4">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Attentats</strong>
                  </div>
                </div>
                <div id="pno-4" className="accordion-collapse collapse" aria-labelledby="flush-pno-4" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Garantit les dommages suite à un attentat ou actes de terrorisme.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-5">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pno-5" aria-expanded="false" aria-controls="pno-5">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Catastrophes technologiques</strong>
                  </div>
                </div>
                <div id="pno-5" className="accordion-collapse collapse" aria-labelledby="flush-pno-5" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Votre habitation est couverte contre les dégâts matériels causés par une catastrophe technologique (stockage souterrain de produits dangereux, ...).
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-6">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pno-6" aria-expanded="false" aria-controls="pno-6">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Vol et actes<br></br>de vandalisme <span>en option</span></strong>
                  </div>
                </div>
                <div id="pno-6" className="accordion-collapse collapse" aria-labelledby="flush-pno-6" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Garantie qui couvre le vol, les détériorations et les destructions des biens assurés dans le cas d’une effraction, de clefs volées ou de fausses clefs.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-7">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pno-7" aria-expanded="false" aria-controls="pno-7">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Défense pénale et recours suite à un accident</strong>
                  </div>
                </div>
                <div id="pno-7" className="accordion-collapse collapse" aria-labelledby="flush-pno-7" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Garantie qui défend vos droits en cas de litige avec quelqu’un suite à un sinistre.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-8">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pno-8" aria-expanded="false" aria-controls="pno-8">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Location meublée <span>en option</span></strong>
                  </div>
                </div>
                <div id="pno-8" className="accordion-collapse collapse" aria-labelledby="flush-pno-8" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Vos biens mobiliers sont couverts en cas de sinistre.
                  </div>
                </div>
              </div>
              <div className="accordion-item active">
                <div className="accordion-header" id="flush-pno-9">
                  <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pno-9" aria-expanded="false" aria-controls="pno-9">
                    <span className="fas fa-check-circle"></span>
                    &nbsp;&nbsp;&nbsp; <strong>Bris des glaces aux vérandas (maisons uniquement) <span>en option</span></strong>
                  </div>
                </div>
                <div id="pno-9" className="accordion-collapse collapse" aria-labelledby="flush-pno-9" data-bs-parent="#accordionPNO">
                  <div className="accordion-body">
                    Vous êtes assuré sur les dommages causés à la suite d’un bris accidentel de verres et de glace aux vérandas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="text-center mt-5 pt-2">
        <Link to="" className="btn-devis">Obtenir un devis</Link>
      </div>
    </div>
  </section>
  <section id="sect-list-guide" className="sect-guide p-5 mt-3">
    <div className="container-fluid pt-0" data-aos="fade-up">
      <div className="pt-0 d-flex flex-column" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-9">
            <h3>Vous êtes perdu?<span> Suivez guide</span></h3>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card" style={{height: "100%"}}>
              <img src="assets/img/hero-bg-1.jpg" width="100%" alt=""/>
              <div className="card-body pt-0">
                <h5 className="pt-4"><strong>Tout savoir sur l’assurance habitation Leocare</strong></h5>
                <p className="summary">
                  Obligatoire pour les locataires et conseillée pour les propriétaires, l’assurance habitation vous permet de protéger votre logement et vos biens mobiliers contre d’éventuels sinistres. Que ce soit suite à un déménagement, pour obtenir une meilleure couverture ou encore parce que l’assurance ne répond plus à leurs besoins, les Français sont en moyenne 20% à changer d’assurance habitation chaque année. Si c’est aussi votre cas et que vous cherchez une assurance complète qui vous accompagne au quotidien, notre assurance Leocare est faite pour vous ! En plus d’une couverture optimale, nous vous proposons de nombreux services destinés à vous protéger quotidiennement.
                </p>
                <Link to="" className="stretched-link"></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card" style={{height: "100%"}}>
              <img src="assets/img/hero-bg-1.jpg" width="100%" alt=""/>
              <div className="card-body pt-0">
                <h5 className="pt-4"><strong>Assurance Leocare : quels documents fournir pour souscrire ?</strong></h5>
                <p className="summary">
                  Ça y est, vous venez de franchir le cap : vous avez souscrit votre nouvelle assurance. Afin de finaliser les derniers détails mais surtout pour confirmer les informations déclarées, vous devez fournir plusieurs justificatifs à votre nouvelle assurance. Découvrons ensemble ceux dont vous avez besoin pour souscrire une assurance Leocare et comment les ajouter à l’application !
                </p>
                <Link to="" className="stretched-link"></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card" style={{height: "100%"}}>
              <img src="assets/img/hero-bg-1.jpg" width="100%" alt=""/>
              <div className="card-body pt-0">
                <h5 className="pt-4"><strong>Assurance habitation : que faire en cas de déménagement ?</strong></h5>
                <p className="summary">
                  Vous venez d’obtenir un poste dans une autre région ? Votre famille s’agrandit et vous avez besoin d’espace ? Comme près de 3 millions de Français chaque année, vous avez décidé de déménager ! Que vous soyez propriétaire ou locataire, plusieurs options s’offrent à vous, certaines démarches vous attendent.
                </p>
                <Link to="" className="stretched-link"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="sect-question" className="sect-guide p-5">
    <div className="container-fluid pt-0" data-aos="fade-up">
      <div className="pt-0 d-flex flex-column" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-9">
            <h3 className="pb-2 pt-4">Vous avez des questions ? <span>On a des réponses !</span></h3>
            <p>Une question reste sans réponse ? N’hésitez pas à <strong>consulter notre <Link to="">FAQ</Link> ou un conseiller via le chat !</strong></p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="row">
          <div className="accordion">
            <div className="accordion-item mb-3">
              <div className="quest-header p-3 ps-4" id="quest-header-0" data-bs-toggle="collapse" data-bs-target="#question-0">
                <span className="fas fa-plus" style={{margin: "auto"}}></span>&nbsp;&nbsp;&nbsp;
                <strong>Est-ce que mon garage/ mon box est couvert dans mon assurance habitation ?</strong>
              </div>
              <div id="question-0" className="collapse p-3 ps-4">
                Les dépendances et/ou garages situés dans un rayon de 5Km sont couverts par votre assurance habitation. Si le garage fait plus que 30m2 alors il faut le déclarer, sinon, pas besoin de le faire !
              </div>
            </div>
            <div className="accordion-item mb-3">
              <div className="quest-header p-3 ps-4" id="quest-header-1" data-bs-toggle="collapse" data-bs-target="#question-1">
                <span className="fas fa-plus" style={{margin: "auto"}}></span>&nbsp;&nbsp;&nbsp;
                <strong>Comment avoir l’assurance scolaire ?</strong>
              </div>
              <div id="question-1" className="collapse p-3 ps-4">
                Il vous suffit de sélectionner l’option assurance scolaire lors de votre devis. Vous avez oublié de l’ajouter avant votre souscription ? Demandez à un Leoconseiller de l’ajouter par chat.
              </div>
            </div>
            <div className="accordion-item mb-3">
              <div className="quest-header p-3 ps-4" id="quest-header-2" data-bs-toggle="collapse" data-bs-target="#question-2">
                <span className="fas fa-plus" style={{margin: "auto"}}></span>&nbsp;&nbsp;&nbsp;
                <strong>Combien de pièces dois-je compter ?</strong>
              </div>
              <div id="question-2" className="collapse p-3 ps-4">
                On compte comme pièces principales les pièces suivantes : chambres, salon, salle à manger. Et si une pièce fait plus de 50m² alors il faut en compter 2 ! Un doute ? Cliquez sur l’aide lors de votre devis ou contactez-nous par chat ?
              </div>
            </div>
            <div className="accordion-item mb-3">
              <div className="quest-header p-3 ps-4" id="quest-header-3" data-bs-toggle="collapse" data-bs-target="#question-3">
                <span className="fas fa-plus" style={{margin: "auto"}}></span>&nbsp;&nbsp;&nbsp;
                <strong>Comment ajouter mon colocataire / mon mari au contrat ? </strong>
              </div>
              <div id="question-3" className="collapse p-3 ps-4">
                En 15 secondes top chrono ! ⏱ Dès souscription, rendez-vous sur le chat, envoyez-nous la pièce d’identité de votre coloc ou conjoint et le tour est joué !
              </div>
            </div>
            <div className="accordion-item mb-3">
              <div className="quest-header p-3 ps-4" id="quest-header-4" data-bs-toggle="collapse" data-bs-target="#question-4">
                <span className="fas fa-plus" style={{margin: "auto"}}></span>&nbsp;&nbsp;&nbsp;
                <strong>En cas de sinistre, suis-je relogé ?</strong>
              </div>
              <div id="question-4" className="collapse p-3 ps-4">
                Pas d’inquiétude, on vous chouchoute : nous recherchons un hôtel proche de votre domicile et prenons en charge votre petit déjeuner et chambre d’hôtel pendant 15 jours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="benefice" className="benefice p-5">
    <div className="container-fluid" data-aos="zoom-in">

      <div data-aos="fade-up" data-aos-delay="100">
        <div className="benefice-item">
          <h3 className="pb-2 mb-2">Et souscrire chez nous, c’est aussi simple que de commander une pizza</h3>
          <p>
            Il vous suffit de répondre à quelques questions (4 à 8) pour définir vos besoins, pour découvrir le devis qui vous correspond. On se lance ?
          </p>
        </div>
        <div className="text-center mt-4">
          <Link to="" className="btn-sinistre">Obtenir un devis gratuitement</Link>
        </div>
      </div>

    </div>
  </section>
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
    </Helmet>
  )
}

export default assuranceHabitation;