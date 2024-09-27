import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header className="">
        <ul className="md:grid lg:flex justify-center md:hidden">
          <li className="">
            <Link to="/" aria-label="accueil" className="flex items-center">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-page-white-icon.png"
                alt=""
                className="h-auto w-5"
              />
              Accueil
            </Link>
          </li>
          <li className="">
            <Link to="/realisation" aria-label="realisation">
              <img
                src="src\assets\images\realisation-icon.png"
                alt=""
                className="h-auto w-5"
              />
              Réalisation
            </Link>
          </li>
          <li className="">
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
        <div className="drawer justify-end mr-11 mt-5 ">
          <input id="my-drawer" type="checkbox" className=" drawer-toggle " />
          <div className="drawer-content flex items-center justify-center w-[130%] h-[130%] rounded-[15px] bg-[#d3c7b1] shadow-[21px_21px_38px_#a59b8a,-21px_-21px_38px_#fff3d8] md:hidden">
            <label htmlFor="my-drawer" className="">
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
