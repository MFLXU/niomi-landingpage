import checkmark from "../Assets/checkmark.svg";
import { useState } from "react";
function Plans() {
  const [plan, setPlan] = useState(true);
  function plaSwitch() {
    setPlan(!plan);
  }
  return (
    <section>
      <div className="container relative">
        <div className="aurora left-[-200px] top-[-200px]"></div>
        <div className="plans__con">
          <h2>Choose Plan That’s Right For You</h2>
          <p>Choose plan that works best for you, feel free to contact us</p>
          <div className="billing-opt">
            <button
              className={!plan ? "btn-primary" : "btn"}
              onClick={plaSwitch}
            >
              Monthly
            </button>
            <button
              className={plan ? "btn-primary" : "btn"}
              onClick={plaSwitch}
            >
              Yearly
            </button>
          </div>
          <div className="plans">
            <div className="plan">
              <h3 className="plan-title">Free</h3>
              <p className="plan-desc">Have a go and test your superpowers</p>
              <p className="plan-price">
                <span>$0</span>
              </p>
              <div className="plan-content">
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>2 Users</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>2 Files</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>Public Share & Comments</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>Chat Support</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>New income apps</p>
                </div>
                <a className="plan-btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
            <div className="plan">
              <h3 className="plan-title">Pro</h3>
              <p className="plan-desc">
                Experiment the power of infinite possibilities
              </p>
              <p className="plan-price">
                <span>$</span> {plan ? "99.99" : "9.99"}
              </p>
              <div className="plan-content">
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>4 Users</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>All Apps</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>Unliited editable exports</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>Folders and collaboration</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>All incoming apps</p>
                </div>
                <a className="plan-btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
            <div className="plan">
              <h3 className="plan-title">Business</h3>
              <p className="plan-desc">
                Unveil new superpowers and join the Design Leaque
              </p>
              <p className="plan-price">
                <span>$</span> {plan ? "299,99" : "29.99"}
              </p>
              <div className="plan-content">
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>All the featuers of the pro plan</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>Account success Manager</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>Single Sign-On (SSO)</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>Co-conception program</p>
                </div>
                <div className="benef">
                  <img src={checkmark} alt="" />
                  <p>Collaboration-Soon</p>
                </div>
                <a className="plan-btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Plans;
