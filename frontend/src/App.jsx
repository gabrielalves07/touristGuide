import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';

// pages components
import Home from './components/pages/Home';
import Show from './components/pages/Show';

function App() {

  return (
    <Router>
      <div>
        <MyNavbar />

        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/pontos' Component={Show} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
