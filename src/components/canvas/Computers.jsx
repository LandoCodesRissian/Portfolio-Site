import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight 
        intensity={1} 
      />
      <spotLight
        position={[-20, 50, 10]}
      />
      <primitive 
      object={computer.scene} 
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation= {[-0.01, -0.2, -0.1]}
      angle={0.12}
      intensity={1}
      castShadow
      shadowMapSize={1024}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add event listener to check screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the 'isMovile' state
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    }

    // Define a callback function to listen for changes to the media query
    mediaQuery.addEventListener('change', handleMediaChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    }
  },[])


  return (
    <Canvas 
    frameloop='demand' 
    shadows camera={{ position: [20, 3, -5], fov: 25 }} 
    gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
