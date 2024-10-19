import Projects from "../assets/JSON/Realisations.json";
import ProjectCard from "../components/ProjectCard";

export default function Realisation() {
  return (
    <>
      <div className="bg-black h-[20px] bg-black-500 rounded-t-[100%]"></div>
      <section id="realisation" className="bg-black h-screen ">
      <h2>Nos réalisations</h2>
        {Projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  );
}
