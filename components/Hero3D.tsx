import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// FIX: Changed import to get the whole module to avoid potential 'this' context issues with the inSphere function.
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleSphere(props: any) {
  const ref = useRef<any>();
  
  // Membuat array Float32Array dengan 5001 titik (x, y, z untuk masing-masing) dalam bentuk bola
  // FIX: Called inSphere on the imported random module to fix the "Expected 1 arguments, but got 0" error.
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.5 }));

  // hook useFrame dipanggil pada setiap frame yang dirender
  useFrame((state, delta) => {
    if (ref.current) {
      // Menambahkan rotasi konstan yang lambat
      ref.current.rotation.y += delta * 0.05;

      // Membuatnya bereaksi terhadap gerakan mouse dengan interpolasi yang mulus (lerp)
      const { mouse } = state;
      const targetX = mouse.y * 0.3;
      const targetY = -mouse.x * 0.3;
      
      // Transisi mulus ke rotasi target
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#5786f5" // Warna aksen biru neon
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 1.8] }}>
        <ParticleSphere />
      </Canvas>
    </div>
  );
};

export default Hero3D;
