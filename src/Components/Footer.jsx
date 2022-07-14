import footerCta from "../Assets/footer-cta.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__con">
          <div className="footer__cta">
            <h1 className="nav__logo">niomi</h1>
          </div>
          <div className="footer__links">
            <div>
              <p className="text-xl font-bold mb-4">Support</p>
              <p className="mb-2 hover:text-white text-gray-400">Help center</p>
              <p className="mb-2 hover:text-white text-gray-400">
                Account information
              </p>
              <p className="mb-2 hover:text-white text-gray-400">About</p>
              <p className="mb-2 hover:text-white text-gray-400">Contact us</p>
            </div>
            <div>
              <p className="text-xl font-bold mb-4">Help & Solution</p>
              <p className="mb-2 hover:text-white text-gray-400">
                Talk to support
              </p>
              <p className="mb-2 hover:text-white text-gray-400">
                Support docs
              </p>
              <p className="mb-2 hover:text-white text-gray-400">
                System status
              </p>
              <p className="mb-2 hover:text-white text-gray-400">
                Covid responde
              </p>
            </div>
            <div>
              <p className="text-xl font-bold mb-4">Product</p>
              <p className="mb-2 hover:text-white text-gray-400">Update</p>
              <p className="mb-2 hover:text-white text-gray-400">Security</p>
              <p className="mb-2 hover:text-white text-gray-400">Beta Test</p>
              <p className="mb-2 hover:text-white text-gray-400">Pricing</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 py-4">
          <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          <div className="flex justify-between items-center">
            <a href="/">Terms and Condtions</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
