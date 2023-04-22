import React from 'react';
import Helmet from "../../../components/helmet/Helmet";
import { Link } from 'react-router-dom';

const devisHabitation = () => {
  return (
    <Helmet>
         <header id="header" classNameName="fixed-top m-0 p-0">
             <div className="container-fluid d-flex justify-content-between align-items-center p-2">
               <img src="assets/img/Assurance.png" width="100" alt=""/>
             </div>
         </header>
         <section id="profite-header" className="sect-profite pb-3">
             <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
               <div className="row">
                 <div className="col-lg-12 d-flex mt-5">
                   <img src="assets/img/house-icon.png" height="70%" alt=''/>
                   <h1 className="title">Les <span>+</span> Leocare</h1>
                 </div>
               </div>
             </div>
         </section>
         <section id="sect-profite" className="sect-profite devis-habitation pt-2">
             <div className="container pt-0" data-aos="fade-up">
               <div className="container pt-0 mb-5 d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                
                 <Link to="/typehabitation" className="btn-about"> Obtenir mon devis habitation</Link>
               </div>
               <div className="row justify-content-center">
                 <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
                   <div className="card">
                     <img src="assets/img/money-bag.png" width="40%" alt=""/>
                     <div className="card-body pt-0">
                       <h5><strong>Valeurs des biens</strong></h5>
                       <p>
                         La possibilité de choisir la valeur de vos biens mobiliers
                       </p>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
                   <div className="card">
                     <img src="assets/img/school-icon.png" width="40%" alt=""/>
                     <div className="card-body pt-0">
                       <h5><strong>Assurance scolaire</strong></h5>
                       <p>
                         Protégez vos enfants en 1 clic
                       </p>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-3 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
                   <div className="card">
                     <img src="assets/img/fire-truck-icon.png" width="40%" alt=""/>
                     <div className="card-body pt-0">
                       <h5><strong>Dépannage</strong></h5>
                       <p>
                         La prise en charge des frais de déplacement d'un serrurier, plombier, vitrier...
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
            </section>
            <footer id="footer-devis" className="pb-0 footer footer">
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

export default devisHabitation