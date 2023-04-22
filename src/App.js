import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom"; 
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./components/auth/AuthContext";
import Devis from "./pages/typeAssurance/Devis";
import AssuranceHabitation from "./pages/typeAssurance/habitation/AssuranceHabitation";
import DevisHabitation from "./pages/typeAssurance/habitation/DevisHabitation";
import TypeHabitation from "./pages/typeAssurance/habitation/TypeHabitation";

function App() {
  const { currentUser } = useContext(AuthContext);
  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/assuranceHabitation",
      element: <AssuranceHabitation/>,
    },
    {
      path: "/devisHabitation",
      element: <DevisHabitation/>,
    },
    {
      path: "/typeHabitation",
      element: <TypeHabitation/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/devis",
      element: <Devis/>,
    },
    {
      path: "/",
      element: (
           <AuthRoute>               
             <Home/>
           </AuthRoute>
      ),
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
