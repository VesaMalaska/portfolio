import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function AnimatedSphere1() {
    return (
        <Sphere visible args={[1, 300, 100]} scale={3.2} position={[0.5,0,-2]}>
            <MeshDistortMaterial 
                color="#6332BD"
                attach="material"
                distort={0.4}
                speed={0.3}
                roughness={0.6}
            />
        </Sphere>
    )
}