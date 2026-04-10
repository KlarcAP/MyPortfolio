
import { motion } from "framer-motion";
import StackCarousel from "../../components/Carousel";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-sm tracking-[0.3em] text-gray-400">
            SOBRE MIM
          </h2>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Por que me contratar para o seu próximo projeto?
          </h1>

          <p className="text-gray-400 text-justify leading-relaxed">
            Sou estudante de Tecnologia da Informação com atuação prática em desenvolvimento front-end, utilizando tecnologias como React, TypeScript e Tailwind para construir interfaces modernas e responsivas.
            <br/>
            Tenho experiência em transformar demandas em soluções digitais objetivas, com foco em código limpo, organização e usabilidade. Busco desenvolver aplicações que realmente resolvam problemas e entreguem valor ao usuário.
            <br/>
            Estou em constante evolução técnica e procuro contribuir com projetos onde possa gerar impacto desde o início, aprendendo rápido e entregando com qualidade.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Ver Portfólio
          </motion.button>
        </motion.div>
        <StackCarousel />
      </div>
      
    </section>
  );
}