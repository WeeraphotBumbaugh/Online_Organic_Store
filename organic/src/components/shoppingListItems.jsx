import "./styles/shoppingListItems.css";

function ShoppingListItem(props) {
  return (
    <div className="listItem">
      <h5>{props.item.item}</h5>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => props.onDelete(props.item)}
      >
        Del
      </button>
    </div>
  );
}

export default ShoppingListItem;
