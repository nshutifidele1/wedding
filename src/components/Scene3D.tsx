import  { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function WeddingScene() {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Wedding arch */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[4, 0.2, 0.2]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      <mesh position={[-2, 1, 0]}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      <mesh position={[2, 1, 0]}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      
      {/* Flowers */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[Math.cos(i) * 2, 0.5, Math.sin(i) * 2]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial color="#F8BBD9" />
        </mesh>
      ))}
      
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 5, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <WeddingScene />
          <Environment preset="sunset" />
          <OrbitControls enablePan={false} minDistance={3} maxDistance={15} />
        </Suspense>
      </Canvas>
    </div>
  );
}
 