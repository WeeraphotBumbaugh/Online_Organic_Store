import "./styles/quantityPicker.css";
import { useState } from "react";

function QuantityPicker() {
  let [quantity, setQuantity] = useState(1);

  function increase() {
    console.log("button clicked");
    let val = quantity + 1;
    setQuantity(val);
  }
  function decrease() {
    if (quantity === 1) return;
    console.log("button clicked");
    let val = quantity - 1;
    setQuantity(val);
  }

  return (
    <div className="qt-picker">
      <button
        onClick={decrease}
        disabled={quantity === 1}
        className="btn btn-sm btn-dark"
      >
        {" "}
        -{" "}
      </button>
      <label>{quantity}</label>
      <button onClick={increase} className="btn btn-sm btn-dark">
        {" "}
        +{" "}
      </button>
    </div>
  );
}
export default QuantityPicker;
