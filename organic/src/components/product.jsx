import "./styles/product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import DataContext from "../state/dataContext";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const globalAdd = useContext(DataContext).addProductToCart;
  const cart = useContext(DataContext).cart;

  function handleQuantity(qty) {
    setQuantity(qty);
  }
  function getTotal() {
    let total = props.product.Price * quantity;
    return total.toFixed(2);
  }

  function handleAdd() {
    const exisitingProduct = cart.find((p) => p._id === props.product._id);
    if (exisitingProduct) {
      exisitingProduct.quantity += quantity;
    } else {
      globalAdd({ ...props.product, quantity: quantity });
    }
  }

  return (
    <div className="product">
      <img src={"/images/" + props.product.Image} alt="..." />
      <h5>{props.product.Title}</h5>
      <div className="prices">
        <label>Price ${props.product.Price.toFixed(2)}</label>
        <label>Total ${getTotal()}</label>
      </div>
      <QuantityPicker
        updateTotal={getTotal}
        onQuantityChange={handleQuantity}
      />
      <button onClick={handleAdd} className="btn btn-success">
        Add
      </button>
    </div>
  );
}

export default Product;
