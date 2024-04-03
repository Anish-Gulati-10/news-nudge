import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { IndiaNews } from "./pages/indiaNews";
import { UsaNews } from "./pages/usaNews";
import { Crypto } from "./pages/crypto";
import { Calendar } from "./pages/calendar";
import { InvalidPage } from "./pages/error";
import { Search } from "./pages/search";

function App() {
  return (
    <div className="App bg-black">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/india" element={<IndiaNews />} />
          <Route path="/usa" element={<UsaNews />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
