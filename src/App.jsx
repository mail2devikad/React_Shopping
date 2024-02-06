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

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path={routes.signIn()} element={<Login />} />
        <Route path="/" element={<Navigate to={routes.signIn()} replace />} />
        <Route path={routes.signUp()} element={<Signup />} />
        <Route path={routes.forgotPassword()} element={<Forgotpassword />} />
      </Routes>
    </Router>
  );
};

export default App;
