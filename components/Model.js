import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

function onClick(event) {
    event.preventDefault();

    console.log("clicked");

}

export function Model({imageUrl, ...props}) {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/FlyingCarpet_test2.glb"
  );


  const texture = useTexture(imageUrl);
  const { actions, mixer } = useAnimations(animations, group);


  console.log(materials.Carpet.map, 'aaaaa')
  materials.Carpet.map = texture;
  useEffect(() => {
    actions.Action?.play();
  }, [mixer]);


  return (
    <group ref={group} position={[0, 0, 0]} dispose={null}>
      <group name="Scene">
        <mesh
            onContextMenu={(e) => console.log('context menu')}
        >
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
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/FlyingCarpet_test2.glb");
