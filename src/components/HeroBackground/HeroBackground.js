import Link from 'next/link';
import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Div1 } from './HeroBackgroundStyles';
import AnimatedSphere1 from '../AnimatedSphere1';
import AnimatedSphere2 from '../AnimatedSphere2';

const HeroBackground = () =>  (
    <Div1>
        <Canvas className="canvas">
            <ambientLight color={0x404040} intensity={1.5} />
            <directionalLight position={[0.5, 2.5, 15]} intensity={0.4} />
            <Suspense fallback={null}>
                <AnimatedSphere1 />
                <AnimatedSphere2 />
            </Suspense>
        </Canvas>
    </Div1>
  );
  
  export default HeroBackground;
  