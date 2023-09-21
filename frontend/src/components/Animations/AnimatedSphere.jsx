import React from "react";
import { Circle, MeshDistortMaterial } from '@react-three/drei' //Sphere, CubicBezierLine, Ring

export default function AnimatedSphere() {
    return (
        <Circle visible args={[1, 100, 200]} scale={3} >
            <MeshDistortMaterial roughness={0} distort={0.1} speed={5}
                color='#3b296f' />
        </Circle>
    )
}

