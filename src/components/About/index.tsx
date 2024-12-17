import { AboutMe, AboutMeContext } from "./indexStyle";
import SolarSystem from "../SolarSystem/index";

export function SobreMim(){
    return(
        <>
            <AboutMe>
                
                <SolarSystem />
                <AboutMeContext>
                    <h3>Sobre mim</h3>
                    <p>Desenvolvedor Frontend Freelancer com 1 ano de experiência, especializado no desenvolvimento de soluções digitais sob medida para pequenas e médias empresas. Atuo no planejamento, criação e entrega de websites profissionais e interfaces modernas, utilizando tecnologias como HTML, CSS, JavaScript, Node.js e React.</p>

                    <p> Meu foco é criar experiências digitais intuitivas e responsivas que atendam às necessidades específicas de cada cliente. Baseado em Salvador, Bahia, trabalho de forma remota, mantendo uma comunicação próxima para garantir que cada projeto reflita a identidade e os objetivos de negócios dos meus clientes.</p>

                    <p>Tenho um compromisso com a entrega de produtos de alta qualidade, com atenção aos detalhes e ênfase na funcionalidade e estética. Além disso, sou motivado pela constante evolução profissional, buscando sempre novas oportunidades de aprendizado para aprimorar minhas habilidades e superar as expectativas em cada projeto.</p>
                </AboutMeContext>
            </AboutMe>
        </>
    )
}