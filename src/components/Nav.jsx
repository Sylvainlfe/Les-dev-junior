import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const selectedMenu = "text-white text-shadow";

  return (
    <>
      <header className="relative z-10">
        <ul className="hidden fixed top-[90%] left-[58%] transform text-[#ffffff80] -translate-x-1/2 bg-transparent md:flex md:gap-2 md:w-[688px]">
          <li
            className={`flex justify-center w-32 p-3 bg-cardTransparent shadow-navShadow backdrop-blur-sm rounded-full ${
              location.pathname === "/" ? selectedMenu : "text-[#ffffff80] hover:text-white"
            }`}
          >
            <Link
              to="/"
              aria-label="accueil"
              className="flex items-center text-xl"
            >
              <img
                src="src\assets\images\home.png"
                alt="accueil icon"
                className="h-auto w-5 mr-2 "
              />
              Accueil
            </Link>
          </li>
          <li
            aria-current="page"
            className={`flex justify-center p-3 w-40 bg-cardTransparent shadow-navShadow backdrop-blur-sm rounded-full ${
              location.pathname === "/#realisation" ? selectedMenu : "text-[#ffffff80] hover:text-white"
            }`}
          >
            <Link
              to="/#realisation"
              aria-label="realisation"
              className="flex items-center text-xl"
            >
              <img
                src="src/assets/images/realisation-icon.png"
                alt="realisation icon"
                className="h-auto w-5 mr-2"
              />
              Réalisation
            </Link>
          </li>
          <li
            className={`flex justify-center w-32 p-3 bg-cardTransparent shadow-navShadow backdrop-blur-sm rounded-full ${
              location.pathname === "/contact" ? selectedMenu : "text-[#ffffff80] hover:text-white"
            }`}
          >
            <Link
              to="/contact"
              aria-label="contact"
              className="flex items-center text-xl"
            >
              <img
                src="src\assets\images\contact.png"
                alt="contact icon"
                className="h-auto w-5 mr-2"
              />
              Contact
            </Link>
          </li>
          <button class="Btn flex items-center rounded-full w-14 h-14 cursor-pointer relative overflow-hidden transition-all duration-300 shadow-navShadow bg-black">
            <div class="sign w-full text-2xl text-white transition-all duration-300 ">
            ©
            </div>
            <div class="text absolute right-0 w-0 opacity-0 text-white text-lg font-medium transition-all duration-300">
              LesDevJuniors
            </div>
          </button>
        </ul>
        <div className="drawer fixed left-[26%] top-[2%]  ">
          <input id="my-drawer" type="checkbox" className=" drawer-toggle " />
          <div className="drawer-content flex items-center justify-center w-[130%] h-[130%] rounded-[15px] md:hidden">
            <label
              htmlFor="my-drawer"
              className="bg-custom p-2 backdrop-opacity-10 rounded-full"
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
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-[#33383d] bg-gradient-to-b from-[#33383d] to-[#181a1d] via-[#33383d]/69 text-white min-h-full w-80 flex justify-center items-center">
              <li className="w-[130px] rounded-[15px] bg-[#33383d] shadow-[5px_5px_10px_#24272b,-5px_-5px_10px_#42494f]">
                <Link to="/" aria-label="accueil" className="flex items-center">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-page-white-icon.png"
                    alt=""
                    className="h-auto w-5"
                  />
                  Accueil
                </Link>
              </li>
              <li className="w-[130px] rounded-[15px] bg-[#25292d] shadow-[5px_5px_10px_#1a1d20,-5px_-5px_10px_#30353b] my-32">
                <Link to="/realisation" aria-label="realisation">
                  <img
                    src="src\assets\images\realisation-icon.png"
                    alt=""
                    className="h-auto w-5"
                  />
                  Réalisation
                </Link>
              </li>
              <li className="w-[130px] rounded-[15px] bg-[#1f2125] shadow-[5px_5px_10px_#16171a,-5px_-5px_10px_#282b30]">
                <Link to="/contact" aria-label="contact">
                  <img
                    src="https://www.pngkey.com/png/full/151-1517814_telefone-do-lab-white-contact-icon-png.png"
                    alt=""
                    className="h-auto w-5"
                  />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
