import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Perspective Digital Floor Grid
const PerspectiveFloor = () => {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const size = 32;
    const divisions = 28;
    const step = size / divisions;
    const y = -4.2;

    // Longitudinal lines (converging in perspective)
    for (let i = -divisions / 2; i <= divisions / 2; i++) {
      points.push(new THREE.Vector3(i * step * 1.6, y, -18));
      points.push(new THREE.Vector3(i * step * 0.5, y, 8));
    }

    // Horizontal lines
    for (let j = 0; j <= divisions; j++) {
      const z = -18 + j * step;
      const spread = 1 + ((z + 18) / size) * 1.4;
      points.push(new THREE.Vector3(-18 * spread, y, z));
      points.push(new THREE.Vector3(18 * spread, y, z));
    }

    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      // Subtle pulse
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.14 + Math.sin(state.clock.elapsedTime * 0.7) * 0.04;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        color="#8fd3f4"
        transparent
        opacity={0.16}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
};

// Subtle upper perspective horizon guide lines for expansive depth
const PerspectiveHorizon = () => {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const count = 12;
    const y = 4.8;

    for (let i = -count / 2; i <= count / 2; i++) {
      points.push(new THREE.Vector3(i * 3.5, y, -18));
      points.push(new THREE.Vector3(i * 1.2, y, 6));
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        color="#4a9fd8"
        transparent
        opacity={0.06}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
};

// Ambient floating dust particles / stars
const AmbientDust = ({ count = 140 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18 - 2;

      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return [pos, vel];
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const array = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      array[i * 3] += velocities[i * 3];
      array[i * 3 + 1] += velocities[i * 3 + 1];
      array[i * 3 + 2] += velocities[i * 3 + 2];

      if (Math.abs(array[i * 3]) > 13) velocities[i * 3] *= -1;
      if (Math.abs(array[i * 3 + 1]) > 9) velocities[i * 3] *= -1;
      if (Math.abs(array[i * 3 + 2] + 2) > 10) velocities[i * 3 + 2] *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#cfeeff"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

// Main Scene Container with interactive mouse parallax
const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;

    // Smooth lerp mouse parallax
    mouseTarget.current.x += (pointer.x * 0.25 - mouseTarget.current.x) * 0.05;
    mouseTarget.current.y += (pointer.y * 0.15 - mouseTarget.current.y) * 0.05;

    groupRef.current.rotation.y = mouseTarget.current.x;
    groupRef.current.rotation.x = -mouseTarget.current.y;
  });

  return (
    <group ref={groupRef}>
      <PerspectiveFloor />
      <PerspectiveHorizon />
      <AmbientDust count={140} />
    </group>
  );
};

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
