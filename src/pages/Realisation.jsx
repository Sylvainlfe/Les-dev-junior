import Projects from "../assets/JSON/Realisations.json";
import ProjectCard from "../components/ProjectCard";

export default function Realisation() {
  return (
    <>
      <div className="bg-black h-[20px] bg-black-500 rounded-t-[100%]"></div>
      <section id="realisation" className="bg-black h-full flex gap-10 flex-col pb-32">
      <h2 className="text-center text-3xl py-20 tracking-wider drop-shadow-[0_0_7px_hsla(0,0%,100%,0.75)]">Nos réalisations</h2>
        {Projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  );
}
