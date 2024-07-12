import React, { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE for AnimationMixer

const Earth = () => {
  const earth = useGLTF("./traffic/scene.gltf");
  const mixer = useRef();

  useEffect(() => {
    if (earth.animations && earth.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(earth.scene);
      const action = mixer.current.clipAction(earth.animations[0]);
      action.play();

      return () => {
        if (mixer.current) {
          mixer.current.stopAllAction();
        }
      };
    }
  }, [earth]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (

    
    <>

    
      <primitive object={earth.scene} scale={1.8} position-y={-0.1} position-x={-1.8} rotation-x={0.2}  />
      <OrbitControls
        enableZoom={false}
        maxpolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2} 
        minAzimuthAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2} 


      /> {/* Add OrbitControls here */}


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

    </>
  );
};

export default Earth;
