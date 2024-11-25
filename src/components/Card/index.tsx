import { useState } from "react";
import { CarouselContainer, Card, CarouselButton, Links } from "./indexStyle";

type Project = {
  name: string;
  image: string;
  description: string;
  siteLink: string;
  repoLink: string;
  icons: string[]; // Ícones podem ser strings de classes ou URLs
};

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dados dos projetos como um array
  const data: Project[] = [
    {
      name: "Projeto 1",
      image: "https://th.bing.com/th/id/OIP.zSHsMjUpfvqiN_hcLT2G0AHaEK?rs=1&pid=ImgDetMain",
      description: "O BEConect é uma plataforma que integra estudantes do SENAI, proporcionando um ambiente online para troca de conhecimentos, contextualização dos cursos e orientação profissional. A solução conecta talentos e promove a colaboração em um espaço interativo e acessível.",
      siteLink: "https://projeto1.com",
      repoLink: "https://github.com/projeto1",
      icons: ["🌟", "🔥"],
    },
    {
      name: "Projeto 2",
      image: "https://via.placeholder.com/300",
      description: "Projeto 2 - Descrição",
      siteLink: "https://projeto2.com",
      repoLink: "https://github.com/projeto2",
      icons: ["🚀", "💻"],
    },
    {
      name: "Projeto 3",
      image: "https://via.placeholder.com/300",
      description: "Projeto 3 - Descrição",
      siteLink: "https://projeto3.com",
      repoLink: "https://github.com/projeto3",
      icons: ["🎨", "⚙️"],
    },
  ];

  // Funções de navegação
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % data.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);

  // Determina a posição de cada card
  const getPosition = (index: number): "center" | "left" | "right" => {
    if (index === activeIndex) return "center";
    if (index === (activeIndex - 1 + data.length) % data.length) return "left";
    if (index === (activeIndex + 1) % data.length) return "right";
    return "center";
  };

  return (
    <CarouselContainer>
      <CarouselButton style={{ left: "10px" }} onClick={handlePrev}>
        {"<"}
      </CarouselButton>

      {data.map((project, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <Card key={index} position={getPosition(index)}>
          {/* Imagem do projeto */}
          <img
            src={project.image}
            alt={project.name}
            style={{ borderRadius: "10px" }}
          />

          {/* Informações do projeto */}
          <h3>{project.name}</h3>
          <p style={{color: "black", textAlign: "justify"}}>{project.description}</p>

          {/* Links do projeto */}
          
          <Links>
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
              Ver Site
            </a>
            {" | "}
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              Repositório
            </a>

            <div>
              {project.icons.map((icon, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <span key={i} style={{ margin: "0 5px" }}>
                  {icon}
                </span>
              ))}
            </div>

          </Links>

        </Card>
      ))}

      <CarouselButton style={{ right: "10px" }} onClick={handleNext}>
        {">"}
      </CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
