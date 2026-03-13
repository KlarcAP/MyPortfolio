import MyPhotoAbout from "../../assets/minhaFoto.jpeg";
import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

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
    <section className="w-full min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6 py-20">
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

          <p className="text-gray-400 leading-relaxed">
            Sou estudante de Tecnologia da Informação e desenvolvedor
            front-end em formação, com interesse em criar interfaces digitais
            modernas e funcionais.
            <br />
            <br />
            Gosto de transformar problemas em soluções práticas utilizando
            tecnologia. Busco sempre escrever código limpo, criar experiências
            intuitivas e desenvolver projetos que realmente resolvam
            necessidades do mundo real.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Ver Portfólio
          </motion.button>
        </motion.div>

        {/* FOTO + TECNOLOGIAS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <img
              src={MyPhotoAbout}
              alt="Foto do Klarc Almeida"
              className="w-72 h-72 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* ICONES TECNOLOGIAS */}
          <div className="flex gap-6 mt-8 text-4xl text-gray-300">
            <FaReact className="hover:text-cyan-400 transition" />
            <FaNodeJs className="hover:text-green-500 transition" />
            <FaHtml5 className="hover:text-orange-500 transition" />
            <FaCss3Alt className="hover:text-blue-500 transition" />
            <FaJs className="hover:text-yellow-400 transition" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}