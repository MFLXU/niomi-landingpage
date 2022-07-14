import f1 from "../Assets/Feature1.svg";
import f2 from "../Assets/Feature2.svg";
import f3 from "../Assets/feature3.svg";

function Features() {
  return (
    <section>
      <div className="container">
        <div className="features__con">
          <div className="features__header">
            <h2>Our Features</h2>
            <p>
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct esaly
            </p>
            <a className="btn-primary" href="/">
              Get Started
            </a>
          </div>
          <div className="features__list">
            <div className="feature">
              <div>
                <img src={f1} alt="" />
              </div>
              <div className="feature-text">
                <p>Collboration Teams </p>
                <p>Here you can handle projects together with team virtually</p>
              </div>
            </div>
            <div className="feature">
              <div>
                <img src={f2} alt="" />
              </div>
              <div className="feature-text">
                <p>Cloud Storage</p>
                <p>
                  No nedd to worry about storage because we provide storage up
                  to 2 TB
                </p>
              </div>
            </div>
            <div className="feature">
              <div>
                <img src={f3} alt="" />
              </div>
              <div className="feature-text">
                <p>Daily Analytics</p>
                <p>
                  We always provide useful informatin to make it easier for you
                  every day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
