import logo1 from "../Assets/logo-1.svg";
import logo2 from "../Assets/logo-2.svg";
import logo3 from "../Assets/logo-3.svg";
import logo4 from "../Assets/logo-4.svg";
import logo5 from "../Assets/logo-5.svg";

function Company() {
  return (
    <section>
      <div className="container">
        <div className="company__con">
          <h2>More than 25,000 teams use Collabs</h2>
          <div className="company__logos">
            <div>
              <img src={logo1} alt="" />
            </div>
            <div>
              <img src={logo2} alt="" />
            </div>
            <div>
              <img src={logo3} alt="" />
            </div>
            <div>
              <img src={logo4} alt="" />
            </div>
            <div>
              <img src={logo5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Company;
