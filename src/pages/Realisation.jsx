import Projects from "../assets/JSON/Realisations.json"
import ProjectCard from "../components/ProjectCard";

export default function Realisation() {
  return (
    <>
      <div className="bg-black w-screen h-[20px] bg-black-500 rounded-t-[100%] relative"></div>
      <section id="realisation" className="bg-black relative">
        <h2>Nos réalisations</h2>
        {Projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      
    </>
  );
}
