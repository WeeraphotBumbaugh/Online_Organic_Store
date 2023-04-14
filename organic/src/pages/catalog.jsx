import "./styles/catalog.css";
import Product from "./../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);
  }
  function testFunction() {
    console.log("test function clicked");
    setProducts([]);
  }

  return (
    <div className="page catalog">
      <h2>Check out our amazing catalog</h2>
      <h5>We have {products.length} products for you.</h5>
      <button onClick={testFunction} className="btn btn-dark">
        Test Button
      </button>
      {products.map((p) => (
        <Product product={p} />
      ))}
    </div>
  );
}

export default Catalog;
