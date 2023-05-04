import "./styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home">
      <section className="hero bg-primary">
        <div className="hero">
          <img
            src="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Organic Store"
            className="img-fluid"
          />
          <div className="hero-text">
            <h1>The Organic Store</h1>
            <p>The best place to find fresh, organic food</p>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <Link to="/catalog" className="custom-link">
                  <div className="card-body">
                    <h5 className="card-title">Catalog</h5>
                    <p className="card-text">
                      Browse our selection of fresh, organic produce and add
                      items to your cart.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Link to="/list" className="custom-link">
                  <div className="card-body">
                    <h5 className="card-title">Shopping List</h5>
                    <p className="card-text">
                      Plan your meals and keep track of the food you need with
                      our convenient shopping list feature.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Link to="/admin" className="custom-link">
                  <div className="card-body">
                    <h5 className="card-title">Store Administration</h5>
                    <p className="card-text">
                      Manage your products and discounts with ease using our
                      user-friendly administration tools.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
