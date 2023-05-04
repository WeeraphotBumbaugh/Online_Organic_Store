import "./styles/quantityPicker.css";
import React, { useState } from "react";

function QuantityPicker(props) {
  let [quantity, setQuantity] = useState(1);

  function increase() {
    let val = quantity + 1;
    setQuantity(val);
    props.onQuantityChange(val);
  }
  function decrease() {
    if (quantity === 1) return;
    let val = quantity - 1;
    setQuantity(val);
    props.onQuantityChange(val);
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
