import React from "react";

function Card({ personalProfile }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-24 md:pb-40 lg:h-full">
      {personalProfile.map((profile) => (
        <article
          key={profile.id}
          className="card w-80 h-2/3 md:card md:card-side md:w-2/3 md:h-auto lg:w-3/5 bg-cardTransparent shadow-contactShadow"
        >
          <figure>
            <img
              src={profile.image}
              alt={profile.title}
              className="w-full h-80 md:w-40 md:h-full object-cover"
            />
          </figure>
          <ul className="card-body flex-1">
            <h2 className="card-title">{profile.title}</h2>
            <p className="">
              {profile.firstname} {profile.lastname}
            </p>
            <p>{profile.description}</p>
            <ul className="card-actions">
              {profile.stack.map((tech, index) => (
                <li key={index} className="badge badge-outline">
                  {tech}
                </li>
              ))}
            </ul>
            <a className="underline w-64" target="_blank" href={profile.github}>
              {profile.githubName}
            </a>
            <a href={profile.cv} target="_blank" className="underline">
              Téléchargez mon CV !
            </a>
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Card;
