import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import VerifyEmail from "./components/verifyEmail.jsx";
import HeritageLanding from "./pages/HeritageLanding.jsx";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/ChatBot.jsx";

import AddHeritage from "./components/Heritages/AddHeritage/addHeritage.jsx";
import HeritageList from "./components/Heritages/HeritageList.jsx";
import StatesPage from "./components/States.jsx";
import { useState } from "react";

function App() {
  // const userToken = localStorage.getItem("token");
  // const user = JSON.parse(localStorage.getItem("user"));

  // ✅ global search state
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* ✅ setSearchTerm Header me bhejna zaruri hai */}
      <Header setSearchTerm={setSearchTerm} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />
        <Route path="/explore" element={<HeritageLanding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/states" element={<StatesPage />} />

        {/* Heritage Routes */}
        <Route
          path="/addheritage"
          element={<AddHeritage />}
        />
        <Route
          path="/heritages"
          element={
            <HeritageList
             
              searchTerm={searchTerm}
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
