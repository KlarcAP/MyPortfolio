import { Container, Servico, Servicos, Title } from "./indexStyle";
import { motion } from "framer-motion";

const InfoService = [
  {
    title: "Desenvolvimento Web",
    description:
      "Criação de sites modernos e responsivos, com foco na experiência do usuário e compatibilidade com todos os dispositivos. Inclui integração com APIs e sistemas personalizados.",
  },
  {
    title: "Desenvolvimento Mobile",
    description:
      "Desenvolvimento de aplicativos híbridos para Android e iOS, utilizando tecnologias modernas que garantem desempenho eficiente e interfaces intuitivas.",
  },
  {
    title: "Design UI/UX",
    description:
      "Criação de interfaces atraentes e funcionais, alinhadas à experiência do usuário. Ofereço protótipos interativos, identidade visual e design focado na usabilidade.",
  },
];

export function ServicosSection() {
  return (
    <Container>
      <Title>
        Serviços que eu ofereço:
      </Title>
      <Servicos>
        {InfoService.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 50,
            }}
          >
            <Servico>
              <h3>{info.title}</h3>
              <p>{info.description}</p>
            </Servico>
          </motion.div>
        ))}
      </Servicos>
    </Container>
  );
}
