import "./App.css";
import NavBar from "./components/navbar";
import Catalog from "./pages/catalog";
import Footer from "./components/footer";

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
