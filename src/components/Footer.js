import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <h6 className="footer__title">Download Our App</h6>
            <ul className="footer__app">
              <li>
                <a href="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <h6 className="footer__title">Resources</h6>
            <ul className="footer__list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Pricing Plan</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <h6 className="footer__title">Legal</h6>
            <ul className="footer__list">
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-4 col-md-3">
            <h6 className="footer__title">Contact</h6>
            <ul className="footer__list">
              <li>
                <a href="tel:+18002345678">github.com/goktasyusuf</a>
              </li>
              <li>
                <a href="mailto:support@moviego.com">yusufgk125@gmail.com</a>
              </li>
            </ul>
            <ul className="footer__social">
              <li className="facebook">
                <a href="#">
                <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="instagram">
                <a href="#">
                <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="twitter">
                <a href="#">
                <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="vk">
                <a href="#">
                <i className="fa-brands fa-vk"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
