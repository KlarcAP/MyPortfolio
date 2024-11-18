import CardProject from '../Card';
import {Container} from './indexStyle';

export function SectionProjects(){

    const project = {
        imagem: "https://via.placeholder.com/300",
        titulo: "Meu Projeto",
        descricao: "Este é um projeto incrível que utiliza React e TypeScript.",
        icons: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        ],
        siteLink: "https://meuprojeto.com",
        repoLink: "https://github.com/meuprojeto"
    };

    return(
        <Container>
            <CardProject
                imagem={project.imagem}
                titulo={project.titulo}
                descricao={project.descricao}
                icons={project.icons}
                siteLink={project.siteLink}
                repoLink={project.repoLink}
            />
        </Container>
    )
}