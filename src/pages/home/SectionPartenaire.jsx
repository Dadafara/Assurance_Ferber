import React from "react";
import '../../assets/css/style.css';

const SectionPartenaire = () => (
    <section id="sect-partenaire" className="sect-partenaire">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-md-0 pe-5" data-aos="zoom-in" data-aos-delay="100">
          <p><strong>Tout ce qu'il faut pour son assurance</strong></p>
          <p>
            Des économies jusqu'à 25% avec le même niveau de garanties
          </p>
          <figure>
            <img src="assets/img/TF1.png" width="15%" alt=""/>
          </figure>
        </div>

        <div className="col-md-3 mb-md-0 pe-5" data-aos="zoom-in" data-aos-delay="100">
          <p><strong>Application ultra simple</strong></p>
          <p>
            On obtient toutes ses attestations après avoir souscrit
            Turbo.
          </p>
          <figure>
            <img src="assets/img/turbo.png" width="15%" alt=""/>
          </figure>
        </div>
        <div className="col-md-3 mt-md-0 pe-5" data-aos="zoom-in" data-aos-delay="100">
          <p><strong>Une souscription simplifiée</strong></p>
          <p>
            Une transparence revendiquée, des garanties faciles à modifier
          </p>
          <figure>
            <img src="assets/img/TF1.png" width="15%" alt=""/>
          </figure>
        </div>

        <div className="col-md-3 mb-md-0 pe-5" data-aos="zoom-in" data-aos-delay="100">
          <p><strong>Une assurance compétitive</strong></p>
          <p>
            Jusqu'à 25% moins cher avec une offre flexible à 100% digitale
          </p>
          <figure>
            <img src="assets/img/TF1.png" width="15%" alt=""/>
          </figure>
        </div>
      </div>
    </div>
  </section>

)
export default SectionPartenaire;