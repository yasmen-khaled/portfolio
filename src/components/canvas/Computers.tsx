import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, useGLTF, SoftShadows, Html } from "@react-three/drei";
import { EffectComposer, Bloom,  } from '@react-three/postprocessing'
import { useThree } from '@react-three/fiber';




const Computers = ({ isMobile }) => {
  const { scene, animations, nodes, materials } = useGLTF('./desktop_pc/scene.gltf');
  const mixer = useRef();
  const { camera, gl } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const audioRef = useRef(null); 




  // music effect

  useEffect(() => {
    const audio = new Audio('./desktop_pc/radio.mp4');
    audio.loop = true;
    audioRef.current = audio;
    audio.play();
  }, []);

  useEffect(() => {
    const onClick = (event) => {
      mouse.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      raycaster.current.setFromCamera(mouse.current, camera);

      const intersects = raycaster.current.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const material2 = intersects.find(intersect => intersect.object.name === 'Material2');
        if (material2) {
          if (audioRef.current.paused) {
            audioRef.current.play();
          } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; 
          }
        }
      }
    };

    gl.domElement.addEventListener("mousedown", onClick);

    return () => {
      gl.domElement.removeEventListener("mousedown", onClick);
    };
  }, [gl, camera, scene]);


  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material) => {
        material.castShadow = true;
        material.receiveShadow = true;
        
        
        if (material.map instanceof THREE.VideoTexture) {
        
          material.map.play();
        }
      });
    }
  }, [materials]);



// lamp effect

  useEffect(() => {
    const onClick = (event) => {
      mouse.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
  
      raycaster.current.setFromCamera(mouse.current, camera);
  
      const intersects = raycaster.current.intersectObjects(scene.children, true);
  
      if (intersects.length > 0) {
        const targetObject = intersects.find(intersect => intersect.object.name === 'lamp');
        if (targetObject) {
          const pointLight = scene.getObjectByName('Point');
          if (pointLight) {
            pointLight.intensity = pointLight.intensity === 0 ? 1 : 0;
          } else {
            console.warn('PointLight not found in the scene.');
          }
        } else {
          console.warn('Target object not found.');
        }
      } else {
        console.log('No intersections found.');
      }
    };
  
    gl.domElement.addEventListener("mousedown", onClick);
  
    return () => {
      gl.domElement.removeEventListener("mousedown", onClick);
    };
  }, [gl, camera, scene]);



  
  useEffect(() => {
  if (materials) {
    Object.values(materials).forEach((material) => {
      material.castShadow = true;
      material.receiveShadow = true;

      // Check if the material is the one intended for the video display
      if (material.name === 'screen') { // Ensure 'screen' matches the actual material name in your GLTF
        // Create a new VideoTexture instance with the correct path to your video file
        const videoTexture = new THREE.VideoTexture('./desktop_pc/music.mp4');

        // Set the material's map to the newly created video texture
        material.map = videoTexture;

        // Mark the material as needing an update to ensure Three.js applies the new texture
        material.needsUpdate = true;

        // Optionally, if you want the video to start playing automatically, uncomment the next line:
        videoTexture.play();
      }
    });
  }
}, [materials]);


  // anmetion effect
  
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]); 
      action.play();
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