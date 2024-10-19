import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const { image, titre, description, lien } = project;
  return (
    <>
      <article className="flex flex-col hover:bg-[#ffffff20] bg-[#ffffff0d] shadow-[0_-1px_0_rgba(255,255,255,0.25)] lg:grid w-80 lg:w-2/3 m-auto items-center overflow-hidden rounded-xl justify-center ">
          <img className="h-40 pr-5" src={image} alt="Project visualisation" />
            <h2 className="card-title text-white pb-5">{titre}</h2>
            <p className="text-slate-400">{description}</p>
              <button className="btn btn-primary">
                <Link to={lien}>Visiter le site</Link>
              </button>
      </article>
    </>
  );
}

export default ProjectCard;
