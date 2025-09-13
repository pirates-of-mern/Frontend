import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import VerifyEmail from "./components/verifyEmail.jsx";
import HeritageLanding from "./pages/HeritageLanding.jsx";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/ai.jsx";

import AddHeritage from "./components/Heritages/addHeritage.jsx";
import HeritageList from "./components/Heritages/HeritageList.jsx";

function App() {
  const userToken = localStorage.getItem("token");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />
        <Route path="/explore" element={<HeritageLanding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />

        {/* Heritage Routes */}
        <Route
          path="/addheritage"
          element={userToken ? <AddHeritage token={userToken} /> : <Login />}
        />
        <Route path="/heritages" element={<HeritageList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
