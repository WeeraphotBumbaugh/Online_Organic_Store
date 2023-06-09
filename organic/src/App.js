import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import Footer from "./components/footer";
import Cart from "./pages/cart";
import ShoppingList from "./pages/shoppingList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalState from "./state/globalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar />
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/list" element={<ShoppingList />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
