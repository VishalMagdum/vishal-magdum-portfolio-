import React from "react";
import { Sphere, CubicBezierLine, Ring, Circle, MeshDistortMaterial } from '@react-three/drei'

export default function AnimatedSphere() {
    return (
        <Circle visible args={[1, 100, 200]} scale={3} >
            <MeshDistortMaterial roughness={0} distort={0.1} speed={5}
                color='#3b296f' />
        </Circle>
    )
}

