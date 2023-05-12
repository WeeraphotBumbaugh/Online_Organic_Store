import React from "react";
import "./styles/admin.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Admin() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({});

  const [allCoupons, setAllCoupons] = useState([]);
  const [coupon, setCoupon] = useState({});

  const service = new DataService();

  useEffect(() => {
    loadProducts();
    loadCoupons();
  }, []);

  async function loadProducts() {
    let prods = await service.getProducts();
    setAllProducts(prods);
  }
  async function loadCoupons() {
    let coups = await service.getCoupons();
    setAllCoupons(coups);
  }

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

  async function saveProduct() {
    let prodToSave = { ...product };
    prodToSave.Price = parseFloat(prodToSave.Price);
    await service.postProduct(prodToSave);
    let copy = [...allProducts];
    copy.push(prodToSave);
    setAllProducts(copy);
    console.log(copy);
  }
  async function saveCoupon() {
    let coupToSave = { ...coupon };
    coupToSave.coupon_discount = parseFloat(coupToSave.coupon_discount);
    await service.postCoupon(coupToSave);
    let copy = [...allCoupons];
    copy.push(coupToSave);
    setAllCoupons(copy);
  }

  async function deleteProduct(id) {
    await service.deleteProduct(id);
    setAllProducts(allProducts.filter((p) => p._id !== id));
  }
  async function deleteCoupon(code) {
    await service.deleteCoupon(code);
    let copy = allCoupons.filter((c) => c.coupon_code !== code);
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
              onChange={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              name="Category"
              onChange={handleProductChange}
            >
              <option value="Fruit">Fruit</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Grain">Grain</option>
              <option value="Meat">Meat</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="Price"
              onChange={handleProductChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image(.png)</label>
            <input
              type="text"
              name="Image"
              onChange={handleProductChange}
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
              <li className="item" key={prod.Title}>
                <span>{prod.Title}</span>
                <button
                  onClick={() => deleteProduct(prod._id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </li>
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
              onChange={handleCouponChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Discount %</label>
            <input
              type="text"
              name="coupon_discount"
              onChange={handleCouponChange}
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
              <li className="item" key={coupon.coupon_code}>
                <span>
                  {coupon.coupon_code} - {coupon.coupon_discount}%
                </span>
                <button
                  onClick={() => deleteCoupon(coupon.coupon_code)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Admin;
