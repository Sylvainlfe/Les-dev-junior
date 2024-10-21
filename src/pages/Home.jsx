import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Realisation from "./Realisation";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

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
    <main>
      <HeroSection />
      <InfoSection />
      <Realisation />
    </main>
  );
}
export default Home;
