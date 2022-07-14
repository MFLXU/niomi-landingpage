import heroImg from "../Assets/hero-image.svg";
import heroVector from "../Assets/hero-vector.svg";
import demoIcon from "../Assets/view-demo-icon.svg";
function Hero() {
  return (
    <section className="pt-40">
      <div className="container relative">
        <div className="aurora top-[-200px] right-[-200px]"></div>
        <div className="hero__con">
          <div className="hero__text">
            <h1>We’re here to Increase your Productivity</h1>
            <img src={heroVector} alt="" />
            <p>
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest featuresin managing work every
              day.
            </p>
            <div className="hero__btns">
              <a className="btn-primary " href="/">
                Try Free Trial
              </a>
              <a className="btn-ghost" href="/">
                <img src={demoIcon} alt="" className="mr-4" /> View Demo
              </a>
            </div>
          </div>
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
