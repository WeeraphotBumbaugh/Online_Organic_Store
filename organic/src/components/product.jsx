import "./styles/product.css";
import QuantityPicker from "./quantityPicker";

function Product() {
  return (
    <div className="product">
      <img src="https://picsum.photos/150/150" alt="apple" />
      <h5>Product</h5>
      <div className="prices">
        <label>Total</label>
        <label>Price</label>
      </div>
      <QuantityPicker />
      <button>Add</button>
    </div>
  );
}

export default Product;
