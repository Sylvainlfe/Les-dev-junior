import { useState } from "react";

export default function InfoSection() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row w-80 lg:w-2/3 lg:h-screen m-auto mb-10 lg:items-center gap-7 [&>article]:lg:w-1/3 [&>article]:lg:h-2/3 [&>article]:p-5 [&>article]:bg-cardTransparent [&>article]:shadow-contactShadow [&>article]:rounded-xl [&>article>img]:h-32 [&>article>img]:m-auto [&>article>h2]:text-xl [&>article>h2]:font-bold [&>article>h2]:text-center [&>article>h2]:py-3 [&>article>p]:text-justify [&>article>p]:indent-8 [&>article>button]:lg:hidden [&>article>button]:underline [&>article>button]:mt-4">
      <article>
        <img
          src="src/assets/images/bachelor-cap.png"
          alt="bachelor cap"
          className="py-3"
        />
        <h2>Qui sommes-nous ?</h2>

        <p
          className={`${
            isExpanded1
              ? "max-h-[500px]"
              : "max-h-[100px] lg:max-h-full overflow-hidden"
          } transition-all duration-300 lg:max-h-full lg:overflow-visible`}
        >
          Nous sommes un petit collectif de développeurs web juniors,
          fraîchement sortis d'une formation intensive. Nous vous proposons de
          réaliser votre site vitrine, avec pour double objectif de vous offrir
          une présence en ligne tout en nous permettant de mettre en pratique
          nos compétences sur des projets concrets. Ensemble, faisons avancer
          vos idées et notre expérience !
        </p>
        <button onClick={() => setIsExpanded1(!isExpanded1)}>
          {isExpanded1 ? "Voir moins ▲" : "Voir plus ▼"}
        </button>
      </article>
      <article>
        <img src="src/assets/images/laptop-svgrepo-com.svg" alt="laptop--v1" />
        <h2>Notre mission</h2>
        <p
          className={`${
            isExpanded2
              ? "max-h-[500px]"
              : "max-h-[100px] lg:max-h-full overflow-hidden"
          } transition-all duration-300 lg:max-h-full lg:overflow-visible`}
        >
          Notre mission est de vous offrir un site personnalisé, conçu pour
          devenir votre vitrine numérique. Nous vous aidons à vous démarquer en
          ligne avec une solution unique et adaptée à vos besoins, pour
          renforcer votre présence et attirer vos clients.
        </p>
        <button onClick={() => setIsExpanded2(!isExpanded2)}>
          {isExpanded2 ? "Voir moins ▲" : "Voir plus ▼"}
        </button>
      </article>
      <article>
        <img src="src/assets/images/20sur20.png" alt="" />
        <h2>Nos valeurs</h2>

        <p
          className={`${
            isExpanded3
              ? "max-h-[500px]"
              : "max-h-[100px] lg:max-h-full overflow-hidden"
          } transition-all duration-300 lg:max-h-full lg:overflow-visible`}
        >
          Nous avons appris, et continuons d'apprendre, à coder de manière
          propre et efficace. Nous nous engageons à respecter les
          réglementations en vigueur et accordons une attention particulière à
          l'accessibilité de nos sites. Notre objectif est de garantir que vos
          projets soient inclusifs et conformes aux standards du web.
        </p>
        <button onClick={() => setIsExpanded3(!isExpanded3)}>
          {isExpanded3 ? "Voir moins ▲" : "Voir plus ▼"}
        </button>
      </article>
    </section>
  );
}
