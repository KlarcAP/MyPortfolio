import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/KlarcAP",
      icon: <FaGithub />,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/klarc-almeida-908774162/",
      icon: <FaLinkedin />,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      url: "mailto:klarcalmeida@gmail.com",
      icon: <CgMail />,
      color: "hover:text-cyan-400",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5571993791975",
      icon: <FaWhatsapp />,
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Formação", href: "#education" },
    { name: "Contato", href: "#contact" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
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

  const handleScroll = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const offset = 100;
      const top = element.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-neutral-950/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={item} className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 flex items-center justify-center">
                <span className="text-neutral-950 font-bold text-lg">K</span>
              </div>
              <h3 className="text-xl font-bold text-white">Klarc Almeida</h3>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Desenvolvedor Full-Stack apaixonado por criar experiências
              digitais inovadoras e soluções tecnológicas que fazem a diferença.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Contato</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400">📧</span>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">
                  klarcalmeida@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400">📱</span>
                <span>+55 71 99379-1975</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400">📍</span>
                <span>Salvador, Bahia - Brasil</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={item}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Klarc Almeida. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>Feito com ❤️ e React</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <span>Sempre aprendendo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
    </footer>
  );
}
