import foto from "../../assets/minha-foto.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${foto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 w-full justify-between px-10 md:px-20">
        <motion.h1
          className="text-white text-4xl md:text-9xl font-bold"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Klarc
        </motion.h1>

        <motion.h1
          className="text-white text-4xl md:text-9xl font-bold"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Almeida
        </motion.h1>
      </div>

      <div className="relative z-10 w-full place-items-end px-10 md:px-20">
        <div className="w-60">
          <motion.p
            className="text-white text-xl text-wrap"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Crio aplicações web modernas focadas em desempenho e experiência do
            usuário.
          </motion.p>

          <div className="w-full mt-8">
            <motion.a
              className="text-white border border-white rounded-full bg-black/30 p-5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.08 }}
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