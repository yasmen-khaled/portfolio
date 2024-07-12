import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Card = () => {
  const earth = useGLTF("./card/scene.gltf");

  return (
    <primitive object={earth.scene} scale={9.5} position-y={0} rotation-y={0} />
  );
};

const cardCanvas = () => {
  return (
    <Canvas
     
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls

        />
        
       <Card />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default cardCanvas;
