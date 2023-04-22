import React from 'react';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';


const SectionGuide= () => {
  return ( 
    <section id="sect-guide" className="sect-guide p-5">
    <div className="container-fluid" data-aos="fade-up">
      <div className="pt-0 d-flex flex-column" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-9">
            <h3>Vous êtes perdu?<span> Suivez guide</span></h3>
          </div>
          <div className="col-lg-3">
            <Link className="float-sm-end">Voir tous les guides &nbsp;<i className="fa-solid fa-circle-chevron-right"></i></Link>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card" style={{ height: '100%' }}>
              <img src="assets/img/hero-bg-1.jpg" width="100%" alt=""/>
              <div className="card-body pt-0">
                <h6 className="pt-4"><strong>Les services de l'assurance Leocare</strong></h6>
                <p className="summary">
                  Chez Leocare, nos assurances regorgent de services pour vous faciliter la vie. Et en plus de ça, ils ont gratuits. On vous donne tous les détails ici ! Quels sont les services offerts par l’assurance auto Leocare en France ? Quels sont les services offerts par Leocare à l’étranger ? Quels services sont mis en place en cas de sinistre ? Quels services sont mis place en cas d’immobilisation ? Quels sont les services offerts par notre assurance moto ? […]
                </p>
                <Link to="" className="stretched-link"></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card" style={{ height: '100%' }}>
              <img src="assets/img/hero-bg-1.jpg" width="100%" alt=""/>
              <div className="card-body pt-0">
                <h6 className="pt-4"><strong>Nos conseils pour une Toussaint en sécurité</strong></h6>
                <p className="summary">
                  Le mois d’octobre c’est le passage à l’heure d’hiver mais ce sont aussi les vacances de la Toussaint. Comment bien protéger sa maison pour des vacances en toute tranquillité ? Tous nos conseils. ? Bien sécuriser son logement ? Il est possible de mettre en place des choses simples pour maximiser la sécurité de son logement : Renforcer les entrées et ouvertures de son logement pour assurer un niveau de protection maximum. ? La plupart des assureurs demandent d’avoir une […]
                </p>
                <Link to="" className="stretched-link"></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card" style={{ height: '100%' }}>
              <img src="assets/img/hero-bg-1.jpg" width="100%" alt=""/>
              <div className="card-body pt-0">
                <h6 className="pt-4"><strong>Les questions à se poser avant de souscrire une assurance moto</strong></h6>
                <p className="summary">
                  Vous êtes sur le point d’acheter cette moto qui vous fait tant rêver depuis des mois ? Avant d’aller vous balader le long de la côte, il est indispensable de souscrire une assurance. En tant que propriétaire d’un véhicule à moteur, vous êtes tenu d’assurer ce dernier au minimum pour la responsabilité civile. Fort heureusement, d’autres formules plus adaptées à votre utilisation existent. Pour choisir celle qui vous convient le mieux, voici les questions à vous poser avant de souscrire.
                </p>
                <Link to="" className="stretched-link"></Link>
              </div>
            </div>
          </div>
        </div>
        <h4 className="mt-5 mb-2"><strong>L’assurance chez Leocare</strong></h4>
        <p className="m-0">
          Vous aimez la clarté et les services personnalisés ? Nous aussi ! ?
        </p>
        <p>
          Et, parce que l’assistance fait partie de notre ADN ?, nous vous proposons des formules d’assurances auto, maison et moto solidaires et connectées.
          Solidaires, car en cas de pépin, vous pouvez accéder en permanence à notre chat communautaire ou échanger avec un Leo-conseiller.
          Connectées, car l’application mobile Leocare vous permet de vous assurer à la minute 24 h/24, 7 j/7.
        </p>
        <h4><strong>Assurance auto</strong></h4>
        <p className="m-0">
          3 750 €. Ce n’est pas le gain qui s’affiche sur votre carte de grattage, mais bien le montant de l’amende que vous encourez si votre voiture n’est pas assurée : une infraction qui peut vous amener à la case prison ! ?
        </p>
        <p>
          « Même si elle ne roule pas ? – Oui, vous devez être assuré (au cas où votre voiture déciderait de se faire la malle en créant des dommages sur son passage).
          Répondre à cette obligation légale ne signifie pas pour autant vous ruiner ! Avec Leocare, il vous suffit d’estimer le coût de votre assurance auto et nos garanties pour vous en convaincre. 
          Par exemple, la garantie protection du conducteur, couvrant vos dommages corporels, est incluse dans tous les contrats Leocare, même en cas d’accident responsable ou de perte de contrôle de votre véhicule. Pas mal non ? ?
        </p>
        <h4><strong>Assurance moto</strong></h4>
        <p className="m-0">
          Vous ne reconnaissez plus personne en Harley Davidson ? Entre chanson et réalité, il y a quand même une différence de taille : l’obligation de reconnaître les forces de l’ordre en uniforme.
          Et, comme pour les quatre roues, mieux vaut alors que vous soyez assuré.
          Car, rouler en moto ne vous exonère pas de vos obligations légales en matière d’assurance. Là encore, faites le choix de la tranquillité à un coût étudié.
          Quel que soit votre budget pour votre assurance moto, Leocare a conçu des garanties maximales (dommage corporel, responsabilité civile, vol…) pour vous permettre de vous évader, casque au vent, en toute sécurité.
        </p>
        <p>
          Une panne, un pépin ? Votre smartphone suffit pour joindre immédiatement un Leo-conseiller qui vous assiste et vous prend en charge en toutes circonstances.
        </p><br></br>
        <h4><strong>Assurance habitation</strong></h4>
        <p className="m-0">
          Vous en avez assez de jouer au « Tanguy » et envisagez d’emménager prochainement dans votre propre logement ? ? Ou vous souhaitez simplement gagner en mètres carrés ?
        </p>
        <p className="m-0">
          Pour vous accompagner dans votre nouvel univers, Leocare a pensé à toutes les garanties essentielles pour vous couvrir ainsi que vos biens en cas de sinistre : responsabilité civile, dégâts des eaux… Et, parce que chaque projet de vie est unique, vous avez la possibilité de personnaliser votre assurance habitation à partir de 4,57€/mois !
        </p>
        <p className="m-0">
          Vous avez déjà une assurance ? Comparez nos offres avec votre assureur actuel. Leocare est la première compagnie d’assurances en ligne à capitaliser sur les atouts du numérique et la data pour créer une offre assurantielle à forte valeur ajoutée sans aucun intermédiaire.
        </p>
        <p className="m-0">
          En quelques clics, faites votre devis d’assurance avec l’outil Leocare qui vous assure à la minute !
        </p>
        <p>
          *selon une étude réalisée en interne par Leocare le 13/06/2022
        </p>
      </div>
      </div>
  </section>
  )
}

export default SectionGuide;