import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Vegetable from './components/Products/Vegetable.jsx';
import Contact from './components/Contact/Contact.jsx';
import ContactBar from './components/Navbar/ContactBar.jsx';
import About from './components/about/About.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Faqs from './components/faqs/Faqs.jsx';



function App() {
  

  return (
    <BrowserRouter>
      <ContactBar />
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/vegetables" element={<Vegetable />} />
        </Routes>
      </div>
      <Footer />
      <ContactBar />
    </BrowserRouter>
  )
}

export default App
