import {Container, Box, Content, Title, Description, Icons, Icon} from './indexStyle';
import PHP from '../../assets/php.png';
import React from '../../assets/react.png'
import Javascript from '../../assets/javascript.png';
import Figma from '../../assets/figma.png';
import Nodejs from '../../assets/nodejs.png';
import Tailwind from '../../assets/tailwind.png';
import Docker from '../../assets/docker.png';
import { useEffect, useState } from 'react';

const tecnologias = [
    { nome: 'PHP', icone: PHP },
    { nome: 'React', icone: React },
    { nome: 'JavaScript', icone: Javascript },
    { nome: 'Figma', icone: Figma },
    { nome: 'NodeJs', icone: Nodejs },
    { nome: 'Tailwind', icone: Tailwind },
    { nome: 'Docker', icone: Docker },

];

export function Tecnologias() {

    const [info, setInfo] = useState();
    
    useEffect(() => {
        const timer = setTimeout(() => setInfo(tecnologias[Math.floor(Math.random() * tecnologias.length)]), 5000);
        return () => clearTimeout(timer);
    }, []);
    
    if (!info) return null;
    
    return (
        <Container>
            <Box>
                
                <Content>
                    <Title>Tecnologias</Title>
                    <Description>Estas são as tecnologias que domino:</Description>
                </Content>
                <Icons>
                    {tecnologias.map((tec, index) =>(
                        <Icon key={index}>
                            <img src={tec.icone} alt={tec.nome} />
                            <p>{tec.nome}</p>
                        </Icon>
                    ))}
                </Icons>
            </Box>
        </Container>
    );
}
