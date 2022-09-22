import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
// import Training from "./pages/training/Training";
import Shop from "./pages/shop/Shop";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="notFound" element={<NotFound />} />
        <Route path="plans" element={<Plans />} />
        <Route path="shop" element={<Shop />} />
        {/* <Route path="training" element={<Training />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
