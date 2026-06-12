"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Glitch, ChromaticAberration } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { Vector2 } from "three";
import { Suspense, useState, useEffect } from "react";
import { useMode } from "@/components/ModeProvider";
import { Room } from "./Room";

export function Scene3D() {
  const { is3DMode } = useMode();
  const [glitchActive, setGlitchActive] = useState(false);

  // Trigger glitch effect when entering 3D mode
  useEffect(() => {
    if (is3DMode) {
      // Small timeout to decouple from synchronous render cycle
      const timerActive = setTimeout(() => setGlitchActive(true), 50);
      const timerInactive = setTimeout(() => setGlitchActive(false), 1500);
      return () => {
        clearTimeout(timerActive);
        clearTimeout(timerInactive);
      };
    }
  }, [is3DMode]);

  if (!is3DMode) return null;

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#8b5cf6" />

        <Suspense fallback={null}>
          <Room />
        </Suspense>

        <EffectComposer>
          {/* Using Chromatic Aberration as alternative to lens warp to create bent edges feeling */}
          <ChromaticAberration
            offset={new Vector2(0.005, 0.005)}
            radialModulation={true}
            modulationOffset={0.5}
            blendFunction={0}
          />
          <Glitch
            delay={new Vector2(0, 0)}
            duration={new Vector2(1.5, 2.5)}
            strength={new Vector2(0.3, 0.6)}
            mode={GlitchMode.SPORADIC}
            active={glitchActive}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
