import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, FlyControls, Sky, Cloud, Html } from "@react-three/drei";
import { gsap } from 'gsap'

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
            position={[randCloud(250), randCloud(250), randCloud(250)]}
            //width={randBetween(10,1000)}
            speed={randEl()}
            segments={randBetween(4,40)}
            opacity={randEl()}
        />;
    }

    return aClouds;
}

function MovingClouds() {
    
    const clouds = CloudsComponent();

    console.log(`cloud component ${clouds[0]}`);

        /*
    useEffect(() => {
        gsap.to(clouds.position, {
            x: "-=200",
            repeat: "-1"
          });
        }, []);
        */

    return clouds;
}

export default function FlyingCarpet({imageUrl}) {
  return (
    <Canvas
    camera={{fov: 50, near: 0.1, far: 500, position: [7.5, 5, 1.5]
    }}>
    <Suspense fallback={<Html>Loading...</Html>}>
        <OrbitControls
        />
        <fog attach="fog" args={['white', 100, 1000]} />
        <ambientLight intensity={0.5} />
        <pointLight intensity={1} position={[0, 0, -1000]} />
        

        {imageUrl && <Model imageUrl={imageUrl} />}
        {/* <Model imageUrl={imageUrl}/> */}
        <MovingClouds/>
    </Suspense>
    <Sky azimuth={0.01} turbidity={5} rayleigh={1} inclination={0.6} distance={10000} />
    </Canvas>
  )
}
