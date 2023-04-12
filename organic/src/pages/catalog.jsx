import "./styles/catalog.css";
import Product from "./../components/product";
import "./styles/catalog.css";

function Catalog() {
  return (
    <div className="page catalog">
      <h2>Check out our amazing catalog</h2>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Catalog;
