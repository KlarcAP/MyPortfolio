import { AboutMe, AboutMeContext, AboutMeTitle, ButtonBox, MyPhoto, TechIconsContainer } from "./indexStyle";
import MyPhotoAbout from "../../assets/minhaFoto.jpeg";
import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

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
                        <AboutMeTitle>
                            <h2>SOBRE MIM</h2>
                        </AboutMeTitle>
                        
                        <h1>Porque me contratar para o seu proximo projeto?</h1>
                        <br />
                        <p>
                            Sou Desenvolvedor Front-end e Designer UI/UX, com experiência em criar interfaces digitais funcionais e visualmente atraentes. Minha paixão é transformar desafios complexos em soluções simples, intuitivas e bem estruturadas, aliando código limpo a designs impactantes.
                            <br />
                            <br />
                            Meu trabalho vai além do desenvolvimento: é sobre entregar produtos que não apenas funcionam perfeitamente, mas também cativam e envolvem quem os usa. Com um toque pessoal e atenção aos detalhes, garanto que seu projeto seja tanto eficaz quanto único.
                        </p>
                        <ButtonBox as={motion.div} variants={textVariants}>
                            <motion.button
                            type="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            >
                            VER PORTFÓLIO
                            </motion.button>
                        </ButtonBox>           
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
