import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  deleteUser,
  sendEmailVerification,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  query,
  updateDoc,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useNotification } from "../utils/util-notfictaion";

export const UserContext = createContext({});

export const UserAuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userAuth, setUserAuth] = useState(null);
  const { notify } = useNotification();
  useEffect(() => {
    setLoading(true);
    const unsubscribeUser = onAuthStateChanged(auth, async res => {
      if (res) {
        const q = query(
          collection(db, "users"),
          where("userId", "==", res.uid),
        );
        const unsubscribeUserAuth = onSnapshot(q, querySnapshot => {
          setUser(res);
          querySnapshot.forEach(doc => {
            setUserAuth({ ...doc.data(), id: doc.id });
          });
        });
        setLoading(false);
        return () => unsubscribeUserAuth();
      } else {
        setUser(null);
        setUserAuth(null);
        setLoading(false);
      }
    });
    return () => unsubscribeUser();
  }, []);

  //login
  const logIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        notify(
          "success",
          "Succès",
          "Connexion avec google réussie",
        );
      })
      .catch(error => {
        switch (error.code) {
          case "auth/user-not-found":
            // Handle user not found error
            notify(
              "error",
              "Erreur de connexion",
              "Utilisateur non trouvé",
            );
            break;
          case "auth/invalid-email":
            // Handle invalid email error
            notify(
              "error",
              "Erreur de connexion",
              "e-mail invalide",
            );
            break;
          case "auth/wrong-password":
            // Handle weak password error
            notify(
              "error",
              "Erreur de connexion",
              "Mauvais mot de passe",
            );
            break;
          case "auth/user-disabled":
            // Handle user disabled error
            notify(
              "error",
              "Erreur de connexion",
              "Utilisateur désactivé",
            );
            break;
          default:
            // Handle other errors
            notify(
              "error",
              "Erreur",
              "Erreur de connexion utilisateur",
            );
        }
      });
  };
  //sign Up
  const signUp = async (
    email,
    password,
    type,
    firstName,
    lastName,
    phoneNumber,
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const u = auth.currentUser;
      await addDoc(collection(db, "users"), {
        userId: u?.uid,
        firstName: firstName,
        lastName: lastName,
        accountType: type,
        phoneNumber: phoneNumber,
      })
        .then(async () => {
          await sendEmailVerification(u);
          notify(
            "success",
            "Réussite",
            "Création de compte réussie",
          );
        })
        .catch(error => {
          notify(
            "error",
            "Erreur lors de l'inscription",
            "Erreur lors de la création d'un compte",
          );
        });
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          notify(
            "error",
            "Erreur lors de la création d'un compte",
            "Email déjà utilisé",
          );
          break;
        case "auth/invalid-email":
          notify(
            "error",
            "Erreur lors de la création d'un compte",
            "E-mail invalide",
          );
          break;
        case "auth/weak-password":
          notify(
            "error",
            "Erreur lors de la création d'un compte",
            "Mot de passe faible",
          );
          break;
        default:
          notify(
            "error",
            "Erreur lors de l'inscription",
            "Erreur lors de la création d'un compte",
          );
      }
    }
  };

  //logout
  const logOut = async () => {
    await signOut(auth)
      .then(() => {
        notify(
          "success",
          "Succès",
          "Création de compte réussie",
        );
      })
      .catch(error => {
        notify(
          "error",
          "Erreur de connexion",
          "Mauvaise connexion",
        );
      });
  };

  //login with google
    const googleSignIn = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleAuthProvider)
      .then(( ) => {
        notify(
          "success",
          "Succès",
          "Connexion avec google réussie",
        );
      })
      .catch(error => {
        // Handle login with google error
        switch (error.code) {
          case "auth/invalid-email":
            // Handle invalid email error
            notify(
              "error",
              "Erreur de connexion",
              "Utilisateur désactivé",
            );

            break;
          case "auth/wrong-password":
            // Handle weak password error
            notify(
              "error",
              "Erreur de connexion",
              "Mauvais mot de passe",
            );

            break;
          case "auth/user-disabled":
            // Handle user disabled error
            notify(
              "error",
              "Erreur de connexion",
              "Utilisateur désactivé",
            );

            break;
          case "auth/popup-closed-by-user":
            break;
          default:
            // Handle other errors
            notify(
              "error",
              "Erreur",
              "Erreur de connexion de l'utilisateur",
            );
        }
      });
  };


  // forgot password
  const forgotPassword = async email => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        notify(
          "success",
          "Succès",
          "Le lien URL a été envoyé à votre adresse e-mail.",
        );
      })
      .catch(error => {
        // Handle login with google error
        switch (error.code) {
          case "auth/invalid-email":
            // Handle invalid email error
            notify(
              "error",
              "Erreur de réinitialisation du mot de passe",
              "invalid email",
            );
            break;
          case "auth/user-not-found":
            // Handle user not found error
            notify(
              "error",
              "Erreur de réinitialisation du mot de passe",
              "Email non trouvé",
            );
            break;
          case "auth/user-disabled":
            // Handle user disabled error
            notify(
              "error",
              "Erreur de réinitialisation du mot de passe",
              "Utilisateur désactivé",
            );
            break;
          default:
            // Handle other errors
            notify(
              "error",
              "Erreur",
              "mauvais mot de passe de réinitialisation",
            );
        }
      });
  };

  //update email
  const updateEmailUser = async email => {
    const u = auth.currentUser;
    await updateEmail(u, email)
      .then(async () => {
        const userUpd = auth.currentUser;
        await sendEmailVerification(userUpd);
        notify(
          "success",
          "Success",
          "Mise à jour votre e-mail avec succès",
        );
      })
      .catch(error => {
        notify(
          "error",
          "Erreur",
          "Erreur de mise à jour du compte",
        );
      });
  };
  //Update user
  const updateUser = async (id, firstName, lastName, phoneNumber) => {
    const userDoc = doc(db, "users", id);
    const incereaseage = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    };
    await updateDoc(userDoc, incereaseage)
      .then(async () => {
        notify(
          "success",
          "Success",
          "Mise à jour vos informations  avec succès",
        );
      })
      .catch(error => {
        notify(
          "error",
          "Erreur",
          "Erreur de mise à jour du compte",
        );
      });
  };
  // update password
  const updatePwd = async newPassword => {
    const u = auth.currentUser;
    await updatePassword(u, newPassword)
      .then(() => {
        notify(
          "success",
          "Success",
          "Mise à jour de mot de passe avec succès",
        );
      })
      .catch(error => {
        notify(
          "error",
          "Erreur",
          "Erreur de mise à jour du mot de passe",
        );
      });
  };
  //delete user
  const deleteAccount = async id => {
    const u = auth.currentUser;
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc)
      .then(async () => {
        await deleteUser(u)
          .then(() => {
            notify(
              "success",
              "Succès",
              "Suppression compte avec succès",
            );
          })
          .catch(error => {
            notify(
              "error",
              "Erreur",
              "Erreur lors de la suppression du compte",
            );
          });
      })
      .catch(error => {
        notify(
          "error",
          "Erreur",
          "Erreur lors de la suppression du compte",
        );
      });
  };

  const contextValue = {
    logIn,
    user,
    userAuth,
    updateEmailUser,
    updatePwd,
    updateUser,
    deleteAccount,
    signUp,
    logOut,
    googleSignIn,
    forgotPassword,
    loading,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserContext);
};
