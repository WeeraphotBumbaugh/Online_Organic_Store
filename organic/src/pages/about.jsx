import "./styles/about.css";

function About() {
  return (
    <div className="page about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913_960_720.jpg"
              alt="organic_store"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-center mb-5">About Organic Store</h2>
            <p>
              We are passionate about organic food and believe that everyone
              should have access to healthy, fresh produce. Our store was
              founded with the mission of providing high-quality, organic
              produce at affordable prices.
            </p>
            <p>
              Our produce is locally sourced whenever possible, and we work
              directly with farmers to ensure that our customers get the
              freshest produce possible. We also offer a wide range of other
              organic products, including dairy, meat, and pantry items.
            </p>
            <p>
              We are committed to sustainability and reducing our environmental
              impact. We use compostable packaging whenever possible, and we
              prioritize products that are grown and produced using sustainable
              methods.
            </p>
            <p>
              Thank you for choosing our store for your organic food needs. We
              look forward to serving you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
