import { useEffect, useState } from "react";

const NavItem = [
  { name: "Home", link: "#home" },
  { name: "Sobre", link: "#about" },
  { name: "Portfólio", link: "#projects" },
  { name: "Habilidades", link: "#skills" },
  { name: "Formação", link: "#education" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 w-full h-12 z-50 flex justify-center">

      <nav
        className={`flex w-6xl justify-center items-center gap-8 px-8 py-3 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md shadow-lg border-gray-200"
            : "bg-black/40 backdrop-blur border-white/30"
        }`}
      >
        {NavItem.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="text-lg font-medium text-gray-300 hover:text-"
          >
            {item.name}
          </a>
        ))}
      </nav>

    </header>
  );
};

export default Header;