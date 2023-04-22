import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../../components/auth/AuthContext';
import Helmet from '../../components/helmet/Helmet';
import "../register/register.css";
import { Button, Divider } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { useUserAuth } from "../../context/UserAuthContext";

const Login = () => {
const { googleSignIn } = useUserAuth();
const [inputs, setInputs] = useState({
    email:"",
    password:"",
});

const clickGoogleSignIN = async () => {
  googleSignIn();
};
const[toggleEye, setToggleEye] = useState(false);
const [inputType, setInputType] = useState("password");
const navigate = useNavigate();
const { dispatch } = useContext(AuthContext);

const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType ==="password" ? "text" : "password")
}

const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]:e.target.value}));
}

console.log(inputs);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password)
         .then((userCredential) => {
          const user = userCredential.user;
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
          navigate("/Home")
         });
    } catch (error) {
      dispatch({ type : "LOGIN_FAILURE" })
    }
  }

return (
<Helmet>
<header id="header" className="fixed-top m-0 p-0">
    <div className="container-fluid d-flex justify-content-between align-items-center p-2">
      <img src="assets/img/Assurance.png" width="100" alt=""/>
    </div>
</header>
<div className="content pb-5">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12">
                <div className="card pt-4 px-4 pe-4 registrer-contenu">
                   <div className="card-body pt-4 px-4 pe-4">
                       <h3 className="heading mb-5">Connexion</h3>
                      <div className='centered-button'>
                      <Button
                          type='default'
                          style={{ justifyContent: "center", alignItems: "center", display: "flex"}}
                          icon={
                             <span style={{ marginRight: "0.5rem" }}>
                               <FcGoogle />
                             </span>
                          }
                          size='middle'
                          onClick={clickGoogleSignIN}
                       >
                         Continuer avec Google
                       </Button>
                       </div>
                       <Divider>OU</Divider>
                       <form 
                           className="mb-5" 
                           method="post" 
                           id="registrer" 
                           name="registrer">
                         <div className="mb-4">
                           <label htmlFor="">Mon email :</label>
                           <input 
                            type="email" 
                            className="form-control mt-2" 
                            name="email" 
                            id="email" 
                            placeholder="Ex: jean.dupont@gmail.com"
                            onChange={handleChange}
                            required
                           />
                         </div>
                         <div className="mb-5">
                           <label htmlFor="">Mon mot de passe :</label>
                           <input 
                             type={inputType}
                             className="form-control mt-2 mb-1" 
                             name="password" 
                             id="password" 
                             placeholder="Password"
                             onChange={handleChange}
                             required
                           />
                    
                           <div className='eyeIcon' onClick={handleToggle}>
                              {toggleEye ? <Visibility/> : <VisibilityOff/>}
                           </div>
                           <Link to="#" className="mdp-oublie">Mot de passe oublié?</Link>
                         </div>
                         <div className="row mb-3">
                           <div className="col-md-12">
                             <button type="submit" className="btn-con rounded-0 py-2 px-3" onClick={handleLogin}>Se connecter</button>
                           </div>
                         </div>
                         <p>Je n'ai pas de compte?<Link to="/Register" className="text-decoration-none">Créer un compte</Link></p>
                       </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-5">
        <div className="col-md-12">
            <button type="submit" className="btn-con btn-urgence rounded-0 py-2 px-3">
            <i className="fas fa-exclamation-circle pt-1"></i>&nbsp; Une Urgence?</button>
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

export default Login;