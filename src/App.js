import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from "@clerk/clerk-react";
import { Home } from "./pages/home";
import { IndiaNews } from "./pages/indiaNews";
import { UsaNews } from "./pages/usaNews";
import { Crypto } from "./pages/crypto";
import { Calendar } from "./pages/calendar";
import { InvalidPage } from "./pages/error";
import { Search } from "./pages/search";

function App() {
  return (
    <div className="App relative">
      <SignedOut>
        <div className="flex justify-center items-center h-screen">
          <SignIn className="p-4 bg-black rounded-lg shadow-md" />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="fixed bottom-0 left-0 m-5 z-50">
          <UserButton />
        </div>
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
      </SignedIn>
    </div>
  );
}

export default App;
