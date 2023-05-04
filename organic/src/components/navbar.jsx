import "./styles/navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../state/dataContext";

function NavBar() {
  const cart = useContext(DataContext).cart;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light store-nav">
      <Link className="navbar-brand navbar-title store-title" to="/">
        Organic Store
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <Link className="nav-link store-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link store-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link store-link" to="/catalog">
              Catalog
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link store-link" to="/list">
              Shopping List
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link store-link" to="/admin">
              Admin
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link store-link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="d-flex">
          <Link to="/cart" className="btn btn-outline-dark">
            {cart.length} Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
