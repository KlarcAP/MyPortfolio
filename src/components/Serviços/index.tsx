import { Container, Servico, Servicos, Title } from "./indexStyle";


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
        title: "SEO e Performance",
        description:
          "Otimização de sites para motores de busca, melhorando a visibilidade online. Diagnóstico de performance e implementação de soluções para tempos de carregamento rápidos.",
      },
      {
        title: "Consultoria Técnica",
        description:
          "Apoio em decisões estratégicas para projetos de software. Ajuda na escolha de tecnologias adequadas, arquitetura de sistemas e melhores práticas de desenvolvimento.",
      },
      {
        title: "Design UI/UX",
        description:
          "Criação de interfaces atraentes e funcionais, alinhadas à experiência do usuário. Ofereço protótipos interativos, identidade visual e design focado na usabilidade.",
      },
      {
        title: "Teste e Qualidade (QA)",
        description:
          "Execução de testes manuais e automatizados para garantir que aplicações estejam livres de erros, além de oferecer relatórios detalhados sobre performance e bugs.",
      },
];
export function ServicosSection (){
    return(
        <Container>
            <Title>
                Serviços que eu ofereço:
            </Title>
            <Servicos>
                {InfoService.map ((info) =>(
                    <Servico key={info.title}>
                        <h3 key={info.title}>{info.title}</h3>
                        <p key={info.description}>{info.description}</p>
                    </Servico>
                ))}
            </Servicos>
        </Container>
    )
}