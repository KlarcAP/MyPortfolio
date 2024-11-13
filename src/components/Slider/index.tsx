import logoDocker from '../../assets/logoDocker.png';
import logoFigma from '../../assets/logoFigma.png';
import logoMongo from '../../assets/logoMongo.png';
import logoNodeJs from '../../assets/logoNodeJs.png';
import logoReact from '../../assets/logoReact.png';
import logoSass from '../../assets/logoSass.png';
import logoTailwind from '../../assets/logoTailwind.png';
import logoTypescript from '../../assets/logoTypescript.png';
import { StyledSlider } from './indexStyle';

// Array de objetos com `id` único e `src` da imagem
const items = [
  { id: 'docker', src: logoDocker },
  { id: 'figma', src: logoFigma },
  { id: 'mongo', src: logoMongo },
  { id: 'nodejs', src: logoNodeJs },
  { id: 'react', src: logoReact },
  { id: 'sass', src: logoSass },
  { id: 'tailwind', src: logoTailwind },
  { id: 'typescript', src: logoTypescript }
];

const Slider = () => {
  const quantity = items.length;
  const width = 300; // Largura de cada item (pode ser adaptado)
  const height = 200; // Altura de cada item (pode ser adaptado)

  return (
    <>
      <StyledSlider
        style={{
          '--width': `${width}px`,
          '--height': `${height}px`,
          '--quantity': quantity,
        } as React.CSSProperties}
      >
        <div className="list">
          {items.map((item) => (
            <div
              className="item"
              key={item.id} // Use `id` como a chave única
              style={{
                '--position': items.indexOf(item) + 1,
              } as React.CSSProperties}
            >
              <img src={item.src} alt={`Slider item ${item.id}`} />
            </div>
          ))}
        </div>
      </StyledSlider>
    </>
  );
};

export default Slider;
