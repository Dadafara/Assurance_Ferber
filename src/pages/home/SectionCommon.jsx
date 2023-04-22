import React from 'react';
import '../../assets/css/style.css';


const Section2 = () => {
  return (  
    <section id="sect-comment" className="sect-comment p-5">
    <div className="container-fluid pt-0" data-aos="fade-up">
      <div className="container-lg pt-0 d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
        <h2>Ils nous aiment <span>(et c'est réciproque)</span></h2>
        <p>Plus 500 000 téléchargements, 100 000 clients et 12 000 avis</p>
      </div>
      <div className="container pt-4">
        <div className="row text-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="rounded-circle shadow-1-strong" width="120" height="120" alt='porfolio'/>
            </div>
            <h5 className="mb-2 fw-bold">Normad Mirode</h5>
            <h6 className="text-primary mb-3">Assuré Leocare depuis 3 ans</h6>
            <ul className="list-unstyled d-flex justify-content-center mb-2">
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
            </ul>
            <p className="px-xl-3 mb-2">
              “Rien à dire, <br></br>
              serviable et toujours à votre disposition”
            </p>
          </div>
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="rounded-circle shadow-1-strong" width="120" height="120" alt=''/>
            </div>
            <h5 className="mb-2 fw-bold">Louis Raymond</h5>
            <h6 className="text-primary mb-3">Assurée Leocare depuis 2 ans</h6>
            <ul className="list-unstyled d-flex justify-content-center mb-2">
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
            </ul>
            <p className="px-xl-3 mb-2">
              “Simple et efficace.<br></br>
              Prix plus que raisonnable.”
            </p>
          </div>
          <div className="col-md-4 mb-0">
            <div className="d-flex justify-content-center mb-4">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="rounded-circle shadow-1-strong" width="120" height="120" alt=''/>
            </div>
            <h5 className="mb-2 fw-bold">Nicolas Ibrahim</h5>
            <h6 className="text-primary mb-3">Assuré Leocare depuis 8 mois</h6>
            <ul className="list-unstyled d-flex justify-content-center mb-2">
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=''/>
              </li>
              <li>
                <img src="assets/img/star.png" className="rating" alt=""/>
              </li>
            </ul>
            <p className="px-xl-3 mb-2">
              “Accessibilité facile<br></br>
              et bon rapport qualité prix”
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section2;