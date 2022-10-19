import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Sky, Cloud } from "@react-three/drei";

import { Model } from './Model'

const CloudsComponent = () => (
  <>
    <Cloud position={[-4, -20, -25]} speed={0.2} opacity={0.1} />
    <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
    <Cloud position={[-4, 2, -10]} speed={0.2} opacity={.25} />
    <Cloud position={[4, -20, -5]} speed={0.2} opacity={0.5} />
    <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.25} />
  </>
);

export default function FlyingCarpet({imageUrl}) {
  return (
    <Canvas
    camera={{fov: 50, near: 0.1, far: 1000, position: [7.5, 5, 1.5]
    }}>
    <Suspense fallback={null}>
        <Model imageUrl={imageUrl}/>
        <ambientLight intensity={0.5} />
        <pointLight intensity={1} position={[0, 0, -1000]} />
        <OrbitControls />
        <CloudsComponent/>
    </Suspense>
    <Sky azimuth={0.01} turbidity={5} rayleigh={0.1} inclination={0.6} distance={1000} />
    </Canvas>
  )
}
