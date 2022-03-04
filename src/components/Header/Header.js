import Link from 'next/link';
import {Suspense} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Canvas } from '@react-three/fiber';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { OrbitControls } from '@react-three/drei';
import WezQText from '../WezQ-text';

const Header = () =>  (
  <Container>
    <Div1>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight color={0x404040} intensity={0.4} />
        <directionalLight position={[1, 1, 3.5]} intensity={0.5} />
        <Suspense fallback={null}>
          <WezQText />
        </Suspense>
      </Canvas>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/VesaMalaska/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vesamalaska/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/starbangledwoofwoof/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
