import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <Router basename="/sih-frontend" >
      <Routes>
        <Route path='/' element={<LandingPage/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App
