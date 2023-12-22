import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Need from "./pages/Need";

function App() {
  return (
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/need" element={<Need />} />
        </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
