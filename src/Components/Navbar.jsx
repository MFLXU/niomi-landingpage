import { useState } from "react";
import close from "../Assets/close-icon.svg";
import menu from "../Assets/menu-icon.svg";
function Navbar() {
  const [nav, setNav] = useState(false);
  const showNav = () => {
    return setNav(!nav);
  };
  return (
    <nav className="bg-slate-50 ">
      <div className="container">
        {/* Desktop */}
        <div className="nav__con">
          <a className="nav__logo" href="">
            niomi
          </a>
          <div className="nav__links">
            <a className="nav__link" href="/">
              Home
            </a>
            <a className="nav__link" href="/">
              Product
            </a>
            <a className="nav__link" href="/">
              FAQ
            </a>
            <a className="nav__link" href="/">
              Blog
            </a>
            <a className="nav__link" href="/">
              About Us
            </a>
          </div>
          <div className="nav__actions">
            <a href="/">Log In</a>
            <a className="btn-primary" href="/">
              Sign Up
            </a>
          </div>
          <button onClick={showNav} className=" md:hidden">
            <img className="fill-white w-10" src={nav ? close : menu} alt="" />
          </button>
        </div>
        {/* Mobile */}
        <div
          className={
            nav
              ? "fixed w-full left-0 h-screen z-[100] bg-slate-50 px-4 text-center md:hidden "
              : "hidden"
          }
        >
          {/* Nav Links */}
          <div className="flex flex-col items-center justify-center">
            <a className="py-4" href="/">
              Home
            </a>
            <a className="py-4" href="/">
              Product
            </a>
            <a className="py-4" href="/">
              FAQ
            </a>
            <a className="py-4" href="/">
              Blog
            </a>
            <a className="py-4" href="/">
              About Us
            </a>
          </div>
          {/* Nav Actions */}
          <div className="flex flex-col items-center justify-center gap-4 mt-10 w-full">
            <a className="btn-ghost w-full" href="/">
              Log In
            </a>
            <a className="btn-primary w-full" href="/">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
