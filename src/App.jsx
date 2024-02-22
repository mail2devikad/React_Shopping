import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import routes from "./constants/routes";
import Login from "./pages/Login__Page";
import Signup from "./pages/Sign__Page";
import Forgotpassword from "./pages/Forgot__Password";
import Home from './pages/Home__Page'
import About from "./pages/About__Page";
import Contact from "./pages/Contact__Page";

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path={routes.signIn()} element={<Login />} />
        <Route path="/" element={<Navigate to={routes.signIn()} replace />} />
        <Route path={routes.signUp()} element={<Signup />} />
        <Route path={routes.forgotPassword()} element={<Forgotpassword />} />
        <Route path={routes.dashboard()} element={<Home />} />
        <Route path={routes.contact()} element={<Contact/>} />
        <Route path={routes.about()} element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
