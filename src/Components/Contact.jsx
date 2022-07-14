import profile1 from "../Assets/profile1.png";
import profile2 from "../Assets/profile2.png";
import profile3 from "../Assets/profile3.png";
import profile4 from "../Assets/profile4.png";
import profile5 from "../Assets/profile5.svg";
import contactIcon from "../Assets/contacticon.svg";

function Contact() {
  return (
    <section className="contact__section">
      <div className="container">
        <div className="contact__con">
          <div className="contact__text">
            <h2>What are people saying about us?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>- Aria Zinanrio</p>
            <div>
              <img src={profile1} alt="" />
              <img src={profile2} alt="" />
              <img src={profile3} alt="" />
              <img src={profile4} alt="" />
            </div>
          </div>
          <div className="contact__form">
            <img src={contactIcon} alt="" />
            <p>Get Started</p>
            <form action="">
              <label htmlFor="">E-Mail :</label>
              <input type="text" />
              <label htmlFor="">Message :</label>
              <textarea name="" id="" cols="30" rows="5"></textarea>
              <button className="btn-primary">Request Demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
