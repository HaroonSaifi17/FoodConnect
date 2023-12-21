import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar/>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
