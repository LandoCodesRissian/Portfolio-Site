import React, { useState, useRef, Suspense} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[1]'>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload />
      </Canvas>
    </div>
  )
}

export default StarsCanvas