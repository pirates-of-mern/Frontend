import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/sih-frontend/' element={<LandingPage/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App
