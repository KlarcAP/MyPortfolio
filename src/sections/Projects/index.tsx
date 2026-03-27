import { motion } from "framer-motion";
import Beconect from "../../assets/beconnect.png";
import Risoflow from "../../assets/risoflow.png";
import Dtmoney from "../../assets/dtmoney.png";
import Petwalk from "../../assets/petwalk.png";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  techs: string[];
  github: string;
  demo: string;
  size: "large" | "medium";
}

const projects: Project[] = [
  {
    id: 1,
    image: Risoflow,
    title: "Risoflow",
    description: "Plataforma de gestão de processos",
    techs: ["React", "TypeScript"],
    github: "https://github.com/example/risoflow",
    demo: "https://risoflow.example.com",
    size: "large",
  },
  {
    id: 2,
    image: Dtmoney,
    title: "DT Money",
    description: "Controle financeiro pessoal",
    techs: ["React", "TypeScript"],
    github: "https://github.com/example/dtmoney",
    demo: "https://dtmoney.example.com",
    size: "medium",
  },
  {
    id: 3,
    image: Beconect,
    title: "Beconnect",
    description: "Rede social corporativa",
    techs: ["React", "TypeScript"],
    github: "https://github.com/example/beconnect",
    demo: "https://beconnect.example.com",
    size: "medium",
  },
  {
    id: 4,
    image: Petwalk,
    title: "Petwalk",
    description: "Aplicativo para cuidadores de pets",
    techs: ["React", "TypeScript"],
    github: "https://github.com/example/petwalk",
    demo: "https://petwalk.example.com",
    size: "medium",
  },
];

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm opacity-90">{project.description}</p>

        {/* Links */}
        <div className="flex gap-3 mt-3">
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition"
            >
              GitHub
            </a>
          )}
          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="py-20 px-4 max-w-8xl mx-auto bg-neutral-950">
      <h1 className="text-center mb-12 text-3xl font-bold text-white">Projetos</h1>

      {/* Responsive grid – adjust spans to create a balanced layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`
              relative rounded-2xl overflow-hidden
              ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
              ${project.size === "medium" ? "md:col-span-2" : ""}
            `}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}