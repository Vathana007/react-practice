import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "../styles/App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </Router>
  );
}
