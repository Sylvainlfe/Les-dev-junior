import Realisation from "./Realisation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="h-screen">
        <section className="relative h-screen w-[80%] top-[40%] left-[50%] transform -translate-x-1/2 text-[1rem] md:text-[2rem] text-white ">
          <h1 className="text-center text-xl lg:text-left ">
            Un collectif de jeunes développeurs qui a soif d'experience
          </h1>
          <p className="text-center lg:text-left text-lg pt-8">
            Touchez un nouveau puclic avec <span className="font-bold">votre propre site internet</span>, pour un prix imbatable.
          </p>
          <Link to="/contact" aria-label="contact" className="contact-btn text-lg font-bold flex justify-center w-80 mx-auto mt-12 lg:inline lg:ml-32 ">
          <span className="marquee" aria-hidden>Contactez-nous</span>
          </Link>
          <img
            src="src\assets\images\mockup.png"
            className="lg:relative lg:top-[-60%] lg:left-[60%] lg:w-[80rem]"
            alt=""
          />
        </section>
        <Realisation />
      </main>
    </>
  );
}
export default Home;
