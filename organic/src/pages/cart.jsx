import "./styles/cart.css";
import { useContext } from "react";
import DataContext from "../state/dataContext";

function Cart() {
  const { cart, removeProductFromCart } = useContext(DataContext);
  function total() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].Price * cart[i].quantity;
    }
    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <div className="header-info">
        {cart.length > 0 ? (
          <div>
            <h3>Current Shopping Cart</h3>
            <h5>You have {cart.length} different products in your cart.</h5>
            <h5>Your total is: ${total()}</h5>
          </div>
        ) : (
          <h3>Your Cart Is Empty</h3>
        )}
      </div>
      {cart.map((prod) => (
        <div className="product" key={prod._id}>
          <img src={"/images/" + prod.Image} alt="food" />
          <h5>
            {prod.Title} ({prod.quantity})
          </h5>
          <div className="product-bottom">
            <label>Price: ${prod.Price.toFixed(2)}</label>
            <label>Total: ${(prod.Price * prod.quantity).toFixed(2)}</label>
          </div>
          <button onClick={() => removeProductFromCart(prod._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default Cart;
