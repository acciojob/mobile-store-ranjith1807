import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AdminPanel from './AdminPanel';
import '../styles/App.css'

// The initial 8 products to satisfy the baseline count requirement
const initialProducts = [
  { id: 1, name: "Samsung Galaxy S8 64GB", description: "Black", image: "https://picsum.photos/200", price: 16303 },
  { id: 2, name: "Samsung Galaxy S9 64GB", description: "Black", image: "https://picsum.photos/200", price: 20888 },
  { id: 3, name: "Samsung Galaxy S8+ 64GB", description: "Black", image: "https://picsum.photos/200", price: 18701 },
  { id: 4, name: "iPhone 12", description: "Blue", image: "https://picsum.photos/200", price: 65000 },
  { id: 5, name: "Google Pixel 5", description: "Sorta Sage", image: "https://picsum.photos/200", price: 55000 },
  { id: 6, name: "OnePlus 9", description: "Winter Mist", image: "https://picsum.photos/200", price: 45000 },
  { id: 7, name: "Xiaomi Mi 11", description: "Midnight Gray", image: "https://picsum.photos/200", price: 40000 },
  { id: 8, name: "Sony Xperia 1 III", description: "Frosted Black", image: "https://picsum.photos/200", price: 75000 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      <div className="container mt-4">
        {/* Navigation Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm">
          <ul className="navbar-nav d-flex flex-row w-100 justify-content-center">
            {/* nth-child(1) */}
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            {/* nth-child(2) > a (Cypress Test Target) */}
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/admin">ADMIN</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} />} />
          <Route path="/admin" element={<AdminPanel products={products} setProducts={setProducts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;