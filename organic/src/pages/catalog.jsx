import "./styles/catalog.css";
import Product from "./../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";
import Pagination from "../components/pagination";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [prodsToDsiplay, setProdsToDsiplay] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(function () {
    loadCatalog();
  }, []);

  async function loadCatalog() {
    let service = new DataService();
    let prods = await service.getProducts();
    setProducts(prods);
    setProdsToDsiplay(prods);

    let cats = await service.getCategories();
    setCategory(cats);
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
    setCurrentPage(1);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = prodsToDsiplay.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      {currentItems.map((p) => (
        <Product product={p} key={p._id} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={prodsToDsiplay.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Catalog;
