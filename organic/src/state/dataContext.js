import { createContext } from "react";

/*
    Context is a promise/interface/plan for the data that will be stored.
    It should not have any implementation.
*/
const DataContext = createContext({
  cart: [],
  shoppingList: [],
  user: {},

  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;
