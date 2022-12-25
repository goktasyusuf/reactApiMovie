import "../css/About.css";

const About = () => {
  return (
    <>
    <div className="pricing_title_about mt-4">
    <h2 className="pricing_title mt-3 mb-4">About Us</h2>
    </div>
    <div className="line">
      <div className="row">

        <br />
        <br />
        <br />

        <h3 className="watchgo">WATCHGO – Best Place for Movies</h3>
        <p className="mb-5 watchgo">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using. 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature">
            <i className="fa-solid fa-tv icon"></i>
            <div className="about_div">
              <h5 className="">Ultra HD</h5>
              <p className="feature__text watchgo">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature">
            <i className="fa-solid fa-film icon"></i>
            <div className="about_div">
              <h5 className="">Film</h5>
              <p className="feature__text watchgo">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature">
            <i className="fa-solid fa-trophy icon"></i>
            <div className="about_div">
              <h5 className="">Awards</h5>
              <p className="feature__text watchgo">
                It to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature">
          <i className="fa-solid fa-bell icon"></i>
            <div className="about_div">
              <h5 className="">Notifications</h5>
              <p className="feature__text watchgo">
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="feature">
          <i className="fa-solid fa-rocket icon "></i>
            <div className="about_div">
              <h5 className="">Rocket</h5>
              <p className="feature__text watchgo">
              It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="feature">
          <i className="fa-solid fa-globe icon"></i>
            <div className="about_div">
              <h5 className="">Multi Language Subtitles</h5>
              <p className="feature__text watchgo">
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default About;
