"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Companion() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={group} position={[0, -0.05, 0]}>
        <mesh castShadow position={[0, 0.05, 0]}>
          <sphereGeometry args={[0.62, 16, 12]} />
          <meshStandardMaterial color="#c4b5fd" roughness={0.72} />
        </mesh>
        <mesh position={[0, 0.48, 0]} scale={[0.72, 0.42, 0.72]}>
          <sphereGeometry args={[0.62, 16, 12]} />
          <meshStandardMaterial color="#f5f3ff" roughness={0.68} />
        </mesh>
        <mesh position={[-0.22, 0.58, 0.03]} rotation={[0, 0, -0.18]} scale={[0.13, 0.3, 0.13]}>
          <capsuleGeometry args={[0.5, 0.5, 6, 10]} />
          <meshStandardMaterial color="#f5f3ff" roughness={0.7} />
        </mesh>
        <mesh position={[0.22, 0.58, 0.03]} rotation={[0, 0, 0.18]} scale={[0.13, 0.3, 0.13]}>
          <capsuleGeometry args={[0.5, 0.5, 6, 10]} />
          <meshStandardMaterial color="#f5f3ff" roughness={0.7} />
        </mesh>
        <mesh position={[-0.2, 0.53, 0.53]} scale={[0.06, 0.09, 0.04]}>
          <sphereGeometry args={[1, 12, 8]} />
          <meshStandardMaterial color="#312e81" />
        </mesh>
        <mesh position={[0.2, 0.53, 0.53]} scale={[0.06, 0.09, 0.04]}>
          <sphereGeometry args={[1, 12, 8]} />
          <meshStandardMaterial color="#312e81" />
        </mesh>
        <mesh position={[0, 0.4, 0.57]} scale={[0.06, 0.045, 0.04]}>
          <sphereGeometry args={[1, 12, 8]} />
          <meshStandardMaterial color="#f0abfc" />
        </mesh>
      </group>
    </Float>
  );
}

export function Sonia3DScene() {
  return (
    <Canvas camera={{ position: [0, 0.1, 3], fov: 34 }} dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "low-power" }}>
      <ambientLight intensity={2.2} />
      <directionalLight position={[2, 3, 4]} intensity={2.5} />
      <Companion />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}
