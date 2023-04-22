import React from 'react';
import '../../assets/css/style.css';


const Section2 = () => {
  return (  
    <section id="sect-3" className="sect-3">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-4 col-xs-12 mt-2">
            <img src="assets/img/about.jpg" className="img-fluid img-sect rounded-circle shadow-1-strong" position="center" width="100%" height="380" alt=''/>
        </div>
        <div className="col-lg-6 col-xs-12 content mt-5">
          <div className="resume-item">
            <h4>25% moins cher* <span className="underline">à garanties équivalentes</span></h4>
            <p className=" pb-2">Pourquoi ? Parce que nous n’avons pas d’agences, mais une application et des Leoconseillers.</p>
          </div>
          <div className="resume-item">
            <h4>Assurances ajustables en 1 clic, <span>sur votre appli</span></h4>
            <p className="pb-2">
              Changez vos formules, franchises et garanties quand vous le voulez. Pour ajouter un conducteur ou une assurance scolaire, 1 clic suffit !
            </p>
          </div>
          <div className="resume-item">
            <h4>Le suivi de vos sinistres, <span>en direct</span></h4>
            <p className="pb-1">
              Envoyez vos documents sur l'application, suivez votre dossier en temps réel, et hop ! vous êtes indemnisés. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section2;
    