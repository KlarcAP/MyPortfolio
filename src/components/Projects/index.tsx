import {Container, GridContainer, GridItem, Subtitle, Title} from './indexStyle';
import Beconect from '../../assets/beconnect.png';
import Risoflow from '../../assets/risoflow.png';
import Dtmoney from '../../assets/dtmoney.png';

export function SectionProjects(){


    return(
        <Container>
            <Title>PORTFÓLIO</Title>
            <GridContainer>
                <GridItem>
                    <Subtitle>CENTERFYER COLOR</Subtitle>
                    <button>LET'S GO</button>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
                </GridItem>

                <GridItem>
                    <img src={Risoflow}/>
                </GridItem>
                    
                <GridItem>
                    <img src={Dtmoney}/>
                </GridItem>
                    
                <GridItem>
                    <img src={Beconect}/>
                </GridItem>

                <GridItem>
                    <img src={Risoflow}/>
                </GridItem>
            </GridContainer>
        </Container>
    )
}