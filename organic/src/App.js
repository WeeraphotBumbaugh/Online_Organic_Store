import "./App.css";
import NavBar from "./components/navbar";
import Catalog from "./pages/catalog";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <Catalog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
