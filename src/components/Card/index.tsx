import { Container, Card, Links } from "./indexStyle";

type Project = {
  name: string;
  image: string;
  description: string;
  siteLink?: string; // Tornar opcional
  repoLink?: string; // Tornar opcional
  icons: string[]; // Ícones podem ser strings de classes ou URLs
};

const Carousel: React.FC = () => {
  const data: Project[] = [
    {
      name: "BeConect",
      image: "src/assets/beconnect.png",
      description: "O BEConect é uma plataforma que integra estudantes do SENAI, proporcionando um ambiente online para troca de conhecimentos, contextualização dos cursos e orientação profissional.",
      siteLink: "https://projeto1.com",
      repoLink: "https://github.com/projeto1",
      icons: ["🌟", "🔥"],
    },
    {
      name: "RisoFlow",
      image: "src/assets/risoflow.png",
      description: "É uma plataforma que simplifica o gerenciamento de estoque, oferecendo controle eficiente de entradas e saídas, análise em tempo real e relatórios automatizados. Ideal para empresas que buscam otimizar processos, reduzir custos e melhorar a organização do fluxo de produtos.",
      siteLink: "https://projeto2.com",
      repoLink: "https://github.com/projeto2",
      icons: ["🚀", "💻"],
    },
    {
      name: "Projeto 3",
      image: "https://via.placeholder.com/300",
      description: "Projeto 3 - Descrição",
      siteLink: undefined, // Simulando ausência de link
      repoLink: "https://github.com/projeto3",
      icons: ["🎨", "⚙️"],
    },
  ];

  return (
    <Container>
      {data.map((project) => (
        <Card key={project.name}>
           {/* Imagem do projeto */}
            <img src={project.image} alt={project.name} />

            {/* Overlay com informações */}
            <div className="overlay">
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
            </div>
          {/* Ícones */}
          <div>
            {project.icons.map((icon, i) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                style={{ margin: "0 5px" }}
                aria-label={`Ícone ${icon}`}
                title={`Ícone ${icon}`}
              >
                {icon}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default Carousel;
