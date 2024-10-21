import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  const { image, titre, description, lien } = project;
  return (
      <article className="flex flex-col hover:bg-[#ffffff20] bg-[#ffffff0d] shadow-[0_-1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_-1px_#ffffff40,_0_0_150px_#ffffff1a] transition-all duration-300 w-80 m-auto items-center overflow-hidden rounded-xl justify-center lg:w-2/3">
                <Link className="lg:grid lg:grid-rows-2 lg:grid-cols-[1fr_2fr]" to={lien} target="_blanck">
          <img className="h-40 lg:col-start-1 lg:h-full lg:row-start-1 lg:row-end-3" src={image} alt="Project visualisation" />
            <h2 className="text-xl text-white text-center py-5 lg:col-start-2">{titre}</h2>
            <p className="text-slate-400 px-5 pb-5 text-justify lg:col-start-2">{description}</p>
                </Link>
      </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lien: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
