import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

export function Model(props) {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/FlyingCarpet_test2.glb"
  );
  

  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions.Action?.play();
  }, [mixer]);
  
  return (
    <group ref={group} position={[0, 0, 0]} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Bone} />
          <skinnedMesh
            name="Sphere001"
            geometry={nodes.Sphere001.geometry}
            material={materials.Tassels}
            skeleton={nodes.Sphere001.skeleton}
          />
          <skinnedMesh
            name="Carpet"
            geometry={nodes.Carpet.geometry}
            material={materials.Carpet}
            skeleton={nodes.Carpet.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/FlyingCarpet_test2.glb");
