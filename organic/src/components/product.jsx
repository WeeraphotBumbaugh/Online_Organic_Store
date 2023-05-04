import "./styles/product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import DataContext from "../state/dataContext";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const globalAdd = useContext(DataContext).addProductToCart;

  function handleQuantity(qty) {
    setQuantity(qty);
  }
  function getTotal() {
    let total = props.product.Price * quantity;
    return total.toFixed(2);
  }

  function handleAdd() {
    console.log("add clicked", props.product.Title);
    globalAdd(props.product);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.product.Image} alt="..." />
      <h5>{props.product.Title}</h5>
      <div className="prices">
        <label>Total ${getTotal()}</label>
        <label>Price ${props.product.Price.toFixed(2)}</label>
      </div>
      <QuantityPicker
        updateTotal={getTotal}
        onQuantityChange={handleQuantity}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Product;
