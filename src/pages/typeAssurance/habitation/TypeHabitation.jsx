import React, { useState } from 'react';
import Helmet from '../../../components/helmet/Helmet';
import '../../../assets/css/typeHabitation.css';
import { Link } from 'react-router-dom';



const TypeHabitation = () => {
  const [steps, setSteps] = useState(0);
  const [isRadioButtonChecked, setIsRadioButtonChecked] = useState("");
  const handleRadioButtonChange = () => {
    setIsRadioButtonChecked(!isRadioButtonChecked);// Inverse l'état du bouton radio à chaque clic
  };

  const handleButtonClick = () => {
    if (isRadioButtonChecked) {
       setSteps(steps +1);
    } else {
      alert("Veuillez cocher le bouton radio avant de passer à l'étape suivante !");
    }
  };

  return (
    <Helmet>
        <header id="header" className="fixed-top m-0 p-0">
          <div className="container-fluid d-flex justify-content-between align-items-center p-2">
            <img src="../assets/img/Assurance.png" width="100" alt=""/>
          </div>
        </header>

        <div className="container pt-0" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10 col-xs-11 mt-5 px-xl-5 px-sm-1 px-xs-1" data-aos="zoom-in" data-aos-delay="200">
            <form id="regForm" className="was-validated mt-5" action="">
            {steps === 0 ? (
            <>
            <div>
            <div id="sect-profite" className="sect-profite type-assurance">
              <h3 className="text-center fw-bold py-4 mb-4">Mon type de <span>logement</span></h3>
              <div className="container pt-0" data-aos="fade-up">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-8 mt-sm-0 mt-xs-4" data-aos="zoom-in" data-aos-delay="200">
                    <input 
                      type="radio" 
                      className="choix btn-radio type-logement" 
                      id="maison" 
                      name="type_logement" 
                      value="Maison"
                      checked={isRadioButtonChecked}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="maison" className="card-btn-radio">
                      <img src="../assets/img/house-icon.png" width="40%" alt=""/>
                      <h5><strong>Maison</strong></h5>
                    </label>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-8 mt-sm-0 mt-xs-5" data-aos="zoom-in" data-aos-delay="200">
                    <input 
                      type="radio"
                      className="choix btn-radio type-logement" 
                      id="appartement" 
                      name="type_logement" 
                      value="Appartement"
                      checked={isRadioButtonChecked}
                      onChange={handleRadioButtonChange}
                    />
                    <label htmlFor="appartement" className="card-btn-radio">
                      <img src="../assets/img/appartement-icon.png" width="40%" alt=""/>
                      <h5><strong>Appartement</strong></h5>
                    </label>
                  </div>
                </div>
              </div>
              <div className="container pt-0 mb-5" data-aos="fade-up">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
                    <hr className="hr-text" data-content="OU"/>
                    <div className="container pt-0 mb-4 d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                      <button type='radio' checked={isRadioButtonChecked} className="btn-type mt-0" id="aucun">* Aucun des deux</button>
                    </div>
                    <i style={{fontsize: "15px"}}>(*) Si vous avez un chalet en bois, résidence mobile, maison flottante, péniche, château, manoir, gentilhommière, monument historique, immeuble entier, ou un appartement dans ces cas sus-cité.</i>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div style={{overflow:"auto", margintop: "25px"}} id="action-btn">
            <div style={{float: "right"}}>
            <button
              className="btn btn-primary btn-md"
              onClick={handleButtonClick}
            >
              Suivant
            </button>
            </div>
            </div>
            </>
             ) : steps === 1? (
            <div>
            <h3 className="text-center fw-bold py-4 mb-4">Ma <span>situation personnelle</span></h3>
            <div className="row justify-content-center my-4 mx-0" id="situation-appartement">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-1">
                <div className="inputGroup">
                  <input id="rez-de-chaussee" className="choix-achat situation-appart" name="situation_appart" type="radio" value="Rez-de-chaaussée"/>
                  <label htmlFor="rez-de-chaussee" className="fw-bold">Rez-de-chaussée</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-md-0 mt-sm-2 mt-xs-2 px-1">
                <div className="inputGroup">
                  <input id="niveaux-sup" className="choix-achat situation-appart" name="situation_appart" type="radio" value="Niveaux supérieurs"/>
                  <label htmlFor="niveaux-sup" className="fw-bold">Niveaux supérieurs</label>
                </div>
              </div>
            </div>

            <div className="row justify-content-center my-4 mx-0" id="situation-personnelle">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-1">
                <div className="inputGroup">
                  <input id="proprietaire" className="choix-achat situation-perso" name="situation_perso" type="radio" value="Proprietaire"/>
                  <label htmlFor="proprietaire" className="fw-bold">Proprietaire</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-md-0 mt-sm-2 mt-xs-2 px-1">
                <div className="inputGroup">
                  <input id="locataire" className="choix-achat situation-perso" name="situation_perso" type="radio" value="Locataire"/>
                  <label htmlFor="locataire" className="fw-bold">Locataire</label>
                </div>
              </div>
            </div>

            <div className="row justify-content-center my-5 mx-0" id="situation-proprietaire">
              <h5 className="text-center">Votre residence <span className="required">*</span>:</h5>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-1">
                <div className="inputGroup">
                  <input id="res-principale" className="choix-achat residence-habitation" name="residence_habit" type="radio" value="Residence principale"/>
                  <label htmlFor="res-principale" className="fw-bold">Residence principale</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-md-0 mt-sm-2 mt-xs-2 px-1">
                <div className="inputGroup">
                  <input id="res-secondaire" className="choix-achat residence-habitation" name="residence_habit" type="radio" value="Residence secondaire"/>
                  <label htmlFor="res-secondaire" className="fw-bold">Residence sécondaire</label>
                </div>
              </div>
              <div className="col-12 mt-2 px-1">
                <div className="inputGroup">
                  <input id="log-location" className="choix-achat residence-habitation" name="residence_habit" type="radio" value="Logement en location"/>
                  <label htmlFor="log-location"><strong>Logement en location</strong> (Proprietaire Non Occupant)</label>
                </div>
              </div>
            </div>

            <div className="row justify-content-center my-4 mx-0" id="logement-location">
              <h5 className="text-center">Type de location <span className="required">*</span>:</h5>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-1">
                <div className="inputGroup">
                  <input id="meuble" className="choix-achat log-location" name="logement_log" type="radio" value="Meublé"/>
                  <label htmlFor="meuble" className="fw-bold">Meublé</label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-md-0 mt-sm-2 mt-xs-2 px-1">
                <div className="inputGroup">
                  <input id="non-meuble" className="choix-achat log-location" name="logement_log" type="radio" value="Non meublé"/>
                  <label htmlFor="non-meuble" className="fw-bold">Non meublé</label>
                </div>
              </div>
            </div>
          </div>
             ) : steps === 2 ? (
            <div>
            <h3 className="text-center fw-bold py-4"><span>Ville</span> de mon logement</h3>
            <div className="row">
              <div className="mt-4">
                <label htmlFor="code-postal">Adresse <span>*</span>: </label>
                <input type="text" className="form-control mt-2" name="adresse" id="adresse" placeholder="Ex: 31500" autoComplete="off"/>
              </div>
              <div className="mt-4">
                <label htmlFor="code-postal">Code postal <span>*</span>: </label>
                <input type="text" className="form-control mt-2" name="code-postal" id="code-postal" placeholder="Ex: 31500" autoComplete="off"/>
              </div>
              <div className="mt-4">
                <label htmlFor="ville">Ville <span>*</span>:</label>
                <input type="text" className="form-control mt-2" name="ville" id="ville" placeholder="Ex: Toulouse" autoComplete="off"/>
              </div>
            </div>
          </div>
             ) : steps === 3 ? (
            <div>
            <div className="d-flex flex-column align-items-center py-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="fw-bold p-0">Nombre de <span>pièces</span></h3>
              <h5 className="text-center fw-bold m-0 py-4"><span>Combien de pièces compte votre logement?</span> </h5><br></br>
              <p className="text-center">
                Il y a des pièces à ne pas comptabiliser comme par exemple la <strong>cuisine fermée</strong> ou <strong>salle de bain.</strong> Pour plus d’information, consultez l’aide.
              </p>
            </div>
            
            <div className="row justify-content-center">
              <div className="d-flex justify-content-center mt-3" data-aos="zoom-in" data-aos-delay="200">
                <Link className="btn btn-light rounded-0 py-2 px-3 informations mb-4" data-bs-toggle="modal" data-bs-target="#aideModal">
                <i className="fas fa-question-circle pt-1"></i>&nbsp; Qu'est-ce qui est considéré comme une pièce ?
                </Link>
              </div>

              <h5 className="text-center fw-bold pb-3">Nombre des pièces</h5>

              <div className="d-flex justify-content-center mb-5">
                <div className="btn-group handle-counter" id="handleCounter" role="group" aria-label="Basic example">
                  <button className="counter-minus counter count-0" id="counter-minus" type="button"><i className="fas fa-minus"></i></button>
                  <input type="text" name="nbpieces" id="nbpieces"/>
                  <button className="counter-plus counter count-0" id="counter-plus" type="button"><i className="fas fa-plus"></i></button>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Link className="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#nbPieceModal">Aidez-moi à calculer</Link>
              </div>
            </div>
          </div>
             ) : steps === 4 ? (
            <div>
            <h3 className="text-center fw-bold py-4 mb-4">Mes <span>autres pièces</span></h3>
            <div className="row justify-content-center">
              <div className="col-md-10 col-xs-14 mt-0" data-aos="zoom-in" data-aos-delay="200">
                <p className="text-center">
                  <strong>Parmi les pièces</strong> que vous venez de renseigner, Combien de pièces ont une surface plus de <strong>50m²</strong> ?
                </p>
                <div className="radio-tile-group">
                  <div className="input-container">
                    <input id="zero" className="radio-button choix-1" type="radio" name="pieces_cinq_plus" value="0"/>
                    <div className="radio-tile">
                      <label htmlFor="zero" className="radio-tile-label fw-bold">0</label>
                    </div>
                  </div>
              
                  <div className="input-container">
                    <input id="one" className="radio-button choix-1" type="radio" name="pieces_cinq_plus" value="1"/>
                    <div className="radio-tile">
                      <label htmlFor="one" className="radio-tile-label fw-bold">1</label>
                    </div>
                  </div>
              
                  <div className="input-container">
                    <input id="two" className="radio-button choix-1" type="radio" name="pieces_cinq_plus" value="2"/>
                    <div className="radio-tile">
                      <label htmlFor="two" className="radio-tile-label fw-bold">2</label>
                    </div>
                  </div>
              
                  <div className="input-container">
                    <input id="three" className="radio-button choix-1" type="radio" name="pieces_cinq_plus" value="3"/>
                    <div className="radio-tile">
                      <label htmlFor="three" className="radio-tile-label fw-bold">3</label>
                    </div>
                  </div>
                </div>
                <h5 className="text-center fw-bold">Dépendance de plus de 30m²</h5>
                <p className="text-center">
                  Garages, Caves, granges, remises, hangars et tout autre bâtiment attenant ou non aux locaux d'habitation
                </p>
                <div className="radio-tile-group mt-1">
                  <div className="input-container">
                    <input id="zero" className="radio-button choix-2" type="radio" name="pieces_trois_plus" value="0"/>
                    <div className="radio-tile">
                      <label htmlFor="zero" className="radio-tile-label fw-bold">0</label>
                    </div>
                  </div>
              
                  <div className="input-container">
                    <input id="one" className="radio-button choix-2" type="radio" name="pieces_trois_plus" value="1"/>
                    <div className="radio-tile">
                      <label htmlFor="one" className="radio-tile-label fw-bold">1</label>
                    </div>
                  </div>
              
                  <div className="input-container" style={{width: "80px"}}>
                    <input id="two" className="radio-button choix-2" type="radio" name="pieces_trois_plus" value="2+"/>
                    <div className="radio-tile">
                      <label htmlFor="two" className="radio-tile-label fw-bold">2+</label>
                    </div>
                  </div>
                </div>
                <div className="container pt-0">
                  <div className="col-md-12 d-flex justify-content-center">
                    <h5 className="text-center">Il y a de <strong>véranda</strong>, s'il vous plaît?</h5>
                  </div>
                  <div className="form justify-content-center">
                    <input type="radio" className="checkbox" name="veranda" id="y-verande" />
                    <label htmlFor="y-verande" className="me-2">Oui</label>
                    <input type="radio" className="checkbox" name="veranda" id="n-verande" />
                    <label htmlFor="n-verande" className="ms-2">Non</label>
                  </div>
                </div>
              </div>
            </div>
            </div>
            ) : (
            <div>
            <h3 className="fw-bold text-center py-4">Durant les <span>3 dernières années</span></h3>
            <div className="mt-5">
              <h4 className="text-center fw-bold">Mon historique avec l’assurance</h4>
              <p>
                Avez-vous eu un contrat résilié par la compagnie précédente pour quel que motif que ce soit ?
              </p>
              <div className="form justify-content-center mt-3">
                <input type="radio" className="checkbox" name="contrat" id="y-contrat" />
                <label htmlFor="y-contrat" className="me-2">Oui</label>
                <input type="radio" className="checkbox" name="contrat" id="n-contrat" />
                <label htmlFor="n-contrat" className="ms-2">Non</label>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-center fw-bold">Mes sinistres</h4>
              <p>
                Combien de sinistres avez-vous eu ? Comptez tous vos sinistres Responsabilité Civile.
                Comptez vos sinistres matériels survenus sur le bien que vous souhaitez assurer.
              </p>
              <div className="radio-tile-group mt-2">
                <div className="input-container">
                  <input id="zero" className="radio-button" type="radio" name="radio" value="0"/>
                  <div className="radio-tile">
                    <label htmlFor="zero" className="radio-tile-label fw-bold">0</label>
                  </div>
                </div>
            
                <div className="input-container">
                  <input id="one" className="radio-button" type="radio" name="radio" value="1"/>
                  <div className="radio-tile">
                    <label htmlFor="one" className="radio-tile-label fw-bold">1</label>
                  </div>
                </div>
            
                <div className="input-container" style={{width: "80px"}}>
                  <input id="two" className="radio-button" type="radio" name="radio" value="2+"/>
                  <div className="radio-tile">
                    <label htmlFor="two" className="radio-tile-label fw-bold">2+</label>
                  </div>
                </div>
              </div>
            </div>
            </div>
            )}
        
            <div style={{overflow:"auto", margintop: "25px"}} id="action-btn">
        <div style={{float: "left"}}>
        <button 
           type="button" 
           className="btn btn-secondary btn-md" 
           id="prevBtn" onClick={() => setSteps(steps -1)}>Précédent</button>
        </div>
        <div style={{float: "right"}}>
          <input 
           
          />
        <button
           type="button" 
           className="btn btn-primary btn-md" 
           id="nextBtn"  
           onClick={() => setSteps(steps +1)}>Suivant</button>
        </div>
            </div>
            </form>
        </div>
      </div>
  </div>
  
  <footer id="footer-devis" className="pb-0 footer">
    <div className="container-fluid">
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

export default TypeHabitation