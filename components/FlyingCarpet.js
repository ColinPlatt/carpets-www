import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, FlyControls, Sky, Cloud, Html } from "@react-three/drei";

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

function CloudsComponent() {
    let aClouds = new Array(100);

    for (let i = 0; i < aClouds.length; i++) {
        
        aClouds[i] = <Cloud 
            position={[randCloud(100), randCloud(100), randCloud(100)]} 
            //width={randBetween(10,1000)} 
            speed={randEl()} 
            segments={randBetween(4,40)}
            opacity={randEl()} 
        />;
    }

    return aClouds;
}

export default function FlyingCarpet({imageUrl}) {
  return (
    <Canvas
    camera={{fov: 50, near: 0.1, far: 1000, position: [7.5, 5, 1.5]
    }}>
    <Suspense fallback={<Html>Loading...</Html>}>
        <OrbitControls 
        />
        <ambientLight intensity={0.5} />
        <pointLight intensity={1} position={[0, 0, -1000]} />
        <Model imageUrl={imageUrl}/>
        <CloudsComponent/>
    </Suspense>
    <Sky azimuth={0.01} turbidity={5} rayleigh={0.1} inclination={0.6} distance={1000} />
    </Canvas>
  )
}
