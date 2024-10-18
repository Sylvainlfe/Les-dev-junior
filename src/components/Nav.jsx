import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const selectedMenu = "text-white text-shadow";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-10">
      <ul className="hidden fixed top-[90%] left-[50%] transform text-[#ffffff80] -translate-x-1/2 bg-transparent lg:flex lg:gap-2 lg:w-[496px]">
        <li>
          <Link
            to="/"
            aria-label="accueil"
            className={`flex justify-center items-center w-32 p-3 bg-cardTransparent shadow-navShadow backdrop-blur-sm rounded-full ${
              location.pathname === "/"
                ? selectedMenu
                : "text-[#ffffff80] hover:text-white"
            }`}
          >
            <img
              src="src/assets/images/home.png"
              alt="accueil icon"
              className="h-auto w-5 mr-2 "
            />
            <p className="text-xl">Accueil</p>
          </Link>
        </li>
        <li>
          <Link
            to="/#realisation"
            aria-label="realisation"
            className={`flex items-center justify-center p-3 w-40 bg-cardTransparent shadow-navShadow backdrop-blur-sm rounded-full ${
              location.pathname === "/#realisation"
                ? selectedMenu
                : "text-[#ffffff80] hover:text-white"
            }`}
          >
            <img
              src="src/assets/images/realisation-icon.png"
              alt="realisation icon"
              className="h-auto w-5 mr-2"
            />
            <p className="text-xl">Réalisation</p>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            aria-label="contact"
            className={`flex items-center justify-center w-32 p-3 bg-cardTransparent shadow-navShadow backdrop-blur-sm rounded-full ${
              location.pathname === "/contact"
                ? selectedMenu
                : "text-[#ffffff80] hover:text-white"
            }`}
          >
            <img
              src="src/assets/images/contact.png"
              alt="contact icon"
              className="h-auto w-5 mr-2"
            />
            <p className="text-xl">Contact</p>
          </Link>
        </li>
        <li>
          <Link to="/copyright" className="Btn flex items-center rounded-full w-14 h-14 cursor-pointer relative overflow-hidden pl-[19px] transition-all duration-300 shadow-navShadow bg-black">
            <p className="sign w-full text-2xl text-white transition-all duration-300 ">
              ©
            </p>
            <p className="text absolute right-0 w-0 opacity-0 text-white text-lg font-medium transition-all pl-[19px] duration-300">
              LesDevJuniors
            </p>
          </Link>
        </li>
      </ul>
      <nav className="drawer fixed left-[26%] top-[2%]  ">
        <input
          id="my-drawer"
          type="checkbox"
          className=" drawer-toggle "
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <div className="drawer-content flex items-center justify-center w-[130%] h-[130%] rounded-[15px] lg:hidden">
          <label
            htmlFor="my-drawer"
            className="bg-custom p-2 backdrop-opacity-10 rounded-full z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-12 w-12 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div
          className={`drawer-side ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={handleCloseMenu}
          ></label>
          <ul className="bg-cardTransparent bg-black bg-opacity-60 backdrop-blur-md text-white h-full w-full flex flex-col justify-center items-center gap-4">
            <li>
              <Link
                to="/"
                aria-label="accueil"
                onClick={handleCloseMenu}
                className="w-48 p-3 bg-cardTransparent rounded-full shadow-navShadow flex justify-center items-center"
              >
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-page-white-icon.png"
                  alt=""
                  className="h-auto w-5 mr-2"
                />
                <p className="text-xl">Accueil</p>
              </Link>
            </li>
            <li>
              <Link
                to="/#realisation"
                aria-label="realisation"
                onClick={handleCloseMenu}
                className="w-48 p-3 bg-cardTransparent rounded-full shadow-navShadow flex justify-center items-center"
              >
                <img
                  src="src/assets/images/realisation-icon.png"
                  alt=""
                  className="h-auto w-5 mr-2"
                />
                <p className="text-xl">Réalisation</p>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                aria-label="contact"
                onClick={handleCloseMenu}
                className="w-48 p-3 bg-cardTransparent rounded-full shadow-navShadow flex justify-center items-center"
              >
                <img
                  src="https://www.pngkey.com/png/full/151-1517814_telefone-do-lab-white-contact-icon-png.png"
                  alt=""
                  className="h-auto w-5 mr-2"
                />
                <p className="text-xl">Contact</p>
              </Link>
            </li>
            <li>
              <button className="w-48 p-3 flex items-center justify-center rounded-full cursor-pointer shadow-navShadow bg-black text-xl">
                © LesDevJuniors
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
