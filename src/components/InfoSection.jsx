import { useState } from "react";

export default function InfoSection() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row w-2/3 m-auto mb-10 gap-7 [&>*]:lg:w-1/3 [&>*]:p-10 [&>*]:bg-cardTransparent [&>*]:shadow-contactShadow [&>*]:rounded-xl [&>*>img]:h-32 [&>*>img]:m-auto [&>*>h2]:text-xl [&>*>h2]:font-bold  [&>*>h2]:text-center [&>*>h2]:py-3 [&>*>p]:text-justify [&>*>button]:lg:hidden [&>*>button]:underline [&>*>button]:mt-4">
      <article>
        <img
          src="src/assets/images/bachelor-cap.png"
          alt="bachelor cap"
          className="py-3"
        />
        <h2>Qui sommes-nous ?</h2>

        <p
          className={`${
            isExpanded1 ? "max-h-full" : "max-h-24 overflow-hidden"
          } lg:max-h-full lg:overflow-visible`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          commodi optio excepturi unde? Aspernatur eveniet est dolore facere!
          Fugiat architecto rem reiciendis. Natus nisi excepturi in nihil ut
          libero aut. Illum repellendus sunt, doloribus placeat suscipit beatae!
          Quis iusto libero minus nemo inventore. Asperiores, repellendus ipsam
          commodi repudiandae accusantium eligendi sequi! Voluptate tempora
          sapiente quis, voluptas aperiam deserunt veniam blanditiis?
        </p>
        <button
          onClick={() => setIsExpanded1(!isExpanded1)}
        >
          {isExpanded1 ? "Voir moins ▲" : "Voir plus ▼"}
        </button>
      </article>
      <article>
        <img src="src\assets\images\laptop-svgrepo-com.svg" alt="laptop--v1" />
        <h2>Notre mission</h2>
        <p
          className={`${
            isExpanded2 ? "max-h-full" : "max-h-16 overflow-hidden"
          } lg:max-h-full lg:overflow-visible`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          quisquam velit cum unde nam rerum nihil, consequuntur molestiae
          tempora officiis culpa, magni nostrum harum eveniet maxime explicabo
          voluptas nemo nobis.
        </p>
        <button
          onClick={() => setIsExpanded2(!isExpanded2)}
        >
          {isExpanded2 ? "Voir moins ▲" : "Voir plus ▼"}
        </button>
      </article>
      <article>
        <img src="src\assets\images\20sur20.png" alt="" />
        <h2>Nos valeurs</h2>

        <p
          className={`${
            isExpanded3 ? "max-h-full" : "max-h-16 overflow-hidden"
          } lg:max-h-full lg:overflow-visible`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus
          omnis laudantium excepturi, esse doloribus nesciunt perspiciatis
          quidem repellendus est, illum enim quam, delectus labore nobis nisi
          quia doloremque consequuntur!
        </p>
        <button
          onClick={() => setIsExpanded3(!isExpanded3)}
        >
          {isExpanded3 ? "Voir moins ▲" : "Voir plus ▼"}
        </button>
      </article>
    </section>
  );
}
