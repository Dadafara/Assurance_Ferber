import React from "react";
import '../../../assets/vendor/aos/aos.css';
import  '../../../assets/css/style.css'

const Section_banner = () => {
    return(
        <section id="sect-banner-auto" className="sect-banner">
        <div className="container" data-aos="zoom-in">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="banner-item">
              <h1 className="pt-5 mb-0">
                Votre assurance auto à partir de <br></br>
                <span>6,63€</span> par mois
              </h1>
            </div>
            <div className="text-center">
              <a href="devis-auto.html" className="btn-sinistre">Obtenir un devis gratuitement</a>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Section_banner;