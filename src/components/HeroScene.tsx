'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function CopperVessel() {
  const meshRef  = useRef<THREE.Mesh>(null);
  const glowRef  = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    // Slow auto-rotation
    meshRef.current.rotation.y = t * 0.18 + pointer.x * 0.3;
    meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.06 + pointer.y * -0.15;
    // Glow pulse
    if (glowRef.current) {
      const s = 1 + Math.sin(t * 1.2) * 0.04;
      glowRef.current.scale.setScalar(s);
    }
  });

  return (
    <group position={[3.2, 0, 0]}>
      {/* Glow sphere behind vessel */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial
          color="#B87333"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main body of the vessel */}
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.4}>
        <mesh ref={meshRef} castShadow>
          {/* Lathe geometry creates a Samovar-like vase shape */}
          <latheGeometry
            args={[
              [
                new THREE.Vector2(0,       -1.4),
                new THREE.Vector2(0.28,    -1.35),
                new THREE.Vector2(0.55,    -1.1),
                new THREE.Vector2(0.72,    -0.8),
                new THREE.Vector2(0.85,    -0.45),
                new THREE.Vector2(0.88,    -0.1),
                new THREE.Vector2(0.82,     0.2),
                new THREE.Vector2(0.68,     0.5),
                new THREE.Vector2(0.52,     0.75),
                new THREE.Vector2(0.38,     0.95),
                new THREE.Vector2(0.28,     1.1),
                new THREE.Vector2(0.22,     1.3),
                new THREE.Vector2(0.26,     1.5),
                new THREE.Vector2(0.32,     1.62),
                new THREE.Vector2(0.24,     1.72),
                new THREE.Vector2(0.14,     1.78),
                new THREE.Vector2(0,        1.8),
              ],
              64,
            ]}
          />
          <meshStandardMaterial
            color="#B87333"
            metalness={0.95}
            roughness={0.18}
            envMapIntensity={1.8}
          />
        </mesh>

        {/* Spout */}
        <mesh position={[0.9, 0.3, 0]} rotation={[0, 0, -Math.PI / 6]} castShadow>
          <cylinderGeometry args={[0.06, 0.09, 0.55, 16]} />
          <meshStandardMaterial color="#C9A84C" metalness={0.95} roughness={0.15} />
        </mesh>

        {/* Lid knob */}
        <mesh position={[0, 1.95, 0]} castShadow>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#C9A84C" metalness={0.98} roughness={0.1} />
        </mesh>

        {/* Base ring */}
        <mesh position={[0, -1.45, 0]}>
          <torusGeometry args={[0.3, 0.06, 12, 40]} />
          <meshStandardMaterial color="#D4956A" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Engraved band (darker ring around belly) */}
        <mesh position={[0, -0.1, 0]}>
          <torusGeometry args={[0.88, 0.025, 8, 64]} />
          <meshStandardMaterial color="#7A4E2D" metalness={0.8} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0.25, 0]}>
          <torusGeometry args={[0.83, 0.02, 8, 64]} />
          <meshStandardMaterial color="#7A4E2D" metalness={0.8} roughness={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  const count   = 120;
  const posRef  = useRef<THREE.Points>(null);

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = Math.random() * 5 - 1;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }

  useFrame(({ clock }) => {
    if (!posRef.current) return;
    const t = clock.getElapsedTime();
    const pos = posRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += 0.004;
      if (pos[i * 3 + 1] > 4) pos[i * 3 + 1] = -1;
      pos[i * 3]     += Math.sin(t + i) * 0.001;
    }
    posRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={posRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C9A84C"
        size={0.025}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} color="#D4956A" />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#E8C97A" />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#B87333" />
        <pointLight position={[2, 3, 3]} intensity={1.5} color="#C9A84C" distance={8} />
        <Environment preset="sunset" />
        <CopperVessel />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
