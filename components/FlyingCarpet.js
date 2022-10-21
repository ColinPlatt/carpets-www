import { Suspense, useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, FlyControls, Sky, Html } from "@react-three/drei";
import { Cloud } from "./Cloud"

//import { gsap } from 'gsap'

import { Model } from './Model'

function randCloud(max) {
    return Math.floor(Math.random() * max) * (Math.round(Math.random()) ? 1 : -1);
}

function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randEl() {
    return Math.floor(Math.random() * (100 - 10) + 10) / 10;
}

function createClouds() {

    const clouds = [];

    for (let i = 0; i<250; i++) {
        const x = randCloud(1000);
        const y = randCloud(500);
        const z = randCloud(500);
        const speed = randEl();
        const segments = randBetween(10,50);
        const opacity = randEl();

        clouds[i] = [x,y,z,speed,segments,opacity];
    }

    return clouds;
}

const cloudsGroup = createClouds().map((params, i) =>

    (<Cloud key={i} position={[params[0],params[1],params[2]]} speed={params[3]} segments={params[4]} opacity={params[5]} />)
);

const MovingClouds = () => {
    const clouds = <Cloud position={[10,10,50]} speed={0.1} segments={10} opacity={0.5} />;

    console.log(clouds)

    useFrame(() => {
        
        clouds.position[2] -= 0.1;

    });
    return clouds;
}

extend({ MovingClouds })

export default function FlyingCarpet({imageUrl}) {
   
    return (
    <Canvas
        camera={{fov: 50, near: 0.1, far: 500, position: [7.5, 5, 1.5]
    }}
    >
        <Suspense fallback={<Html>Loading...</Html>}>
            <FlyControls
                
            />
            <fog attach="fog" args={['gray', 100, 1000]} />
            <ambientLight color={0xF4ECCF} intensity={0.5} />
            <pointLight intensity={0.1} position={[3, 0, -1000]} />
            
            {imageUrl && <Model imageUrl={imageUrl} />}
                
        </Suspense>
        {cloudsGroup}
        <Sky azimuth={0.25} turbidity={5} rayleigh={5} inclination={0.1} distance={4500000} sunPosition={[3, 0, -8]} mieCoefficient={0.003} mieDirectionalG={0.2} />
    </Canvas>
  )
}
