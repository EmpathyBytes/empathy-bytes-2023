/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// This a the Three.js component utilized for the Emerging Tech Team page. You can create a js file just like this for another .gltf or .glb file
// here: https://gltf.pmnd.rs/


import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import myModel from "../../models/BuzzPlaque.glb"


function BuzzPlaque(props) {
  const { nodes, materials } = useGLTF(myModel);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.baked_mesh001.geometry}
        material={materials["g0.001"]}
        rotation={[Math.PI / 2, 0, -0.26]}
      />
    </group>
  );
}

useGLTF.preload(myModel);

export default BuzzPlaque;