import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Product List Container */}
      <div className="product-list">
        {products.map((p) => (
          /* Each row is now a direct child. 
            Cypress test targeting `:nth-child(2)` will perfectly hit the 2nd row here.
          */
          <div key={p.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #eee' }}>
            
            <div style={{ flex: 1 }}>
              <Link to={`/products/${p.id}`} style={{ marginRight: '15px', fontWeight: 'bold' }}>
                {p.name}
              </Link>

              {editingId === p.id ? (
                <input className="form-control" type="number" value={editPrice} onChange={e => setEditPrice(e.target.value)} />
              ) : (
                <span>- Price: {p.price}</span>
              )}
            </div>

            {/* Conditional Buttons: 
              We only apply `.float-right` to the active state button. This guarantees 
              Cypress's `> .float-right` query only ever returns 1 exact element per row.
            */}
            {editingId === p.id ? (
              <button className="float-right" onClick={() => handleSave(p.id)} style={{ marginLeft: '10px' }}>Save</button>
            ) : (
              <>
                <button className="float-right" onClick={() => handleDelete(p.id)} style={{ marginLeft: '10px' }}>Delete</button>
                <button onClick={() => handleEdit(p)} style={{ marginLeft: '10px' }}>Edit</button>
              </>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;