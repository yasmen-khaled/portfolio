import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, useGLTF, SoftShadows } from "@react-three/drei";
import { EffectComposer, Bloom,  } from '@react-three/postprocessing'

import { HueSaturation, BrightnessContrast, TiltShift2, WaterEffect } from '@react-three/postprocessing'
import { color } from "framer-motion";


const Computers = ({ isMobile }) => {
  const { scene, animations, nodes, materials } = useGLTF("./desktop_pc/scene.gltf");
  const mixer = useRef();


  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material) => {
        material.castShadow = true;
        material.receiveShadow = true;
      });
    }
  }, [materials]);
  
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]); // Assuming there's only one animation clip
      action.play(); // Start playing the animation
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <group>
     <fog attach="fog" args={['black', 15, 20]} />
    
     


     
      {/* Lights and other components */}
      <color attach="background" args={['black']} />
      <hemisphereLight intensity={0.1} groundColor="black" />
      <spotLight
        position={[1.5, 1, 0]}
        angle={1}
        penumbra={1}
        intensity={50}
        castShadow  color={"#D7B4FF"}
       
      />
            <spotLight decay={0} position={[20, 20, 10]} angle={0.3} penumbra={1} intensity={0.7} castShadow color="#0c8cbf" />
            <spotLight position={[5, 0, 5]} intensity={1.5} penumbra={1} angle={1.35} castShadow color="#0c8cbf" />
            <directionalLight position={[-50, 1, -70]} intensity={0} />
            <SoftShadows size={50} samples={16} />

            

        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={5} />

        <EffectComposer disableNormalPass>

      
        </EffectComposer>
    
      <OrbitControls
        enableZoom={false}
        maxpolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        maxAzimuthAngle={Math.PI / 20} 
        minAzimuthAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI / 2} 
      />
    
    

      {/* Render the GLTF model */}
      {scene && (
        <primitive
          object={scene}
          scale={isMobile ? 0.7 : 0.6}
          position={isMobile ? [0, -3, -2.2] : [2, -1.4, 1.4]}
          rotation={[6.3, -6.8, -0.01]}
        />
      )}
    
      
      
    
    </group>

    
  );
};

export default Computers;