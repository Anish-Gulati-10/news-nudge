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
import { Search } from './pages/search';
import { QueryProvider } from './context/QueryContext';


function App() {
  return (
    <div className="App">
      <Router>
        <QueryProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/india" element={<IndiaNews />} />
          <Route path="/usa" element={<UsaNews />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="*" element={<InvalidPage />} />
        </Routes>
        </QueryProvider>
      </Router>
    </div>
  );
}

export default App;
