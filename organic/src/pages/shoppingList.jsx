import { useState } from "react";
import React from "react";
import "./styles/list.css";
import ShoppingListItem from "../components/shoppingListItems";

function ShoppingList() {
  const [list, setList] = useState({});
  const [wholeList, setWholeList] = useState([]);

  function handleChange(e) {
    const text = e.target.value;
    const name = e.target.name;
    let copy = { ...list };
    copy[name] = text;
    setList(copy);
  }
  function saveList() {
    let copy = [...wholeList];
    const id = Math.floor(Math.random() * 1000);
    copy.push({ ...list, id });
    setWholeList(copy);
  }
  function handleDelete(data) {
    console.log("deleting", data);
    let copy = wholeList.filter((x) => x.id !== data.id);
    setWholeList(copy);
  }
  return (
    <div className="page list">
      <h2>Shopping List</h2>
      <div className="parent">
        <section className="input-area">
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="item"
              onBlur={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 text-center">
            <button onClick={saveList} className="btn btn-dark">
              Add Item
            </button>
          </div>
        </section>
        <section>
          <ul className="prod-list">
            {wholeList.map((item) => (
              <div className="shoppingList" key={item.id}>
                <ShoppingListItem item={item} onDelete={handleDelete} />
              </div>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
export default ShoppingList;
