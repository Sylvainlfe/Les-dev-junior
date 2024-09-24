import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>Nav</div>
      <ol>
      <li>
        <Link to="/" aria-label="accueil">
          Accueil
        </Link>
      </li>
      <li>
        <Link to="/realisation" aria-label="realisation">
          Réalisation
        </Link>
      </li>
      <li>
        <Link to="/contact" aria-label="contact">
          Contact
        </Link>
      </li>
      </ol>
    </>
  );
}
