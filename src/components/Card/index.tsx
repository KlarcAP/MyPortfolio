import { Container, Card, Links } from "./indexStyle";
import Beconect from '../../assets/beconnect.png';
import Risoflow from '../../assets/risoflow.png';
import Dtmoney from '../../assets/dtmoney.png';
import { motion } from "framer-motion";

type Project = {
  name: string;
  image: string;
  description: string;
  siteLink?: string; // Tornar opcional
  repoLink?: string; // Tornar opcional
  icons: string[]; // Ícones podem ser strings de classes ou URLs
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

const Carousel: React.FC = () => {
  const data: Project[] = [
    {
      name: "BeConect",
      image: Beconect,
      description: "O BEConect é uma plataforma que integra estudantes do SENAI, proporcionando um ambiente online para troca de conhecimentos, contextualização dos cursos e orientação profissional.",
      siteLink: "https://projeto1.com",
      repoLink: "https://github.com/projeto1",
      icons: ["🌟", "🔥"],
    },
    {
      name: "RisoFlow",
      image: Risoflow,
      description: "É uma plataforma que simplifica o gerenciamento de estoque, oferecendo controle eficiente de entradas e saídas, análise em tempo real e relatórios automatizados. Ideal para empresas que buscam otimizar processos, reduzir custos e melhorar a organização do fluxo de produtos.",
      siteLink: "https://projeto2.com",
      repoLink: "https://github.com/projeto2",
      icons: ["🚀", "💻"],
    },
    {
      name: "DTMoney",
      image: Dtmoney,
      description: "É uma plataforma intuitiva e eficiente para gestão de gastos e finanças pessoais, projetada para ajudar usuários a controlar suas finanças de maneira simples e organizada. Com recursos como acompanhamento de receitas e despesas, categorização de transações, relatórios financeiros detalhados e gráficos interativos",
      siteLink: undefined, // Simulando ausência de link
      repoLink: "https://github.com/projeto3",
      icons: ["🎨", "⚙️"],
    },
  ];

  return (
    <Container
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {data.map((project) => (
        <Card
          as={motion.div}
          key={project.name}
          variants={projectVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {/* Imagem do projeto */}
          <motion.img src={project.image} alt={project.name} />

          {/* Overlay com informações */}
          <motion.div className="overlay" variants={overlayVariants}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            {/* Links do projeto */}
            <Links>
              {project.siteLink ? (
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visitar site de ${project.name}`}
                >
                  Ver Site
                </a>
              ) : (
                <span>Site não disponível</span>
              )}
              {" | "}
              {project.repoLink ? (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ver repositório de ${project.name}`}
                >
                  Repositório
                </a>
              ) : (
                <span>Repositório não disponível</span>
              )}
            </Links>
          </motion.div>

          {/* Ícones */}
          <motion.div>
            {project.icons.map((icon, i) => (
              <motion.span
                key={i}
                style={{ margin: "0 5px" }}
                aria-label={`Ícone ${icon}`}
                title={`Ícone ${icon}`}
                whileHover={{ scale: 1.2 }}
              >
                {icon}
              </motion.span>
            ))}
          </motion.div>
        </Card>
      ))}
    </Container>
  );
};

export default Carousel;
