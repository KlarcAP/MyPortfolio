import { motion } from "framer-motion";

interface EducationItem {
  title: string;
  period: string;
  description: string;
}

export function FormationTimeline() {
  const educationData: EducationItem[] = [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      period: "2025 - Presente",
      description:
        "Atualmente cursando Tecnólogo em Análise e Desenvolvimento de Sistemas no Instituto Federal de Ciência e Tecnologia da Bahia (IFBA), com foco em desenvolvimento full-stack (JavaScript, React, Node.js), arquitetura de software, DevOps e tecnologias emergentes como IA e cloud computing, complementando a formação com participação em projetos práticos e eventos tecnológicos para aplicação real dos conhecimentos adquiridos.",
    },
    {
      title: "Técnico em Desenvolvimento de Sistemas",
      period: "2023 - 2024",
      description:
        "Cursei Técnico em Desenvolvimento de Sistemas no SENAI, onde adquiri habilidades práticas em programação (Java, JavaScript, Python), banco de dados (MySQL), desenvolvimento web (HTML/CSS, React) e metodologias ágeis (Scrum). Participei ativamente de projetos integradores, como o desenvolvimento de um Sistema de Integração de Turmas chamado de BeConect, aplicando conceitos de engenharia de software e versionamento (Git). A formação, aliando teoria à prática em laboratórios equipados, preparou-me para desafios reais do mercado de TI e consolidou minha paixão pela área.",
    },
    {
      title: "Ensino Médio",
      period: "2019 - 2022",
      description:
        "Minha formação no Ensino Médio foi realizada no Colégio da Polícia Militar Francisco Pedro de Oliveira, instituição reconhecida por sua excelência acadêmica e disciplina, aliando rigor educacional à formação cívica e de valores. Durante os três anos de ensino, tive a oportunidade de desenvolver não apenas conhecimentos técnicos e científicos, mas também habilidades como disciplina, trabalho em equipe e responsabilidade social, características marcantes da metodologia da escola. O currículo, baseado em uma abordagem disciplinar e organizada, proporcionou uma base sólida em ciências humanas, exatas e biológicas, preparando-me para desafios acadêmicos e profissionais. Além disso, a instituição reforçou valores como hierarquia, respeito e patriotismo, contribuindo para minha formação ética e cidadã.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="education"
      className="py-20 px-4 w-full mx-auto bg-neutral-950 text-white space-y-12"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <h2 className="text-sm tracking-[0.3em] text-gray-400 uppercase">
          Formação
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Educação e Certificações
        </h1>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {educationData.map((education, index) => (
          <motion.div key={index} variants={item} className="group relative">
            {/* Timeline line connector */}
            {index !== educationData.length - 1 && (
              <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-cyan-400/40 to-violet-400/10" />
            )}

            <div className="flex gap-6">
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="flex flex-col items-center flex-shrink-0"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 border-2 border-neutral-950 shadow-lg shadow-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-neutral-950 rounded-full" />
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div whileHover={{ y: -4 }} className="flex-1 pb-6">
                <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 md:p-8 shadow-lg shadow-black/20 transition-all duration-300 hover:border-white/20 hover:shadow-cyan-400/10 hover:shadow-lg overflow-hidden">
                  {/* Gradient background effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-transparent to-violet-400/0 group-hover:from-cyan-400/5 group-hover:to-violet-400/5 transition-all duration-300 pointer-events-none rounded-2xl" />

                  <div className="relative z-10">
                    {/* Period badge */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="inline-block text-xs uppercase tracking-[0.2em] text-cyan-400/80 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 mb-3"
                    >
                      {education.period}
                    </motion.span>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 transition-all duration-300">
                      {education.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {education.description}
                    </p>

                    {/* Accent line */}
                    <div className="h-1 w-0 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full group-hover:w-16 transition-all duration-300 mt-4" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
