import "./styles/product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

function Product(props) {
  let [total, setTotal] = useState();
  if (!total) {
    total = props.product.Price.toFixed(2);
  }
  function getData(data) {
    setTotal(data * props.product.Price.toFixed(2));
  }

  return (
    <div className="product">
      <img src={"/images/" + props.product.Image} alt="..." />
      <h5>{props.product.Title}</h5>
      <div className="prices">
        <label>Total ${total}</label>
        <label>Price ${props.product.Price.toFixed(2)}</label>
      </div>
      <QuantityPicker updateTotal={getData} />
      <button>Add</button>
    </div>
  );
}

export default Product;
