import React, {useState} from 'react';
import "./register.css";
import { Link } from 'react-router-dom';
import FormInput from '../../components/forminput/FormInput';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Helmet from '../../components/helmet/Helmet';

const Register = () => {
  const [inputValues, setInputValues] = useState({ 
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"saissisez entre 3-16 caractere",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Votre adresse email",
      errorMessage:"Veuillez sassir votre adrresse email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Votre mot de passe",
      errorMessage:"Mot doit d'être 8-20 caracters,1 caract",
      pattern:  "^(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9!@#$%^&^*()+]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirme votre mot de passe",
      errorMessage:"mot de passe n'est pas identique",
      pattern: inputValues.password,
      required: true,
    },
    {
      id: 5,
      name: "telephone",
      type: "text",
      placeholder: "Votre numéro de téléphone",
      errorMessage:"mot de passe n'est pas identique",
      required: true,
    }
  ];

  const handleChange = (e) => {
    setInputValues({...inputValues, [e.target.name]: e.target.value});
  }; 
  const handlRegister = (e) => {
    e.preventDefault();

    try {
      createUserWithEmailAndPassword(
        auth, 
        inputValues.email, 
        inputValues.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: inputValues.username,
        });
      });
    } catch (error) {}
  };

  //console.log(inputValues);
    return (
    <Helmet>
    <header id="header" class="fixed-top m-0 p-0">
    <div class="container-fluid d-flex justify-content-between align-items-center p-2">
      <img src="assets/img/Assurance.png" width="100" alt=""/>
    </div>
    </header>
    <div className="content pb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12">
          <div className="card p-4 registrer-contenu">
            <div className="card-body p-2">
              <h3 className="heading mb-4">Creer de votre compte</h3>
              <form className="mb-5" method="post" id="registrer" name="registrer">
                <div className="mb-4">
                {inputs.map((input) => (
                  <FormInput
                  className = "form-control"
                  key = {input.id}
                  {...input}
                  value={inputValues[input.name]}
                  onChange={handleChange}/>
                ))}
                </div>
                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input className="form-check-input mt-2" type="checkbox" id="cgu"/>
                    <label className="form-check-label" htmlFor="cgu">
                      Je reconnais avoir pris connaissance et accepté les <p href="#">conditions générales d'utilisation (CGU)</p>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-check form-switch">
                    <input className="form-check-input mt-2" type="checkbox" id="accept"/>
                    <label className="form-check-label" htmlFor="accept">
                      J'accepte de recevoir des communications commerciales par voie électronique de la part de Leocare pour rester informé des meilleures offres. Vous pouvez à tout moment vous désabonner en utilisant le moyen d'opposition disponible.
                    </label>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-12">
                    <div className="p-3 text-condition">
                      <p>Consulter notre <Link to="">politique de confidentialité</Link> pour en savoir plus sur la gestion de vos données ainsi que les droits dont vous disposez.</p>
                    </div>
                  </div>
                </div>  
                <div className="row mb-3">
                  <div className="col-md-12">
                    <button type="submit" className="btn-con rounded-0 py-2 px-3" onClick={handlRegister}>Creer mon compte</button>
                  </div>
                </div>
                <p>J'ai déja un compte? <Link to="/Login">je me connecte</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <footer id="footer-devis" className="pb-0 footer">
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

export default Register;