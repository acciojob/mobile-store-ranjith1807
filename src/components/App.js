import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AdminPanel from './AdminPanel';
import '../styles/App.css'; // Optional: for basic styling matching the mockup

const initialData = [
  { id: 1, name: 'Samsung Galaxy S8 64GB Black', price: 16303, description: 'Sleek and powerful.', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Samsung Galaxy S9 64GB Black', price: 20888, description: 'Capture the moment.', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Samsung Galaxy S8+ 64GB Black', price: 18701, description: 'Larger screen, more power.', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'iPhone X 64GB', price: 25000, description: 'Face ID included.', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'OnePlus 6 64GB', price: 15000, description: 'Flagship killer.', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Google Pixel 2 64GB', price: 12000, description: 'Best camera.', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Samsung Galaxy Note 8', price: 22000, description: 'With S-Pen.', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'LG G7 ThinQ', price: 14000, description: 'AI Camera.', image: 'https://via.placeholder.com/150' },
];

function App() {
  const [products, setProducts] = useState(initialData);

  return (
    <Router>
      <div className="App">
        {/* Nav list structure ensures ADMIN is the 2nd child for the Cypress test: :nth-child(2) > a */}
        <nav className="navbar">
          <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', gap: '20px' }}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/admin">ADMIN</Link></li>
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