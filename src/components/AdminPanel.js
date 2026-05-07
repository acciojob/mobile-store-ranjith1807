import React, { useState } from 'react';
import '../styles/App.css';
function AdminPanel({ products, setProducts }) {
  // Add State
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

      {/* Product List Editor */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(p => (
          <li key={p.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #eee' }}>
            
            {/* nth-child(1) - The Details / Editor */}
            <div style={{ flex: 1 }}>
              {editingId === p.id ? (
                <div>
                  <span>{p.name} - Price: </span>
                  <input className="form-control" type="number" value={editPrice} onChange={e => setEditPrice(e.target.value)} />
                </div>
              ) : (
                <span>{p.name} - Price: {p.price}</span>
              )}
            </div>

            {/* nth-child(2) - Delete Button Container */}
            <div style={{ marginLeft: '10px' }}>
              <button className="float-right" onClick={() => handleDelete(p.id)}>Delete</button>
            </div>

            {/* nth-child(3) - Edit/Save Button Container */}
            <div style={{ marginLeft: '10px' }}>
              {editingId === p.id ? (
                <button className="float-right" onClick={() => handleSave(p.id)}>Save</button>
              ) : (
                <button className="float-right" onClick={() => handleEdit(p)}>Edit</button>
              )}
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;