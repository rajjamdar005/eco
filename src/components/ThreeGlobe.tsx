import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlobeGeometry = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate based on scroll and time
      meshRef.current.rotation.y = scrollY * 0.001 + state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial 
        color="#4CAF50"
        shininess={100}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

interface ThreeGlobeProps {
  className?: string;
  scrollY?: number;
}

const ThreeGlobe = ({ className = "", scrollY = 0 }: ThreeGlobeProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <GlobeGeometry scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default ThreeGlobe;