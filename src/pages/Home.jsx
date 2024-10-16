import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Realisation from "./Realisation";
import HeroSection from "../components/HeroSection";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main className="">
      <HeroSection />
      <Realisation />
    </main>
  );
}
export default Home;
