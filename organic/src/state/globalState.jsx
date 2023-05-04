import DataContext from "./dataContext";
import { useState } from "react";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [user, setUser] = useState({ id: 1, name: "Weeraphot" });
  function addProductToCart(prod) {
    let copy = [...cart, prod];
    setCart(copy);
  }
  function removeProductFromCart(prod) {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        shoppingList: shoppingList,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
export default GlobalState;
