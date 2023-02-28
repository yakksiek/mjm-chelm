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
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="components-container">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="oferta" element={<Offer />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="certyfikaty-i-uprawienia" element={<Certificates />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
