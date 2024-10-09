import React from "react";

function Card({ personalProfile }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-20 lg:h-full">
      {personalProfile.map((profile) => (
        <article
          key={profile.id}
          className="card md:card md:card-side md:w-3/4 md:h-52 bg-cardTransparent shadow-contactShadow"
        >
          <figure>
            <img
              src={profile.image}
              alt={profile.title}
              className="w-full h-72 md:w-60 md:h-full "
            />
          </figure>
          <ul className="card-body">
            <h2 className="card-title">{profile.title}</h2>
            <p className="">
              {profile.firstname} {profile.lastname}
            </p>
            <p>{profile.description}</p>
            <ul className="card-actions flex">
              {profile.stack.map((tech, index) => (
                <li key={index} className="badge badge-outline">
                  {tech}
                </li>
              ))}
            </ul>
            <a href="">{profile.github}</a>
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Card;
