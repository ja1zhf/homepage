'use client';

import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';
import Loading from './loading';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef<any>();
  const [speed, setSpeed] = useState<any>(140);
  const { camera, gl } = useThree();
  useFrame(() => {
    orbitRef.current.update();
    setSpeed(speed <= 1 ? 1 : speed - Math.PI);
  });

  return (
    <OrbitControls
      autoRotate
      autoRotateSpeed={speed}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/model/keyboard.gltf');
  return <primitive object={gltf.scene} />
}

const Scene = () => {
  return (
    <Canvas style={{ height: "300px", width: "500px" }} orthographic camera={{ zoom: 50, position: [0, 10, 20] }}>
      <Suspense fallback={<Loading />}>
        <Model />
        <ambientLight intensity={1.5} />
        <Controls />
      </Suspense>
    </Canvas>
  )
}

export default Scene;
