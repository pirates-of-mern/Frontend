import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import VerifyEmail from "./components/verifyEmail.jsx";
import HeritageLanding from "./pages/HeritageLanding.jsx";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/AI.jsx";
import Layout from "./components/Layout.jsx";

import AddHeritage from "./components/Heritages/AddHeritage/addHeritage.jsx";
import HeritageList from "./components/Heritages/HeritageList.jsx";
import StatesPage from "./components/States.jsx";
import { useState } from "react";
import InstallPromt from "./hooks/InstallPromt.jsx";
import CultureCategoryPage from "./pages/CultureCategoryPage.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Layout setSearchTerm={setSearchTerm}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify/:token" element={<VerifyEmail />} />
          <Route path="/explore" element={<HeritageLanding />} />
          <Route path="/explore/:stateName" element={<HeritageLanding />} />
          <Route
            path="/explore/:stateName/:category"
            element={<CultureCategoryPage />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/states" element={<StatesPage />} />

          {/* Heritage Routes */}
          <Route path="/addheritage" element={<AddHeritage />} />
          <Route
            path="/heritages"
            element={<HeritageList searchTerm={searchTerm} />}
          />
        </Routes>
        <InstallPromt />
      </Layout>
    </Router>
  );
}

export default App;
