import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/K.png";;

const NavItem = [
  { name: "Home", link: "#home" },
  { name: "Sobre", link: "#about" },
  { name: "Portfólio", link: "#projects" },
  { name: "Habilidades", link: "#skills" },
  { name: "Formação", link: "#education" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-6 left-0 w-full z-50 flex justify-center"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <nav
        className={`w-[95%] max-w-6xl flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md shadow-lg border-gray-200"
            : "bg-black/40 backdrop-blur border-white/30"
        }`}
      >
        {/* Logo / Nome */}
        <img src={logo} alt="Logo" className="w-15" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {NavItem.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-300 hover:text-white transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl p-6 flex flex-col items-center gap-6 md:hidden">
          {NavItem.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
};

export default Header;