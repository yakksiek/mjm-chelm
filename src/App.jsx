import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  Certificates,
  Contact,
  Error,
  Gallery,
  Offer,
  HomePage,
} from "./pages/index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="oferta" element={<Offer />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="certifikaty-i-uprawienia" element={<Certificates />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
        {/* <footer>To jest footer</footer> */}
    </BrowserRouter>
  );
}

export default App;
