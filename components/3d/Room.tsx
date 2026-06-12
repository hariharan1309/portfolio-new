"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { ScrollControls, Scroll, useScroll, Text, Float } from "@react-three/drei";

function CameraController() {
  const scroll = useScroll();
  useFrame((state) => {
    // Map scroll progress (0 to 1) to camera Z position
    // The room goes from z=0 to z=-20, so we move camera from z=5 to z=-18
    state.camera.position.z = 5 - (scroll.offset * 23);
  });
  return null;
}

export function Room() {
  const group = useRef<THREE.Group>(null);

  // Living organism breathing effect on the whole room
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.02;

    }
  });

  return (
    <ScrollControls pages={4} damping={0.25}>
      <CameraController />
      <group ref={group}>
        {/* Infinite Corridor using primitive shapes */}
        <mesh position={[0, -2, -10]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 50]} />
          <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[0, 4, -10]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 50]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.8} />
        </mesh>

        <mesh position={[-5, 1, -10]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[50, 10]} />
          <meshStandardMaterial color="#151515" metalness={0.8} roughness={0.4} />
        </mesh>

        <mesh position={[5, 1, -10]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[50, 10]} />
          <meshStandardMaterial color="#151515" metalness={0.8} roughness={0.4} />
        </mesh>

        <Scroll html={false}>
          {/* Scrollable Content inside the room mapping to Z-axis flythrough */}
          <group position={[0, 0, 0]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
              <Text
                position={[0, 0, -3]}
                fontSize={1.2}
                color="#fff"
                anchorX="center"
                anchorY="middle"
              >
                HARIHARAN
              </Text>
              <Text
                position={[0, -0.8, -3]}
                fontSize={0.4}
                color="#a1a1aa"
                anchorX="center"
                anchorY="middle"
              >
                Frontend Engineer
              </Text>
            </Float>

            {/* Abstract screen for "Projects" */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <group position={[-2.5, 0, -8]}>
                <mesh>
                  <boxGeometry args={[2, 2.5, 0.1]} />
                  <meshStandardMaterial color="#18181b" metalness={0.9} roughness={0.1} />
                </mesh>
                <mesh position={[0, 0, 0.06]}>
                  <planeGeometry args={[1.8, 2.3]} />
                  <meshBasicMaterial color="#8b5cf6" />
                </mesh>
                <Text position={[0, 0, 0.1]} fontSize={0.25} color="#fff">
                  PROJECTS
                </Text>
              </group>
            </Float>

            {/* Abstract screen for "Experience" */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <group position={[2.5, 0, -14]}>
                <mesh>
                  <boxGeometry args={[2, 2.5, 0.1]} />
                  <meshStandardMaterial color="#18181b" metalness={0.9} roughness={0.1} />
                </mesh>
                <mesh position={[0, 0, 0.06]}>
                  <planeGeometry args={[1.8, 2.3]} />
                  <meshBasicMaterial color="#06b6d4" />
                </mesh>
                <Text position={[0, 0, 0.1]} fontSize={0.25} color="#fff">
                  EXPERIENCE
                </Text>
              </group>
            </Float>

            {/* End Cap */}
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
              <Text
                position={[0, 0, -20]}
                fontSize={0.8}
                color="#fff"
                anchorX="center"
                anchorY="middle"
              >
                GET IN TOUCH
              </Text>
            </Float>
          </group>
        </Scroll>
      </group>
    </ScrollControls>
  );
}
