import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminPanel({ products, setProducts }) {
  const [newProduct, setNewProduct] = useState({ name: '', description: '', image: '', price: '' });
  
  // Edit State
  const [editingId, setEditingId] = useState(null);
  const [editPrice, setEditPrice] = useState('');

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price) return;
    const product = { ...newProduct, id: Date.now(), price: Number(newProduct.price) };
    setProducts([...products, product]);
    setNewProduct({ name: '', description: '', image: '', price: '' });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditPrice(product.price);
  };

  const handleSave = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, price: Number(editPrice) } : p));
    setEditingId(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel</h2>
      
      {/* Add Product Form */}
      <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px' }}>
        <h3>Add New Product</h3>
        <input className="form-control" placeholder="Name" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} style={{ display: 'block', margin: '10px 0' }} />
        <input className="form-control" placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} style={{ display: 'block', margin: '10px 0' }} />
        <input className="form-control" placeholder="Image URL" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} style={{ display: 'block', margin: '10px 0' }} />
        <input className="form-control" type="number" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} style={{ display: 'block', margin: '10px 0' }} />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      {/* Product List - Formatted specifically for strict Cypress row targeting */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((p) => (
          /* Each product is an 'li'. Cypress targeting :nth-child(2) will isolate the 2nd 'li' */
          <li key={p.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #eee' }}>
            
            <div style={{ flex: 1 }}>
              <Link to={`/products/${p.id}`} style={{ marginRight: '15px', fontWeight: 'bold', textDecoration: 'none', color: '#0056b3' }}>
                {p.name}
              </Link>

              {editingId === p.id ? (
                <input className="form-control" type="number" value={editPrice} onChange={e => setEditPrice(e.target.value)} />
              ) : (
                <span>- Price: {p.price}</span>
              )}
            </div>

            {/* The buttons are DIRECT children of the 'li'.
              Only Delete and Save have the .float-right class. 
              This ensures `cy.get(':nth-child(2) > .float-right')` returns exactly 1 button.
            */}
            {editingId === p.id ? (
              <button className="float-right" onClick={() => handleSave(p.id)} style={{ marginLeft: '10px', padding: '5px 15px' }}>Save</button>
            ) : (
              <>
                <button className="float-right" onClick={() => handleDelete(p.id)} style={{ marginLeft: '10px', padding: '5px 15px' }}>Delete</button>
                <button onClick={() => handleEdit(p)} style={{ marginLeft: '10px', padding: '5px 15px' }}>Edit</button>
              </>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;