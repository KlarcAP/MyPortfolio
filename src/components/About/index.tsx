import { AboutMe, AboutMeContext, MyPhoto, TechIconsContainer } from "./indexStyle";
import MyPhotoAbout from "../../assets/minhaFoto.png";
import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

export function SobreMim() {
    return (
        <>
            <AboutMe>
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <AboutMeContext>
                        <h1>Olá! Eu sou Klarc Almeida</h1>
                        <br />
                        <p>
                            Desenvolvedor Frontend Freelancer com 1 ano de experiência, especializado na criação de soluções digitais personalizadas para pequenas e médias empresas. Planejo, desenvolvo e entrego websites profissionais e interfaces modernas, utilizando HTML, CSS, JavaScript, Node.js e React.
                            <br />
                            <br />
                            Com foco em experiências intuitivas e responsivas, mantenho uma comunicação próxima para garantir que cada projeto reflita a identidade e os objetivos do cliente. Comprometido com alta qualidade, valorizo a funcionalidade, estética e atenção aos detalhes, sempre buscando aprimorar minhas habilidades e superar expectativas.
                        </p>
                    </AboutMeContext>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <MyPhoto>
                        <img src={MyPhotoAbout} alt="Foto do Klarc Almeida" />
                        <TechIconsContainer>
                            <FaReact color="#61DBFB" size={50} />
                            <FaNodeJs color="#68A063" size={60} />
                            <FaHtml5 color="#E34F26" size={50} />
                            <FaCss3Alt color="#1572B6" size={60} />
                            <FaJs color="#F7DF1E" size={50} />
                        </TechIconsContainer>
                    </MyPhoto>
                </motion.div>
            </AboutMe>
        </>
    );
}
