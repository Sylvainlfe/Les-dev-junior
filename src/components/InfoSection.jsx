import { useState } from "react";

export default function InfoSection() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row w-80 lg:w-2/3 lg:h-screen m-auto mb-10 lg:items-center gap-7 [&>article]:lg:w-1/3 [&>article]:lg:h-96 [&>article]:p-5 [&>article]:bg-cardTransparent [&>article]:shadow-contactShadow [&>article]:rounded-xl [&>article>img]:h-32 [&>article>img]:m-auto [&>article>h2]:text-xl [&>article>h2]:font-bold [&>article>h2]:text-center [&>article>h2]:py-3 [&>article>p]:text-justify [&>article>p]:indent-8 [&>article>button]:lg:hidden [&>article>button]:underline [&>article>button]:mt-4">
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
          Nous croyons fermement en l'importance de l'innovation. Notre objectif
          est de toujours repousser les limites et d'offrir des solutions
          avant-gardistes qui répondent aux besoins changeants de notre marché.
          En intégrant les dernières technologies et en encourageant la
          créativité, nous nous assurons de rester à la pointe de notre secteur.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          quisquam velit cum unde nam rerum nihil, consequuntur molestiae
          tempora officiis culpa, magni nostrum harum eveniet maxime explicabo
          voluptas nemo nobis.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus
          omnis laudantium excepturi, esse doloribus nesciunt perspiciatis
          quidem repellendus est, illum enim quam, delectus labore nobis nisi
          quia doloremque consequuntur!
        </p>
        <button onClick={() => setIsExpanded3(!isExpanded3)}>
          {isExpanded3 ? "Voir moins ▲" : "Voir plus ▼"}
        </button>
      </article>
    </section>
  );
}
