import React, { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import { useGLTF ,OrbitControls} from '@react-three/drei';
import * as THREE from 'three'; 

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf"); // Adjust the path to your GLTF file
  const mixer = useRef();

  useEffect(() => {
    if (earth.animations && earth.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(earth.scene); // Initialize the AnimationMixer
      const action = mixer.current.clipAction(earth.animations[0]); // Get the action of the first animation
      action.play(); 

      return () => {
        if (mixer.current) {
          mixer.current.stopAllAction(); // Stop all animations on cleanup
        }
      };
    }
  }, [earth]); // Re-run the effect if the GLTF data changes

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta); // Update the animation mixer in each frame
    }
  });

  return (
    <>
      <primitive object={earth.scene} scale={2.9} position-y={-2} rotation-x={0} rotation-z={0} />
      <OrbitControls
        autoRotate={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <hemisphereLight intensity={1.5} groundColor="black" />
      <spotLight
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        color={"black"}
      />
      <spotLight decay={0} position={[20, 20, 10]} angle={0.3} penumbra={1} intensity={3.7} castShadow color="#0c8cbf" />
      <spotLight position={[5, 0, 5]} intensity={1.5} penumbra={1} angle={1.35} castShadow color="#0c8cbf" />
      <directionalLight position={[-50, 1, -70]} intensity={0} />
    </>
  );
};

export default Earth;
