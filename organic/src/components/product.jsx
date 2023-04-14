import "./styles/product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Product(props) {
  useEffect(function () {}, []);

  return (
    <div className="product">
      <img src={"/images/" + props.product.Image} alt="..." />
      <h5>{props.product.Title}</h5>
      <div className="prices">
        <label>Total ${props.product.Price.toFixed(2)}</label>
        <label>Price ${props.product.Price.toFixed(2)}</label>
      </div>
      <QuantityPicker />
      <button>Add</button>
    </div>
  );
}

export default Product;
