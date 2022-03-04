import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function AnimatedSphere2() {
    return (
        <Sphere visible args={[1, 300, 100]} scale={1.3} position={[2.5,-0.6,0.6]} rotation={[0,1,1]}>
            <MeshDistortMaterial 
                color="#0AD3FF"
                attach="material"
                distort={0.5}
                speed={0.6}
                roughness={0.6}
            />
        </Sphere>
    )
}