import "../css/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing_main_div mt-4">
      <div>
        <br />
        <h2 className="pricing_title">Pricing</h2>
        </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="price">
            <div className="price__item price__item--first">
              <span>Basic</span> <span>Free</span>
            </div>
            <div className="price__item">
              <span>7 days</span>
            </div>
            <div className="price__item">
              <span>720p Resolution</span>
            </div>
            <div className="price__item">
              <span>Limited Availability</span>
            </div>
            <div className="price__item">
              <span>Desktop Only</span>
            </div>
            <div className="price__item">
              <span>Limited Support</span>
            </div>
            <a href="#" className="price__btn">
              Choose Plan
            </a>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="price price--premium">
            <div className="price__item price__item--first">
              <span>Premium</span> <span>$19.99</span>
            </div>
            <div className="price__item">
              <span>1 Month</span>
            </div>
            <div className="price__item">
              <span>Full HD</span>
            </div>
            <div className="price__item">
              <span>Lifetime Availability</span>
            </div>
            <div className="price__item">
              <span>TV &amp; Desktop</span>
            </div>
            <div className="price__item">
              <span>24/7 Support</span>
            </div>
            <a href="#" className="price__btn">
              Choose Plan
            </a>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="price">
            <div className="price__item price__item--first">
              <span>Cinematic</span> <span>$39.99</span>
            </div>
            <div className="price__item">
              <span>2 Months</span>
            </div>
            <div className="price__item">
              <span>Ultra HD</span>
            </div>
            <div className="price__item">
              <span>Lifetime Availability</span>
            </div>
            <div className="price__item">
              <span>Any Device</span>
            </div>
            <div className="price__item">
              <span>24/7 Support</span>
            </div>
            <a href="#" className="price__btn">
              Choose Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
