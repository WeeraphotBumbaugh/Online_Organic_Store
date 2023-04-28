import React from "react";
import "./styles/admin.css";
import { useState } from "react";

function Admin() {
  const [product, setProduct] = useState([]);

  function handleProductChange(e) {
    const text = e.target.value;
    const name = e.target.name;
    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);
  }

  return (
    <div className="page admin">
      <h2>Store Administration</h2>
      <div className="parent">
        <section id="secProducts">
          <h4>Create Products</h4>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              onBlur={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              name="category"
              onBlur={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              onBlur={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="text"
              name="imageUrl"
              onBlur={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 text-center">
            <button onClick={saveProduct} className="btn btn-dark">
              Save Product
            </button>
          </div>
        </section>
        <section id="secCoupons">
          <h4>Create Coupons</h4>
        </section>
      </div>
    </div>
  );
}

export default Admin;
