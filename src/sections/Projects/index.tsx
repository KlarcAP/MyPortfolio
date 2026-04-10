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

interface ProjectCardProps {
  project: Project;
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
    description: "Aplicação para cuidadores de pets",
    techs: ["React", "TypeScript"],
    github: "https://github.com/example/petwalk",
    demo: "https://petwalk.example.com",
    size: "medium",
  },
];

// Variants para animação em cascata
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

// Componente corrigido com tipagem
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.04, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer"
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        loading="lazy"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.6 }}
      />

      {/* Gradient overlay animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 0.9 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 p-5 text-white"
      >
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm opacity-90">{project.description}</p>

        {/* Techs animadas */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techs.map((tech: string, index: number) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="text-[10px] bg-white/20 px-2 py-1 rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-3">
          {project.github !== "#" && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              GitHub
            </motion.a>
          )}
          {project.demo !== "#" && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              Live Demo
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="py-20 px-4 max-w-8xl mx-auto bg-neutral-950 text-white space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm tracking-[0.3em] text-gray-400"
      >
        PROJETOS
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold leading-tight"
      >
        Veja os meus cases mais recentes
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]"
      >
        {projects.map((project: Project) => (
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
      </motion.div>
    </section>
  );
}
