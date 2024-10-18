import React from "react";

export default function Copyright() {
  return (
    <main>
      <section className="flex justify-center items-center h-lvh lg:w-2/5  p-5 m-auto text-justify">
        <p className="bg-cardTransparent shadow-contactShadow rounded-xl p-5">
          <span className="font-bold">
            © Les devs Juniors, 2024. Tous droits réservés.
          </span>{" "}
          <br />
          <br />
          L'ensemble du contenu de ce site web, y compris, sans s'y limiter, les
          textes, logos, illustrations, icônes, et la structure, est la
          propriété exclusive de
          <span className="font-bold"> Les devs Juniors</span> et est protégé
          par les lois internationales sur le droit d'auteur et la propriété
          intellectuelle. Toute reproduction, distribution, modification ou
          utilisation sans autorisation préalable est strictement interdite. Les
          images présentes sur ce site proviennent de{" "}
          <a
            className="underline"
            target="_blanck"
            href="https://icones8.fr/icons"
          >
            icons8
          </a>
          . Elles sont utilisées conformément aux licences en vigueur. Si vous estimez que l'une des images utilisées ici enfreint vos droits, veuillez nous contacter pour que nous puissions examiner et résoudre
          la situation. Pour toute question concernant l'utilisation des contenus de ce site, veuillez nous contacter avec le formulaire disponible sur le site.
        </p>
      </section>
    </main>
  );
}
