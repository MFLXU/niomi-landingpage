import rating1 from "../Assets/rating-1.svg";
import rating2 from "../Assets/rating-2.svg";
import anal from "../Assets/anal.svg";
import enga from "../Assets/enga.svg";
import pub from "../Assets/pub.svg";
function PartnersSupport() {
  return (
    <section className="bg-slate-100">
      <div className="container">
        <div className="ps__con ">
          <div className="ps__text ">
            <p className="ps__text-title ">
              How we support our pratners all over the world
            </p>
            <p className="text-sm">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
            <div className="ps__rating">
              <div className="">
                <img src={rating1} alt="" />
                <p className="text-xl">
                  <span>4.9 / 5</span> rating
                </p>
                <p
                  className="text-gray-400 text-sm
                "
                >
                  databricks
                </p>
              </div>
              <div>
                <img src={rating2} alt="" />
                <p className="text-xl">
                  <span>4.8 / 5</span> rating
                </p>
                <p
                  className="text-gray-400 text-sm
                "
                >
                  Chainalysis
                </p>
              </div>
            </div>
          </div>
          <div className="ps__percs">
            <article>
              <div className="bg-white p-4 rounded-lg h-fit">
                <img className="md:w-11 w-12" src={pub} alt="" />
              </div>
              <div>
                <p>Publishing</p>
                <p>
                  Plan, collaborate, and publishing your contetn that drivees
                  meaningful engagement and growth for your barnd
                </p>
              </div>
            </article>
            <article>
              <div className="perc-icon">
                <img src={anal} alt="" />
              </div>
              <div>
                <p>Analytics</p>
                <p>Analyze your performance and create goegeous report</p>
              </div>
            </article>
            <article>
              <div className="perc-icon">
                <img src={enga} alt="" />
              </div>
              <div>
                <p>Engagement</p>
                <p>Quiuckly navigate you anda engage with your adience</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PartnersSupport;
