import "./styles/catalog.css";
import Product from "./../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [prodsToDsiplay, setProdsToDsiplay] = useState([]);

  useEffect(function () {
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);

    let categories = ["Fruit", "Vegetable", "Grain", "Meat"];
    setCategory(categories);
    setProdsToDsiplay(prods);
  }

  function filter(category) {
    console.log(category);
    let list = [];
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.Category === category) {
        list.push(prod);
      }
    }
    setProdsToDsiplay(list);
  }
  return (
    <div className="page catalog">
      <h2>Check out our amazing catalog</h2>
      <h5>We have {products.length} products for you.</h5>
      {category.map((c) => (
        <button onClick={() => filter(c)} key={c} className="btn btn-light">
          {c}
        </button>
      ))}
      <br />
      {prodsToDsiplay.map((p) => (
        <Product product={p} key={p._id} />
      ))}
    </div>
  );
}

export default Catalog;
