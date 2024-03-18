import './App.css';
// import "dotenv/config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import { Home } from "./pages/home";
import { IndiaNews } from "./pages/india_news";
import { UsaNews } from "./pages/usa_news";
import { Crypto } from "./pages/crypto";
import { Calendar } from "./pages/calendar";
import { InvalidPage } from "./pages/error";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/india" element={<IndiaNews />} />
          <Route path="/usa" element={<UsaNews />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
