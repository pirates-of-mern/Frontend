import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import HeritageLanding from './pages/HeritageLanding.jsx';

function App() {
  return (
    <Router basename="/sih-frontend" >
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/explore' element={<HeritageLanding/>} ></Route>
        {/* <Route path="/music" element={<MusicPage />} />
        <Route path="/cuisine" element={<CuisinePage />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/attire" element={<AttirePage />} />
        <Route path="/dance" element={<DancePage />} /> */}
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
