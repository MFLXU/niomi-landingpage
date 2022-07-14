import {
  Navbar,
  Hero,
  Company,
  PartnersSupport,
  Features,
  Benifits,
  Footer,
  Plans,
  Contact,
} from "../Components/index";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <PartnersSupport />
      <Features />
      <Benifits />
      <Plans />
      <Contact />
      <Footer />
      <div className="bg-black text-white">
        <div className="container font-inter py-2 text-sm flex justify-center items-center">
          <p>
            made by{" "}
            <a
              href="https://github.com/MFLXU"
              target="_blank"
              className="underline"
            >
              Louaye Kazar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
