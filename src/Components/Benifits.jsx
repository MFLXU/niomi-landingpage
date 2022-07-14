import benef from "../Assets/benef.svg";
import checkmark from "../Assets/checkmark.svg";
function Benifits() {
  return (
    <section>
      <div className="container">
        <div className="benifits__con">
          <div className="benifits__text">
            <h2>What Benifits Will You Get</h2>
            <div className="benef">
              <img src={checkmark} alt="" />
              <p>Free Consulting With Experet Saving Money</p>
            </div>
            <div className="benef">
              <img src={checkmark} alt="" />
              <p>Online Banking</p>
            </div>
            <div className="benef">
              <img src={checkmark} alt="" />
              <p>Investment Report Every Month</p>
            </div>
            <div className="benef">
              <img src={checkmark} alt="" />
              <p>Saving Money For The Future</p>
            </div>
            <div className="benef">
              <img src={checkmark} alt="" />
              <p>Online Transection</p>
            </div>
          </div>
          <div className="benifits__img">
            <img src={benef} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Benifits;
