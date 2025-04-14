import { Container, TextBox, TimelineBox, TimelineItem } from "./indexStyle";

export function FormationTimeline() {
  const educationData = [  
    {
      title: "Análise e Desenvolvimento de Sistemas",
      period: "2025 - Presente",
      description: "Atualmente cursando Tecnólogo em Análise e Desenvolvimento de Sistemas na UCSAL, com foco em desenvolvimento full-stack (JavaScript, React, Node.js), arquitetura de software, DevOps e tecnologias emergentes como IA e cloud computing, complementando a formação com participação em projetos práticos e eventos tecnológicos para aplicação real dos conhecimentos adquiridos."
    },
    {
        title: "Técnico de Desenvolvimento de Sistemas",
        period: "2023 - 2024",
        description: "Cursei Técnico em Desenvolvimento de Sistemas no SENAI, onde adquiri habilidades práticas em programação (Java, JavaScript, Python), banco de dados (MySQL), desenvolvimento web (HTML/CSS, React) e metodologias ágeis (Scrum). Participei ativamente de projetos integradores, como o desenvolvimento de um Sistema de Integração de Turmas chamado de BeConect, aplicando conceitos de engenharia de software e versionamento (Git). A formação, aliando teoria à prática em laboratórios equipados, preparou-me para desafios reais do mercado de TI e consolidou minha paixão pela área."
    },
    {
        title: "Ensino Médio",
        period: "2019 - 2022",
        description: "Minha formação no Ensino Médio foi realizada no Colégio da Polícia Militar Francisco Pedro de Oliveira, instituição reconhecida por sua excelência acadêmica e disciplina, aliando rigor educacional à formação cívica e de valores. Durante os três anos de ensino, tive a oportunidade de desenvolver não apenas conhecimentos técnicos e científicos, mas também habilidades como disciplina, trabalho em equipe e responsabilidade social, características marcantes da metodologia da escola. O currículo, baseado em uma abordagem disciplinar e organizada, proporcionou uma base sólida em ciências humanas, exatas e biológicas, preparando-me para desafios acadêmicos e profissionais. Além disso, a instituição reforçou valores como hierarquia, respeito e patriotismo, contribuindo para minha formação ética e cidadã.",
    },
  ];

  return (
    <Container>
      {educationData.map((item, index) => (
        <TimelineItem key={index} index={index} middleItem={index === 1}>
          <TimelineBox>
            <TextBox>
              <h2>{item.title}</h2>
              <small>{item.period}</small>
              <p>{item.description}</p>
            </TextBox>
          </TimelineBox>
        </TimelineItem>
      ))}
    </Container>
  );
}