import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const { image, titre, description, lien } = project;
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card card-side bg-base-100 shadow-xl flex flex-row items-center max-w-2xl rounded-3xl overflow-hidden">
          <img className="card-image" src={image} alt="Project visualisation" />
          <div className="card-body w-1/2 p-4 bg-base-100">
            <h2 className="card-title">{titre}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to={lien}>Visiter le site</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
