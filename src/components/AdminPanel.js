import React, { useState } from 'react';

const AdminPanel = ({ products, setProducts }) => {
  const [formData, setFormData] = useState({ name: '', description: '', image: '', price: '' });
  const [editId, setEditId] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update Product
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === editId ? { ...formData, id: editId, price: Number(formData.price) } : p
      ));
      setEditId(null);
    } else {
      // Add new product
      const newProduct = { ...formData, id: Date.now(), price: Number(formData.price) };
      setProducts([...products, newProduct]);
    }
    // Reset form
    setFormData({ name: '', description: '', image: '', price: '' });
  };

  // Setup form for editing
  const startEdit = (product) => {
    setEditId(product.id);
    setFormData(product);
  };

  // Delete product
  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h3 className="mb-4">Admin Panel - Products: {products.length}</h3>
      
      {/* Add/Edit Form */}
      <div className="card p-4 mb-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <input type="text" name="name" className="form-control" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group mb-2">
            <input type="text" name="description" className="form-control" placeholder="Description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="form-group mb-2">
            <input type="text" name="image" className="form-control" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <input type="number" name="price" className="form-control" placeholder="Price" value={formData.price} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success">
            {editId ? 'Save Changes' : 'Add Product'}
          </button>
          {editId && (
            <button type="button" className="btn btn-secondary ml-2" onClick={() => { setEditId(null); setFormData({ name: '', description: '', image: '', price: '' }); }}>
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Product List for Admin */}
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{product.name} - {product.price}</span>
            
            <div>
              {/* Cypress Target: :nth-child(2) > .float-right (if container is flex) */}
              <button 
                className="btn btn-danger btn-sm float-right mx-1" 
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
              
              {/* Cypress Target: :nth-child(3) > .float-right */}
              <button 
                className="btn btn-primary btn-sm float-right mx-1" 
                onClick={() => startEdit(product)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;