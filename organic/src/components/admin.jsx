import React from "react";
import "./styles/admin.css";
import { useState } from "react";

function Admin() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [coupon, setCoupon] = useState({});

  function handleProductChange(e) {
    const text = e.target.value;
    const name = e.target.name;
    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }
  function handleCouponChange(e) {
    const text = e.target.value;
    const name = e.target.name;
    let copy = { ...coupon };
    copy[name] = text;
    setCoupon(copy);
  }

  function saveProduct() {
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
    console.log(copy);
  }
  function saveCoupon() {
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
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
              name="Title"
              onBlur={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              name="Category"
              onBlur={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="Price"
              onBlur={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="text"
              name="Image"
              onBlur={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 text-center">
            <button onClick={saveProduct} className="btn btn-dark">
              Save Product
            </button>
          </div>
          <ul className="prod-list">
            {allProducts.map((prod) => (
              <li key={prod.title}>{prod.title}</li>
            ))}
          </ul>
        </section>
        <section id="secCoupons">
          <h4>Create Coupons</h4>
          <div className="mb-3">
            <label className="form-label">Code</label>
            <input
              type="text"
              name="coupon_code"
              onBlur={handleCouponChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Discount %</label>
            <input
              type="text"
              name="coupon_discount"
              onBlur={handleCouponChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 text-center">
            <button onClick={saveCoupon} className="btn btn-dark">
              Save Coupon
            </button>
          </div>
          <ul className="prod-list">
            {allCoupons.map((coupon) => (
              <li key={coupon.coupon_code}>
                {coupon.coupon_code} {coupon.coupon_discount}%
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Admin;
