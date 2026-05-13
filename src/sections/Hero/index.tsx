import foto from "../../assets/minha-foto.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${foto})`,
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 w-full px-2 sm:px-6 flex flex-col gap-10 justify-center md:flex-row md:items-end md:justify-between">
        <div className="w-full max-w-full space-y-4 md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 2xl:space-y-6">
          <motion.h1
            className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Klarc
          </motion.h1>

          <motion.h1
            className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 font-bold leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Almeida
          </motion.h1>
        </div>

        <div className="w-full max-w-full md:max-w-xs">
          <motion.p
            className="text-white text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Crio aplicações web modernas focadas em desempenho e experiência do
            usuário.
          </motion.p>

          <div className="mt-8">
            <motion.a
              className="pointer-events-auto cursor-pointer text-white border border-white rounded-full bg-black/30 px-6 py-2 inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Descubra mais
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
