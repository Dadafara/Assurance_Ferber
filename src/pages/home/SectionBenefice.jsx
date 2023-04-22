import React from 'react';
import '../../assets/css/style.css';

import { Link } from 'react-router-dom';
const SectionBenefice = () => {
  return (  
    
    <section id="benefice" className="benefice">
    <div className="container" data-aos="zoom-in">

      <div data-aos="fade-up" data-aos-delay="100">
        <div className="benefice-item">
          <h3 className="pb-2 mb-0">Et souscrire chez nous, c'est aussi simple qu'un jeu d'enfants</h3>
          <p>
            Il vous suffit de repondre à quelques questions (4 à 8) pour definir vos besoins, pour decouvrir le devis qui vous correspond. On se lance ?
          </p>
        </div>
        <div className="text-center mt-4">
          <Link to="/devis" className="btn-sinistre">Obtenir un devis gratuitement</Link>
        </div>
      </div>

    </div>
    </section>
    
  )
}

export default SectionBenefice;