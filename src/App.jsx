import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import CompanyPage from "./components/CompanyPage";

function App() {
  return (
    <BrowserRouter>
      <Link to="/favourites" style={{ margin: 20, display: "inline-block" }}>
        ⭐ Preferiti
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:company" element={<CompanyPage />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
