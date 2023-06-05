import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

const House = () => {
    const house = useGLTF('./forest_house/scene.gltf');

    return (
        <mesh>
            <primitive
                object={house.scene}
                scale={24}
                position={[0, -2.3, 1.3]}
            />
        </mesh>
    );
};

const HouseCanvas = () => {
    return (
        <Canvas
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 25, near: 0.1, far: 200, position: [-10, 5, -3] }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    // autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <House />
            </Suspense>
        </Canvas>
    );
};

export default HouseCanvas;
