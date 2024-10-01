import React from "react";

function Card({ personalProfile }) {
  return (
    <>
      {personalProfile.map((profile) => (
        <article
          key={profile.id}
          className="card w-60 h-full mb-2 shadow-xl backdrop-blur-md bg-white/30" 
        >
          <figure>
            <img
              src={profile.image}
              alt={profile.title}
              className="w-full h-52"
            />
          </figure>
          <ul className="card-body">
            <h2 className="card-title">{profile.title}</h2>
            <p>{profile.description}</p>
            <ul className="card-actions flex">
              {profile.stack.map((tech, index) => (
                <li key={index} className="badge badge-outline">{tech}</li>
              ))}
            </ul>
          </ul>
        </article>
      ))}
    </>
  );
}

export default Card;
