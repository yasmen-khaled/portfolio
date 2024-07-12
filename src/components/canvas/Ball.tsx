import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
 
  OrbitControls,
  Preload,

} from "@react-three/drei";

import CanvasLoader from "../layout/Loader";



const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} 
        
        />
       
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
