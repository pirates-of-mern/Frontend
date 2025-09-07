import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router basename="/sih-frontend" >
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} ></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
