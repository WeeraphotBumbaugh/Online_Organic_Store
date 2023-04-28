import "./styles/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light store-nav">
      <Link className="navbar-brand navbar-title store-title" to="/">
        Organic Store
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
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
            <Link className="nav-link store-link" to="/admin">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
