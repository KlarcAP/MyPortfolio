import { BoxIcons, Cardproject, ProjectContent, ProjectLinks } from "./indexStyle";

interface CardProjectProps{
    imagem: string,
    titulo: string,
    descricao: string,
    siteLink: string,
    repoLink: string,
    icons: string[],
}

const CardProject: React.FC<CardProjectProps> = ({imagem, titulo, descricao, siteLink, repoLink, icons}) => {
    return(
        <Cardproject>
            <img src={imagem} alt={titulo} className="project-image" />
            <ProjectContent>
                <h3>{titulo}</h3>
                <p>{descricao}</p>

                <BoxIcons>
                    {icons.map((icons, index) =>(
                        <img key={index} src={icons} alt={`Ícone da tecnologia ${index + 1}`} className="tech-icon" />
                    ))}
                </BoxIcons>

                <ProjectLinks>
                    <a href={siteLink} target="_blank" rel="noopener noreferrer" className="button">
                        Visitar Site
                    </a>
                    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="button">
                        Repositório
                    </a>
                </ProjectLinks>

            </ProjectContent>
        </Cardproject>
    )
}

export default CardProject;