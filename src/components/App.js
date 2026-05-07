import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AdminPanel from './AdminPanel';
import '../styles/App.css'
const initialProducts = [
  { id: 1, name: "Samsung Galaxy S8 64GB", description: "Black", image: "https://dummyimage.com/150x150/cccccc/000000.png", price: 16303 },
  { id: 2, name: "Samsung Galaxy S9 64GB", description: "Black", image: "https://dummyimage.com/150x150/cccccc/000000.png", price: 20888 },
  { id: 3, name: "Samsung Galaxy S8+ 64GB", description: "Black", image: "https://dummyimage.com/150x150/cccccc/000000.png", price: 18701 },
  { id: 4, name: "iPhone 12", description: "Blue", image: "https://dummyimage.com/150x150/cccccc/000000.png", price: 65000 },
  { id: 5, name: "Google Pixel 5", description: "Sorta Sage", image: "https://dummyimage.com/150x150/cccccc/000000.png", price: 55000 },
  { id: 6, name: "OnePlus 9", description: "Winter Mist", image: "https://dummyimage.com/150x150/cccccc/000000.png", price: 45000 },
  { id: 7, name: "Xiaomi Mi 11", description: "Midnight Gray", image: "https://dummyimage.com/150x150/cccccc/000000.png", price: 40000 },
  { id: 8, name: "Sony Xperia 1", description: "Frosted Black", image: "https://dummyimage.com/150x150/cccccc/000000.png&text=Mobile", price: 75000 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', background: '#f8f9fa' }}>
        <div><Link to="/">HOME</Link></div>
        <div><Link to="/admin">ADMIN</Link></div>
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} setProducts={setProducts} />} />
          <Route path="/admin" element={<AdminPanel products={products} setProducts={setProducts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;