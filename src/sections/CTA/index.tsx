import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function CTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-4 overflow-hidden bg-neutral-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl" />

        {/* Mouse-following glow */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-violet-400/5 rounded-full blur-2xl pointer-events-none"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={item} className="space-y-4">
            <motion.div animate={floatingAnimation} className="inline-block">
              <span className="text-sm uppercase tracking-[0.4em] text-cyan-400/80 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2">
                🚀 Pronto para inovar?
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-violet-100 bg-clip-text text-transparent">
                Vamos construir
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                o futuro juntos
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Estou em busca de oportunidades desafiadoras onde possa aplicar
            minha paixão por
            <span className="text-cyan-400 font-semibold">
              {" "}
              desenvolvimento full-stack
            </span>
            ,
            <span className="text-violet-400 font-semibold">
              {" "}
              arquitetura de software
            </span>{" "}
            e
            <span className="text-cyan-400 font-semibold">
              {" "}
              soluções inovadoras
            </span>
            . Vamos conversar sobre como posso contribuir para o sucesso da sua
            equipe.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="mailto:klarcalmeida@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">💌 Enviar Proposta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/klarc-almeida-908774162/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 border border-white/20 rounded-full font-semibold text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                💼 LinkedIn
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/5571993791975"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 border border-white/20 rounded-full font-semibold text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                📱 WhatsApp
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            {[
              { number: "2+", label: "Anos de Experiência", icon: "⚡" },
              { number: "10+", label: "Projetos Completados", icon: "🚀" },
              { number: "24/7", label: "Disponibilidade", icon: "🌟" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-violet-300 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer message */}
          <motion.div variants={item} className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500">
              ✨ Aberto a oportunidades remotas e presenciais • Brasil &
              Internacional
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
