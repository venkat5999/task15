
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />

        <Route path="/about" element={<AboutPage />}>
          <Route path="rooms" element={<Menu />} />
        </Route>

        <Route path="/contact" element={<ContactPage />}>
          <Route path="booking" element={<Menu />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;