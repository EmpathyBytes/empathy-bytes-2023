/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// This a the Three.js component utilized for the Emerging Tech Team page. You can create a js file just like this for another .gltf or .glb file
// here: https://gltf.pmnd.rs/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

import myModel from "../../models/RightConverse.glb"


function Model(props) {

  const gltf = useLoader(GLTFLoader, myModel);
  return (
    <>
      <primitive object={gltf.scene} scale={6} />
    </>
  );


  // PLEASE READ (6/10/2023)
  // This variation on loading the 3D models is from: https://github.com/pmndrs/gltfjsx
  // There is a compatibility issue with this loader and the new version of three.js, I think it should be resolved soon though.
  // The above code ^^ is a different method to load 3D models (but it has performance issues / is harder to work with). I will use this for now but,
  // we should switch back to below method when these issues are resolved.
  // - Jacob Amin

  
  // const { nodes, materials } = useGLTF(myModel);
  // return (
  //   <group {...props} dispose={null}>
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes.baked_mesh001.geometry}
  //       material={materials["g0.002"]}
  //       position={[0, 0.16, 0]}
  //       rotation={[1.63, 0.01, -0.02]}
  //     />
  //   </group>
  // );
}

useGLTF.preload(myModel);

export default Model;